import React from 'react';
import Modal from 'react-native-modal';
import { useDispatch, useSelector } from 'react-redux';

import api from '~/services/api';
import { throwRequestErrorMessage } from '~/utils/error';

import {
  updateProfileRequest,
  updateUserFirsSkillConfiguration,
} from '~/store/modules/user/actions';

import Header from '~/components/Header';
import Refresher from '~/components/Refresher';
import Button from '~/components/Button';
import Loading from '~/components/Loading';
import ErrorContainer from '~/components/ErrorContainer';
import ButtonClear from '~/components/ButtonClear';

import Skill from './components/Skill';
import BottomSheet from './components/BottomSheet';

import { Container, Description, List, FooterContainer } from './styles';

export default function SkillsConfiguration() {
  const dispatch = useDispatch();
  const updating = useSelector(state => state.user.updating);

  const [skills, setSkills] = React.useState(null);
  const [submiting, setSubmiting] = React.useState(false);
  const [error, setError] = React.useState(false);

  const [currentSelectedSkill, setCurrentSelectedSkill] = React.useState(null);

  const [modalIsVisible, setModalVisibility] = React.useState(false);

  async function getInstruments() {
    setError(false);

    try {
      const { data } = await api.get('/v1/instruments');

      setSkills(data);
    } catch (err) {
      setError(true);
    }
  }

  async function submit(data) {
    setSubmiting(true);

    try {
      await api.post('/v1/skills', data);

      dispatch(updateUserFirsSkillConfiguration(true));
    } catch (err) {
      throwRequestErrorMessage(err);

      setSubmiting(false);
    }
  }

  async function handleSubmit() {
    if (submiting) {
      return;
    }

    const instruments = skills
      .filter(x => x.skillLevel)
      .map(x => ({ skillLevel: x.skillLevel, instrumentId: x.id }));

    if (instruments.length === 0) {
      return;
    }

    submit({ instruments });
  }

  function handleCompleteLater() {
    const data = {
      first_skill_configuration: true,
    };

    dispatch(updateProfileRequest(data));
  }

  function handleSelect(item) {
    setCurrentSelectedSkill(item);
    setModalVisibility(true);
  }

  function hideModal() {
    setModalVisibility(false);
  }

  function handleModalConfirmation(level) {
    const _skills = skills.map(x =>
      x.id === currentSelectedSkill.id ? { ...x, skillLevel: level } : x
    );

    setSkills(_skills);

    hideModal();
  }

  function handleModalRemove() {
    const _skills = skills.map(x =>
      x.id === currentSelectedSkill.id ? { ...x, skillLevel: null } : x
    );

    setSkills(_skills);

    setCurrentSelectedSkill(null);

    hideModal();
  }

  React.useEffect(() => {
    getInstruments();
  }, []);

  return (
    <>
      <Header title="Habilidades" />
      <Container>
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
            <List
              refreshControl={<Refresher />}
              ListHeaderComponent={
                <Description>
                  Para prosseguir com o cadastro informe quais são suas
                  habilidades
                </Description>
              }
              data={skills}
              keyExtractor={item => String(item.id)}
              renderToHardwareTextureAndroid
              renderItem={({ item }) => (
                <Skill skill={item} onPress={() => handleSelect(item)} />
              )}
            />

            <FooterContainer>
              <Button
                enabled={!submiting}
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

      <Modal
        isVisible={modalIsVisible}
        onBackdropPress={hideModal}
        onBackButtonPress={hideModal}
        useNativeDriver
        backdropOpacity={0.8}
        style={{ margin: 0 }}>
        <BottomSheet
          skill={currentSelectedSkill}
          onConfirm={handleModalConfirmation}
          onRemove={handleModalRemove}
        />
      </Modal>
    </>
  );
}
