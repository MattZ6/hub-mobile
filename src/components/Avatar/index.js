import React from 'react';
import { WToast } from 'react-native-smart-tip';

import { Picture, Button } from './styles';

export default function Avatar() {
  function handleChangePicture() {
    WToast.show({ data: 'Mudar de foto' });
  }

  return (
    <Picture
      resizeMode="contain"
      source={{ uri: `https:i.pravatar.cc/200?u=${Math.random()}` }}
      imageStyle={{ borderRadius: 60 }}>
      <Button onPress={handleChangePicture} style={{ borderRadius: 20 }} />
    </Picture>
  );
}
