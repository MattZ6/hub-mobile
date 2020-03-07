import React, { useState, useRef, useEffect } from 'react';
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
} from 'react-native';
import PropTypes from 'prop-types';

import { useBackButton } from '~/lib/useBackButton';

import api from '~/services/api';
import { showSuccessSnack } from '~/services/toast';

import Header from '~/components/Header';
import Input from '~/components/Input';

import {
  validatePassword,
  validatePasswordConfirmation,
} from '~/utils/validators';
import { throwRequestErrorMessage } from '~/utils/error';

import { Form, SubmitButton } from './styles';

function handleBack(loading) {
  return loading;
}

export default function ChangePassword({ navigation }) {
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const [oldPasswordError, setOldPasswordError] = useState();
  const [passwordError, setPasswordError] = useState();
  const [passwordConfirmationError, setPasswordConfirmationError] = useState();

  const [touched, setTouched] = useState(false);
  const [loading, setLoading] = useState(false);

  const oldPasswordRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();

  useBackButton(() => handleBack(loading));

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

  async function _submit() {
    setLoading(true);

    const data = { oldPassword, password, passwordConfirmation };

    try {
      await api.put('/v1/users', data);

      showSuccessSnack('Senha alterada com sucesso');

      navigation.pop();
    } catch (err) {
      throwRequestErrorMessage(err);
    } finally {
      setLoading(false);
    }
  }

  function handleLogin() {
    Keyboard.dismiss();

    if (_checkIsValidForm()) {
      _submit();
    } else {
      setTouched(true);
    }
  }

  return (
    <>
      <Header showBackButton title="Alterar senha" />

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
    </>
  );
}

ChangePassword.propTypes = {
  navigation: PropTypes.shape({
    pop: PropTypes.func,
  }).isRequired,
};
