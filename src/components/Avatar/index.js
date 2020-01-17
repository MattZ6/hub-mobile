import React from 'react';
import { WToast } from 'react-native-smart-tip';

import { Picture, Button } from './styles';

export default function Avatar() {
  function handleChangePicture() {
    WToast.show({ data: 'Mudar de foto' });
  }

  return (
    <Picture source={{ uri: `https:i.pravatar.cc/200?u=${Math.random()}` }}>
      {/* <Button onPress={handleChangePicture} /> */}
    </Picture>
  );
}
