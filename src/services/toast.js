import { WSnackBar, WToast } from 'react-native-smart-tip';

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
