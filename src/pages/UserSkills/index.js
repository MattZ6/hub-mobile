import React from 'react';
import { useSelector } from 'react-redux';

import Header from '~/components/Header';
import Fab from '~/components/Fab';

import Skill from './components/Skill';

import { List } from './styles';

export default function UserSkills() {
  const skills = useSelector(state => state.userSkills.userSkills);

  const [removeEnabled, setRemoveEnabled] = React.useState(false);

  function toggleRemoveMode() {
    setRemoveEnabled(!removeEnabled);
  }

  return (
    <>
      <Header
        showBackButton
        title="Minhas habilidades"
        showsRightButton
        rightIcon={removeEnabled ? 'cancel' : 'delete'}
        rightButtonProps={{ onPress: toggleRemoveMode }}
      />

      <List
        data={skills}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Skill skill={item} removeEnabled={removeEnabled} />
        )}
      />

      <Fab icon="add" />
    </>
  );
}
