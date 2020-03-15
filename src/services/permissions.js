import { PermissionsAndroid } from 'react-native';

import { showToast } from '~/services/toast';

export async function requestPermission(permission) {
  try {
    const status = await PermissionsAndroid.request(permission);

    if (status !== 'granted') {
      showToast('Precisamos de sua permissão');
    }

    return status === 'granted';
  } catch (error) {
    showToast('Erro ao requisitar permissão');

    return false;
  }
}
