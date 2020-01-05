import React, { useRef, useState, useEffect, useMemo } from 'react';
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { signInRequest } from '~/store/modules/auth/actions';

import { validateEmail } from '~/utils/validations';

import { Title, Form, SubmitButton } from '~/pages/Login/styles';

import Input from '~/components/Input';
import ButtonClear from '~/components/ButtonClear';

export default function Login({ navigation }) {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState(undefined);
  const [passwordError, setPasswordError] = useState(undefined);

  const [touched, setTouched] = useState(false);

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
    Keyboard.dismiss();

    setTimeout(() => {
      navigation.navigate('CreateAccount');
    }, 0);
  }

  function handleLogin() {
    Keyboard.dismiss();

    setTouched(true);

    if (!valid) {
      return;
    }

    dispatch(signInRequest(email, password));
  }

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      enabled={Platform.OS === 'ios'}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}>
        <Form>
          <Title>Pronto pro Rock?</Title>

          <Input
            placeholder="Seu e-mail"
            keyboardType="email-address"
            returnKeyType="next"
            value={email}
            onChangeText={setEmail}
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
            onPress={handleNavigate}
            disabled={loading}
            style={{ marginTop: 16 }}>
            Ainda não tenho uma conta :(
          </ButtonClear>
        </Form>
      </KeyboardAvoidingView>
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
