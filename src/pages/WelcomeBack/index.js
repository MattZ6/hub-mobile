import React, { useRef, useState, useEffect, useMemo } from 'react';
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
} from 'react-native';

import { Title, Form, SubmitButton } from '~/pages/WelcomeBack/styles';

import Input from '~/components/Input';
import ButtonClear from '~/components/ButtonClear';

export default function WelcomeBack({ navigation }) {
  const [password, setPassword] = useState('');

  const [passwordError, setPasswordError] = useState(undefined);

  const [touched, setTouched] = useState(false);
  const [loading, setLoading] = useState(false);

  const valid = useMemo(() => {
    const firstTime = passwordError === undefined;

    if (firstTime || !touched) {
      return false;
    }

    return !passwordError;
  }, [passwordError, touched]);

  const passwordRef = useRef();

  useEffect(() => {
    function validatePassword() {
      let error = null;

      if (password.length === 0) {
        error = 'A senha é obrigatória';
      } else if (password.includes(' ')) {
        error = 'A senha não pode conter espaços';
      } else if (password.trim().length < 6) {
        error = 'A senha precisa ter pelo menos 6 caracteres';
      } else {
        error = null;
      }

      if (touched) {
        setPasswordError(error);
      }
    }

    validatePassword();
  }, [password, touched]);

  function handleLogout() {}

  function handleLogin() {
    Keyboard.dismiss();

    setTouched(true);

    if (!valid) {
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigation.navigate('Main');
    }, 2000);
  }

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      enabled={Platform.OS === 'ios'}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}>
        <Form>
          <Title>Olá novamente, Matheus</Title>

          <Input
            placeholder="Sua senha"
            secureTextEntry
            returnKeyType="send"
            ref={passwordRef}
            value={password}
            onChangeText={setPassword}
            errorMessage={passwordError}
            invalid={passwordError}
            disabled={loading}
            onSubmitEditing={handleLogin}
          />

          <SubmitButton onPress={handleLogin} loading={loading}>
            Vamos lá!
          </SubmitButton>

          <ButtonClear
            onPress={handleLogout}
            disabled={loading}
            style={{ marginTop: 16 }}>
            Entrar com outra conta
          </ButtonClear>
        </Form>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

WelcomeBack.navigationOptions = {
  headerShown: false,
};
