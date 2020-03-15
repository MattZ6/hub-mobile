import ImagePicker from 'react-native-image-crop-picker';

import { showToast } from '~/services/toast';
import { requestPermission } from '~/services/permissions';

import { colors } from '~/styles';

export async function getPictureFromGallery() {
  const granted = await requestPermission(
    'android.permission.READ_EXTERNAL_STORAGE'
  );

  if (!granted) {
    return;
  }

  try {
    const res = await ImagePicker.openPicker({
      width: 480,
      height: 480,
      cropping: true,
      includeBase64: true,
      mediaType: 'photo',
      cropperToolbarColor: colors.dark,
      cropperToolbarTitle: 'Editar foto',
      cropperStatusBarColor: colors.dark,
      cropperActiveWidgetColor: colors.success,
    });

    const extIndex = `${res.path}`.lastIndexOf('.');

    const picData = {
      size: res.size,
      mimeType: res.mime,
      file: res.data,
      ext: `${res.path}`.substr(extIndex),
    };

    return picData;
  } catch (error) {
    if (error.code !== 'E_PICKER_CANCELLED') {
      showToast('Falha ao selecionar a foto');
    }

    return null;
  }
}
