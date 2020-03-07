import { WSnackBar, WToast } from 'react-native-smart-tip';
import { darken } from 'polished';

import { colors } from '~/styles';

const config = {
  position: WSnackBar.position.BOTTOM,
  backgroundColor: colors.black,
  actionText: 'OK',
  actionTextColor: colors.white,
  duration: WToast.duration.SHORT,
  textColor: colors.white,
};

export function showToast(message) {
  WSnackBar.show({ data: message, ...config });
}

export function showSuccessSnack(message) {
  WSnackBar.show({
    data: message,
    backgroundColor: darken(0.05, colors.success),
    textColor: colors.white,
    duration: WToast.duration.SHORT,
    position: WSnackBar.position.TOP,
    height: 55.5,
    statusBarHeight: 20,
  });
}
