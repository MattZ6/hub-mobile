import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
} from 'react-native';

import { removeProfile } from '~/store/modules/user/actions';
import { signInRequest } from '~/store/modules/auth/actions';

import { validatePassword } from '~/utils/validators';

import Avatar from '~/components/Avatar';

import { Title, Form, SubmitButton } from '~/pages/WelcomeBack/styles';

import Input from '~/components/Input';
import ButtonClear from '~/components/ButtonClear';

export default function WelcomeBack() {
  const dispatch = useDispatch();

  const loading = useSelector(state => state.auth.loading);
  const profile = useSelector(state => state.user.profile);

  const [password, setPassword] = useState('');

  const [passwordError, setPasswordError] = useState(undefined);

  const [touched, setTouched] = useState(false);

  const passwordRef = useRef();

  useEffect(() => {
    if (touched) {
      setPasswordError(validatePassword(password));
    }
  }, [password, touched]);

  function handleLogout() {
    dispatch(removeProfile());
  }

  function handleLogin() {
    Keyboard.dismiss();

    if (!validatePassword(password)) {
      dispatch(signInRequest(profile.email, password));
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
          <Title>Olá novamente, {profile.firstName}</Title>

          <Avatar
            id={profile.id}
            size={120}
            style={{ alignSelf: 'center', marginVertical: 8 }}
          />

          <Input
            style={{ marginTop: 16 }}
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
