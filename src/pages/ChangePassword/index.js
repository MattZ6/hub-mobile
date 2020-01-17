import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
} from 'react-native';

import {
  validatePassword,
  validatePasswordConfirmation,
} from '~/utils/validators';

import { updateProfileRequest } from '~/store/modules/user/actions';

import Input from '~/components/Input';

import { Form, SubmitButton } from './styles';

export default function ChangePassword() {
  const dispatch = useDispatch();

  const loading = useSelector(state => state.user.updating);

  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const [oldPasswordError, setOldPasswordError] = useState();
  const [passwordError, setPasswordError] = useState();
  const [passwordConfirmationError, setPasswordConfirmationError] = useState();

  const [touched, setTouched] = useState(false);

  const oldPasswordRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      oldPasswordRef.current.focus();
    }, 300);
  }, []);

  useEffect(() => {
    if (touched) {
      setOldPasswordError(validatePassword(oldPassword, 'senha antiga'));
    }
  }, [oldPassword, touched]);

  useEffect(() => {
    if (touched) {
      setPasswordError(validatePassword(password, 'nova senha'));
    }
  }, [password, touched]);

  useEffect(() => {
    if (touched) {
      setPasswordConfirmationError(
        validatePasswordConfirmation(passwordConfirmation, password)
      );
    }
  }, [passwordConfirmation, password, touched]);

  function _checkIsValidForm() {
    return (
      !validatePassword(oldPassword) &&
      !validatePassword(password) &&
      !validatePasswordConfirmation(passwordConfirmation, password)
    );
  }

  function handleLogin() {
    Keyboard.dismiss();

    if (_checkIsValidForm()) {
      const data = { oldPassword, password, passwordConfirmation };

      dispatch(updateProfileRequest(data));
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
          <Input
            placeholder="Sua antiga senha"
            secureTextEntry
            returnKeyType="next"
            ref={oldPasswordRef}
            value={oldPassword}
            onChangeText={setOldPassword}
            errorMessage={oldPasswordError}
            invalid={oldPasswordError}
            disabled={loading}
            onSubmitEditing={() => passwordRef.current.focus()}
          />

          <Input
            placeholder="Sua nova senha"
            secureTextEntry
            returnKeyType="next"
            ref={passwordRef}
            value={password}
            onChangeText={setPassword}
            errorMessage={passwordError}
            invalid={passwordError}
            disabled={loading}
            onSubmitEditing={() => passwordConfirmationRef.current.focus()}
          />

          <Input
            placeholder="Confirme sua nova senha"
            secureTextEntry
            returnKeyType="next"
            ref={passwordConfirmationRef}
            value={passwordConfirmation}
            onChangeText={setPasswordConfirmation}
            errorMessage={passwordConfirmationError}
            invalid={passwordConfirmationError}
            disabled={loading}
            onSubmitEditing={handleLogin}
          />

          <SubmitButton onPress={handleLogin} loading={loading}>
            Salvar
          </SubmitButton>
        </Form>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

ChangePassword.navigationOptions = {
  title: 'Alterar senha',
};
