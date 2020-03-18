import React from 'react';
import { Animated } from 'react-native';
import { withNavigation } from 'react-navigation';

import {
  HintContainer,
  HintTitle,
  HintButton,
  HintButtonTitle,
} from '../styles';

function Hint({ navigation }) {
  const opacity = new Animated.Value(0);
  const translateY = new Animated.Value(8);

  React.useEffect(() => {
    function animate() {
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    }

    animate();
  }, []);

  return (
    <HintContainer style={{ opacity, transform: [{ translateY }] }}>
      <HintTitle>
        Hey, você ainda não informou quais são seus gostos musicas... gostaria
        de fazer isso agora?
      </HintTitle>

      <HintButton
        onPress={() => {
          navigation.navigate('UserStylePreferences');
        }}>
        <HintButtonTitle>Bora lá!</HintButtonTitle>
      </HintButton>
    </HintContainer>
  );
}

export default withNavigation(React.memo(Hint));
