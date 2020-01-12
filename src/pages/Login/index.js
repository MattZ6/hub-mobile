import React, { useRef, useState, useEffect } from 'react';
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { signInRequest } from '~/store/modules/auth/actions';

import { validateEmail, validatePassword } from '~/utils/validators';

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

  const passwordRef = useRef();

  useEffect(() => {
    if (touched) {
      setEmailError(validateEmail(email));
    }
  }, [email, touched]);

  useEffect(() => {
    if (touched) {
      setPasswordError(validatePassword(password));
    }
  }, [password, touched]);

  function _checkIsValidForm() {
    return !validateEmail(email) && !validatePassword(password);
  }

  function handleNavigate() {
    Keyboard.dismiss();

    setTimeout(() => {
      navigation.navigate('CreateAccount');
    }, 0);
  }

  function handleLogin() {
    Keyboard.dismiss();

    if (_checkIsValidForm()) {
      dispatch(signInRequest(email.trim(), password));
    } else {
      setTouched(true);
    }
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
