import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';

import { useBackButton } from '~/hooks/useBackButton';

import api from '~/services/api';
import { throwRequestErrorMessage } from '~/utils/error';

import {
  updateUserSkills,
  removeUserSkills,
} from '~/store/modules/userSkills/actions';

import Header from '~/components/Header';
import Fab from '~/components/Fab';
import SkillLevelBottomSheet from '~/components/SkillLevelBottomSheet';

import Skill from './components/Skill';

import { List } from './styles';

function handleBackButton(handled) {
  return handled;
}

export default function UserSkills({ navigation }) {
  const dispatch = useDispatch();
  const skills = useSelector(state => state.userSkills.userSkills);

  const [removeEnabled, setRemoveEnabled] = React.useState(false);
  const [selectedSkill, setSelectedSkill] = React.useState(null);
  const [removingSkillId, setRemovingSkillId] = React.useState(null);
  const [updatingSkillId, setUpdatingSkillId] = React.useState(null);

  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const [skillInfo, setSkillInfo] = React.useState(null);

  const disableBack = !!removingSkillId || !!updatingSkillId;

  async function removeSkill(id) {
    try {
      await api.delete(`/v1/skills/${id}`);

      dispatch(removeUserSkills(id));
    } catch (error) {
      throwRequestErrorMessage(error);
    } finally {
      setRemovingSkillId(null);
    }
  }

  async function updateSkill(level) {
    try {
      const proxy = { level };

      const { data } = await api.put(`/v1/skills/${skillInfo.id}`, proxy);

      dispatch(updateUserSkills(data));
    } catch (error) {
      throwRequestErrorMessage(error);
    } finally {
      setUpdatingSkillId(null);
    }
  }

  function toggleRemoveMode() {
    const enableRemove = !removeEnabled;

    setRemoveEnabled(enableRemove);

    if (!enableRemove) {
      setSelectedSkill(null);
      setRemovingSkillId(null);
    }
  }

  function handleNavigate() {
    navigation.navigate('SkillsConfiguration', { fromProfile: true });
  }

  function handleSelect(id) {
    const selected = id === selectedSkill;

    if (selected) {
      setRemovingSkillId(id);

      removeSkill(id);
    } else {
      setSelectedSkill(id);
    }
  }

  function hideModal() {
    setIsModalVisible(false);
  }

  function handleUpdateConfirm(level) {
    setUpdatingSkillId(skillInfo.id);

    hideModal();

    updateSkill(level);
  }

  function handleChangeSkill(skill) {
    setSkillInfo(skill);
    setIsModalVisible(true);
  }

  useBackButton(() => handleBackButton(disableBack));

  return (
    <>
      <Header
        showBackButton
        disableBack={disableBack}
        title="Minhas habilidades"
        showsRightButton={skills.length > 0}
        rightIcon={removeEnabled ? 'cancel' : 'delete'}
        rightButtonProps={{
          onPress: toggleRemoveMode,
          disabled: disableBack,
        }}
      />

      <List
        data={skills}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Skill
            skill={item}
            removeEnabled={removeEnabled}
            selected={selectedSkill === item.id}
            loading={removingSkillId === item.id || updatingSkillId === item.id}
            removeDisabled={!!removingSkillId}
            onSelect={handleSelect}
            onPress={() => handleChangeSkill(item)}
          />
        )}
      />

      <Modal
        isVisible={isModalVisible}
        onBackdropPress={hideModal}
        onBackButtonPress={hideModal}
        useNativeDriver
        backdropOpacity={0.8}
        style={{ margin: 0 }}>
        <SkillLevelBottomSheet
          skillLabel={skillInfo?.instrument_label}
          skillLevel={skillInfo?.skill_level ?? 0}
          onConfirm={handleUpdateConfirm}
        />
      </Modal>

      <Fab icon="add" onPress={handleNavigate} disabled={disableBack} />
    </>
  );
}

UserSkills.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
