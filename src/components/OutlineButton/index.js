import React from 'react';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

// import { Container } from './styles';

export default function OutlineButton({ style, ...rest }) {
  return (
    <RectButton
      {...rest}
      rippleColor="green"
      style={{
        alignSelf: 'center',
        // marginVertical: 16,
        borderRadius: 4,
        backgroundColor: 'rgba(255,255,255,.0)',
        ...style,
      }}>
      <View
        style={{
          paddingVertical: 8,
          paddingHorizontal: 16,
          borderWidth: 1,
          borderRadius: 4,
          borderStyle: 'solid',
          borderColor: 'green',
        }}>
        <Text style={{ fontSize: 16, color: 'rgba(255,255,255,1)' }}>
          Tentar novamente
        </Text>
      </View>
    </RectButton>
  );
}
