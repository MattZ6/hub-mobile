import React, { useRef, useState } from 'react';
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
} from 'react-native';

import { Title, Form } from './styles';

import Input from '~/components/Input';
import Button from '~/components/Button';
import ButtonClear from '~/components/ButtonClear';

export default function Login({ navigation }) {
  const [loading, setLoading] = useState(false);

  const passwordRef = useRef();

  function handleNavigate() {
    navigation.navigate('CreateAccount');
  }

  function handleLogin() {
    setLoading(true);

    setTimeout(() => {
      navigation.navigate('Main');

      setLoading(false);
    }, 3000);
  }

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      enabled={Platform.OS === 'ios'}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}>
        <Title>Pronto pro Rock?</Title>

        <Form>
          <Input
            placeholder="Seu e-mail"
            keyboardType="email-address"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            // errorMessage="Por favor, digite um e-mail válido 🙌🏻"
            // invalid
            disabled={loading}
          />

          <Input
            placeholder="Sua senha"
            secureTextEntry
            returnKeyType="send"
            ref={passwordRef}
            // errorMessage="Tem certeza de que essa é sua senha? 🤔"
            // invalid
            disabled={loading}
          />

          <Button onPress={handleLogin} loading={loading}>
            Vamos lá!
          </Button>

          <ButtonClear onPress={handleNavigate} disabled={loading}>
            Ainda não tenho uma conta :(
          </ButtonClear>
        </Form>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

Login.navigationOptions = {
  // headerStyle: {
  //   backgroundColor: 'transparent',
  // },
};
