import React, { useRef, useState, useEffect } from 'react';
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  Animated,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

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

  const opacity = new Animated.Value(0);
  const translateY = new Animated.Value(16);

  const [password, setPassword] = useState('');

  const [passwordError, setPasswordError] = useState(undefined);

  const [touched, setTouched] = useState(false);

  const passwordRef = useRef();

  function animate() {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start();
  }

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

  function getAvatarUrl() {
    return profile.avatar ? profile.avatar.url : null;
  }

  useEffect(() => {
    animate();
  }, []);

  useEffect(() => {
    if (touched) {
      setPasswordError(validatePassword(password));
    }
  }, [password, touched]);

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      enabled={Platform.OS === 'ios'}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}>
        <Form>
          <Animated.View
            style={{
              opacity,
              transform: [{ translateY }],
            }}>
            <Title>Olá novamente, {profile.firstName}</Title>

            <Avatar
              name={profile.name}
              url={getAvatarUrl()}
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
          </Animated.View>
        </Form>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

WelcomeBack.navigationOptions = {
  headerShown: false,
};
