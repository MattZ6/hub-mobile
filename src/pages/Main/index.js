import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import api from '~/services/api';
import { setUserStyles } from '~/store/modules/userStyles/actions';
import { setUserSkills } from '~/store/modules/userSkills/actions';

import Refresher from '~/components/Refresher';

import Header from './components/Header';
import MusicianList from './components/MusicianList';
import Hint from './components/Hint';

import { Container, Title } from '~/pages/Main/styles';

function randomizeArray(data) {
  const randomArray = [];

  while (data.length !== 0) {
    const randomIndex = Math.floor(Math.random() * data.length);

    randomArray.push(data[randomIndex]);

    data.splice(randomIndex, 1);
  }

  return randomArray;
}

export default function Main({ navigation }) {
  const dispatch = useDispatch();

  const { region } = useSelector(state => state.user.profile);
  const [lastRegionId, setLastRegionId] = React.useState(null);

  const styles = useSelector(state => state.userStyles.userStyles);
  const skills = useSelector(state => state.userSkills.userSkills);

  const [musicians, setMusicians] = React.useState(null);
  const [musiciansByStyle, setMusiciansByStyle] = React.useState(null);

  const [refreshing, setRefreshing] = React.useState(false);

  async function getMusiciansByRegion() {
    try {
      const { data } = await api.get(`/v1/musicians?regions=${region.id}`);

      setMusicians(randomizeArray(data));

      setLastRegionId(region.id);
    } catch (err) {
      // TODO: Implementar erro nessa caraia
    }
  }

  async function getMusiciansByStyle() {
    // const stylesToAdd = [];

    // lastStylesId.forEach(lastStyleId => {
    //   if(!styles.some(x => x.style.id === lastStyleId)){
    //     stylesToAdd()
    //   }
    // });

    // const diff = styles.filter((x,i) => x.style.id === lastStylesId)
    // // if(lastStylesId && lastStylesId.)

    // if (styles?.length > 0 && !musiciansByStyle) {
    try {
      const data = await Promise.all(
        styles.map(x => api.get(`/v1/musicians?styles=${x.style.id}`))
      );

      // setLastStylesId(styles.map(x => x.id));

      setMusiciansByStyle(data.map(x => randomizeArray(x.data)));
    } catch (error) {
      // TODO: Fazer alguma coisa;
    }
    // }
  }

  async function handleRefresh() {
    setRefreshing(true);

    await Promise.all([getMusiciansByRegion(), getMusiciansByStyle()]);

    setRefreshing(false);
  }

  React.useEffect(() => {
    async function getStyles() {
      if (Array.isArray(styles)) {
        return;
      }

      try {
        const res = await api.get('/v1/preferences');

        dispatch(setUserStyles(res.data));
      } catch (err) {
        // Não precisa fazer nada por enquanto
      }
    }

    async function getStylesData() {
      await getStyles();

      if (styles?.length > 0 && !musiciansByStyle) {
        getMusiciansByStyle();
      }
    }

    getStylesData();
  }, [styles]);

  React.useEffect(() => {
    async function getSkills() {
      if (Array.isArray(skills)) {
        return;
      }

      try {
        const res = await api.get('/v1/skills');

        dispatch(setUserSkills(res.data));
      } catch (err) {
        // Não precisa fazer nada por enquanto
      }
    }

    getSkills();
  }, [skills]);

  React.useEffect(() => {
    if (lastRegionId !== region.id) {
      getMusiciansByRegion();
    }
  }, [region]);

  return (
    <>
      <Header />

      <Container
        refreshControl={
          <Refresher refreshing={refreshing} onRefresh={handleRefresh} />
        }>
        <Title>Home</Title>

        {musicians && (
          <MusicianList
            title="Músicos próximos a você"
            description={region.name}
            style={{ marginBottom: 32 }}
            musicians={musicians}
            size={112}
          />
        )}

        {styles &&
          musiciansByStyle &&
          musiciansByStyle.map(
            (x, i) =>
              styles[i] && (
                <MusicianList
                  key={String(styles[i].style.id)}
                  description={`Músicos que também gostam de ${styles[i].style.name}`}
                  showMusicianNick={false}
                  musicians={x}
                />
              )
          )}

        {styles?.length === 0 && <Hint />}
      </Container>
    </>
  );
}
