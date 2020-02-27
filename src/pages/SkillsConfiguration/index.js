import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import api from '~/services/api';
import { throwRequestErrorMessage } from '~/utils/error';

import {
  updateProfileRequest,
  updateUserFirsSkillConfiguration,
} from '~/store/modules/user/actions';

import Header from '~/components/Header';
import SkillSelect from '~/components/SkillSelect';
import Button from '~/components/Button';
import Loading from '~/components/Loading';
import ErrorContainer from '~/components/ErrorContainer';
import ButtonClear from '~/components/ButtonClear';

import { Container, Description, FooterContainer } from './styles';

export default function SkillsConfiguration() {
  const dispatch = useDispatch();
  const updating = useSelector(state => state.user.updating);

  const [skills, setSkills] = useState(null);
  const [submiting, setSubmiting] = useState(false);
  const [error, setError] = useState(false);

  // const valid = useMemo(() => {
  //   return skills && skills.some(x => x.checked);
  // }, [skills]);

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
    const instruments = skills
      .filter(x => x.checked)
      .map(x => ({ skillLevel: 2, instrumentId: x.id }));

    if (instruments.length === 0) {
      return;
    }

    const data = { instruments };

    setSubmiting(true);

    try {
      await api.post('/v1/skills', data);

      dispatch(updateUserFirsSkillConfiguration(true));
    } catch (err) {
      throwRequestErrorMessage(err);

      setSubmiting(false);
    }
  }

  function handleCompleteLater() {
    const data = {
      first_skill_configuration: true,
    };

    dispatch(updateProfileRequest(data));
  }

  useEffect(() => {
    getInstruments();
  }, []);

  return (
    <Container>
      <Header title="Habilidades" />

      {error && (
        <ErrorContainer
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
              paddingBottom: 128,
            }}
            ListHeaderComponent={
              <Description>
                {/* Um guerreiro letal conhece o momento exato de mostrar suas
                habilidades */}
                Para prosseguir com o cadastro informe quais são suas
                habilidades
              </Description>
            }
            data={skills}
            keyExtractor={item => String(item.id)}
            renderToHardwareTextureAndroid
            renderItem={({ item }) => (
              <SkillSelect
                enabled={!submiting && !updating}
                key={String(item.id)}
                check={() => handleToggleSkill(item.id)}
                skill={item}
              />
            )}
          />

          {/* <RefreshControl refreshing onRefresh={() => {}} /> */}

          <FooterContainer>
            <Button
              // enabled={valid && !updating}
              // valid={valid}
              loading={submiting || updating}
              onPress={handleSubmit}>
              Prosseguir
            </Button>

            <ButtonClear
              onPress={handleCompleteLater}
              disabled={submiting || updating}>
              Deixar pra depois...
            </ButtonClear>
          </FooterContainer>
        </>
      )}
    </Container>
  );
}

SkillsConfiguration.navigationOptions = {
  title: 'Habilidades',
};
