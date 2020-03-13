import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import api from '~/services/api';
import { showSuccessSnack } from '~/services/toast';

import { removeUserStyle } from '~/store/modules/userStyles/actions';

import { useBackButton } from '~/hooks/useBackButton';

import { throwRequestErrorMessage } from '~/utils/error';

import Header from '~/components/Header';
import InformationContainer from '~/components/InformationContainer';
import Fab from '~/components/Fab';

import Style from './components/Style';

import { List } from './styles';

function handleBack(enable) {
  return enable;
}

export default function UserStylePreferences({ navigation }) {
  const dispatch = useDispatch();

  const _styles = useSelector(state => state.userStyles.userStyles);

  const [styles, setStyles] = React.useState(_styles || []);

  async function deletePreference(index) {
    const { id } = styles.find((_, i) => i === index);

    try {
      await api.delete(`/v1/preferences/${id}`);

      setStyles(styles.filter(x => x.id !== id));

      dispatch(removeUserStyle(id));

      showSuccessSnack('Gosto removido com sucesso!');
    } catch (error) {
      throwRequestErrorMessage(error);

      setStyles(styles.map(x => (x.id !== id ? { ...x, deleting: false } : x)));
    }
  }

  function handleSelect(index) {
    const isSelected = styles.some((x, i) => i === index && x.selected);

    setStyles(
      styles.map((x, i) =>
        index === i ? { ...x, selected: true, deleting: isSelected } : x
      )
    );

    if (isSelected) {
      deletePreference(index);
    }
  }

  function toggleEnableDelete() {
    setStyles(
      styles.map(x => ({
        ...x,
        selected: false,
        showButton: !x.showButton,
        deleting: false,
      }))
    );
  }

  function someDeleting() {
    return styles.some(x => x.deleting);
  }

  function handleNavigate() {
    navigation.navigate('StylePreferences', { fromProfile: true });
  }

  useBackButton(() => handleBack(someDeleting()));

  React.useEffect(() => {
    const stylesToAdd = _styles
      .filter(s => !styles.some(x => x.id === s.id))
      .map(x => ({
        ...x,
        selected: false,
        showButton: styles.some(y => y.showButton),
      }));

    if (stylesToAdd.length > 0) {
      setStyles([...stylesToAdd, ...styles]);
    }
  }, [_styles]);

  return (
    <>
      <Header
        showBackButton
        disableBack={someDeleting()}
        title="Meus gostos musicais"
        rightIcon={styles.some(x => x.showButton) ? 'cancel' : 'delete'}
        showsRightButton={styles.length > 0}
        rightButtonProps={{
          onPress: toggleEnableDelete,
          disabled: someDeleting(),
        }}
      />

      {styles.length > 0 && (
        <List
          data={styles}
          keyExtractor={item => String(item.id)}
          ListHeaderComponent={
            <View>
              <Text style={{ color: 'gray' }}>
                Para cancelar a remoção, toque em{' '}
                <Icon name="cancel" size={16} color="gray" /> novamente
              </Text>
            </View>
          }
          renderItem={({ item, index }) => (
            <Style
              style={item}
              onPress={() => handleSelect(index)}
              disabled={someDeleting()}
            />
          )}
        />
      )}

      <InformationContainer
        style={{ flex: 1 }}
        icon="music-note"
        title="Batata"
        description="Alguma descriçãozinha"
      />

      <Fab icon="add" onPress={handleNavigate} disabled={someDeleting()} />
    </>
  );
}

UserStylePreferences.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
