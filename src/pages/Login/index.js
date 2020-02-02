import React, { useRef, useState, useEffect } from 'react';
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  ImageBackground,
  Animated,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { signInRequest } from '~/store/modules/auth/actions';

import { validateEmail, validatePassword } from '~/utils/validators';

import {
  Title,
  Form,
  FormBackground,
  SubmitButton,
} from '~/pages/Login/styles';

import Input from '~/components/Input';
import ButtonClear from '~/components/ButtonClear';

export default function Login({ navigation }) {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const opacity = new Animated.Value(0);
  const translateY = new Animated.Value(16);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState(undefined);
  const [passwordError, setPasswordError] = useState(undefined);

  const [touched, setTouched] = useState(false);

  const passwordRef = useRef();

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

  useEffect(() => {
    animate();
  }, []);

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      enabled={Platform.OS === 'ios'}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}>
        <ImageBackground
          style={{ flex: 1 }}
          imageStyle={{
            opacity: 0.2,
            alignSelf: 'center',
            height: 200,
          }}
          resizeMode="cover"
          fadeDuration={800}
          source={{
            uri:
              'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F3YPgNe1pqUc%2Fmaxresdefault.jpg&f=1&nofb=1',
          }}>
          <Form>
            <FormBackground>
              <Animated.View
                style={{
                  opacity,
                  transform: [{ translateY }],
                }}>
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
              </Animated.View>
            </FormBackground>
          </Form>
        </ImageBackground>
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
