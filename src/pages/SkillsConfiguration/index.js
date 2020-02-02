import React, { useState, useEffect, useMemo } from 'react';
import { FlatList } from 'react-native';
import { useDispatch } from 'react-redux';

import api from '~/services/api';
import { throwRequestErrorMessage } from '~/utils/error';

import { updateUserFirsSkillConfiguration } from '~/store/modules/user/actions';

import Header from '~/components/Header';
import SkillSelect from '~/components/SkillSelect';
import Button from '~/components/Button';
import Loading from '~/components/Loading';
import Error from '~/components/Error';

import { Container, Description, FooterContainer } from './styles';

export default function SkillsConfiguration() {
  const dispatch = useDispatch();

  // const opacity = new Animated.Value(0);
  // const translateY = new Animated.Value(104);

  const [skills, setSkills] = useState(null);
  const [submiting, setSubmiting] = useState(false);
  // const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const valid = useMemo(() => {
    return skills && skills.some(x => x.checked);
  }, [skills]);

  // function animateFooter() {
  //   Animated.parallel([
  //     Animated.timing(opacity, {
  //       toValue: 1,
  //       duration: 800,
  //       useNativeDriver: true,
  //     }),
  //     Animated.timing(translateY, {
  //       toValue: 0,
  //       duration: 800,
  //       useNativeDriver: true,
  //     }),
  //   ]).start();
  // }

  async function getInstruments() {
    setError(false);

    try {
      const { data } = await api.get('/v1/instruments');

      setSkills(data);
    } catch (err) {
      setError(true);
    }
  }

  function handleToggleSkill(id) {
    const newSkills = skills.map(x => {
      if (x.id === id) {
        x.checked = !x.checked;
      }

      return x;
    });

    setSkills([...newSkills]);
  }

  async function handleSubmit() {
    setSubmiting(true);

    try {
      const instruments = skills
        .filter(x => x.checked)
        .map(x => ({ skillLevel: 2, instrumentId: x.id }));

      const data = { instruments };

      await api.post('/v1/skills', data);

      dispatch(updateUserFirsSkillConfiguration(true));
    } catch (err) {
      throwRequestErrorMessage(err);

      setSubmiting(false);
    }
  }

  useEffect(() => {
    getInstruments();
  }, []);

  return (
    <Container>
      <Header title="Habilidades" />

      {error && (
        <Error
          icon="cloud-off"
          title="Verifique sua conexão com a internet"
          tip="Toque para tentar novamente"
          onPress={getInstruments}
        />
      )}

      {!error && !skills && <Loading size={56} />}

      {skills?.length > 0 && (
        <>
          <FlatList
            style={{ flex: 1 }}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingTop: 96,
              paddingBottom: 104,
            }}
            ListHeaderComponent={
              <Description>
                Um guerreiro letal conhece o momento exato de mostrar suas
                habilidades
                {/* Para prosseguir com o cadastro informe quais são suas habilidades */}
              </Description>
            }
            data={skills}
            keyExtractor={item => String(item.id)}
            renderToHardwareTextureAndroid
            renderItem={({ item }) => (
              <SkillSelect
                enabled={!submiting}
                key={String(item.id)}
                check={() => handleToggleSkill(item.id)}
                skill={item}
              />
            )}
          />

          {/* <Animated.View style={{ opacity, transform: [{ translateY }] }}> */}
          <FooterContainer>
            <Button
              enabled={valid}
              valid={valid}
              loading={submiting}
              onPress={handleSubmit}>
              Prosseguir
            </Button>
          </FooterContainer>
          {/* </Animated.View> */}
        </>
      )}
    </Container>
  );
}

SkillsConfiguration.navigationOptions = {
  title: 'Habilidades',
};
