import React, { useRef, useState, useEffect, useMemo } from 'react';
import { TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';
import PropTypes from 'prop-types';

import { validateEmail } from '~/utils/validations';

import { Container, Title, Form, SubmitButton } from './styles';

import Input from '~/components/Input';
import ButtonClear from '~/components/ButtonClear';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState(undefined);
  const [passwordError, setPasswordError] = useState(undefined);

  const [touched, setTouched] = useState(false);
  const [loading, setLoading] = useState(false);

  const valid = useMemo(() => {
    const firstTime = emailError === undefined && passwordError === undefined;

    if (firstTime || !touched) {
      return false;
    }

    return !emailError && !passwordError;
  }, [emailError, passwordError, touched]);

  const passwordRef = useRef();

  useEffect(() => {
    if (touched) {
      setEmailError(validateEmail(email));
    }
  }, [email, touched]);

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

  function handleNavigate() {
    navigation.navigate('CreateAccount');
  }

  function handleLogin() {
    Keyboard.dismiss();

    setTouched(true);

    if (!valid) {
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      enabled={Platform.OS === 'ios'}>
      <Container>
        <Form>
          <Title>Pronto pro Rock?</Title>

          <Input
            placeholder="Seu e-mail"
            keyboardType="email-address"
            returnKeyType="next"
            value={email}
            onChangeText={x => setEmail(x)}
            errorMessage={emailError}
            invalid={emailError}
            disabled={loading}
            onSubmitEditing={() => passwordRef.current.focus()}
          />

          <Input
            placeholder="Sua senha"
            secureTextEntry
            returnKeyType="send"
            ref={passwordRef}
            value={password}
            onChangeText={x => setPassword(x)}
            errorMessage={passwordError}
            invalid={passwordError}
            disabled={loading}
            onSubmitEditing={handleLogin}
          />

          <SubmitButton onPress={handleLogin} loading={loading}>
            Vamos lá!
          </SubmitButton>

          <ButtonClear
            onPress={handleNavigate}
            disabled={loading}
            style={{ marginTop: 16 }}>
            Ainda não tenho uma conta :(
          </ButtonClear>
        </Form>
      </Container>
    </TouchableWithoutFeedback>
  );
}

Login.navigationOptions = {
  headerShown: false,
};

Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
