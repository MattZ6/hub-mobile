import React, { useState, useEffect, useRef } from 'react';
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { useBackButton } from '~/lib/useBackButton';

import { updateProfileSuccess } from '~/store/modules/user/actions';

import api from '~/services/api';
import { showSuccessSnack } from '~/services/toast';

import Header from '~/components/Header';
import Input from '~/components/Input';

import { validateEmail } from '~/utils/validators';
import { throwRequestErrorMessage } from '~/utils/error';

import { Form, SubmitButton } from '~/pages/ChangeEmail/styles';

function handleBack(loading) {
  return loading;
}

export default function ChangeEmail({ navigation }) {
  const dispatch = useDispatch();

  const profile = useSelector(state => state.user.profile);

  const [email, setEmail] = useState(profile.email);
  const [error, setError] = useState();
  const [touched, setTouched] = useState(false);
  const [loading, setLoading] = useState(false);

  const ref = useRef();

  useBackButton(() => handleBack(loading));

  useEffect(() => {
    ref.current.focus();
  }, []);

  useEffect(() => {
    if (touched) {
      setError(validateEmail(email));
    }
  }, [email, touched]);

  async function _submit() {
    setLoading(true);

    const data = {
      email: email.trim(),
    };

    try {
      const response = await api.put('/v1/users', data);

      dispatch(updateProfileSuccess(response.data));

      showSuccessSnack('E-mail alterado com sucesso');

      navigation.pop();
    } catch (err) {
      throwRequestErrorMessage(err);
      setLoading(false);
    }
  }

  function handleSubmit() {
    Keyboard.dismiss();

    if (!validateEmail(email)) {
      _submit();
    } else {
      setTouched(true);
    }
  }

  return (
    <>
      <Header showBackButton disableBack={loading} title="Alterar meu e-mail" />

      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        enabled={Platform.OS === 'ios'}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1 }}>
          <Form>
            <Input
              placeholder="Seu e-mail"
              keyboardType="email-address"
              returnKeyType="send"
              value={email}
              onChangeText={setEmail}
              ref={ref}
              onSubmitEditing={handleSubmit}
              invalid={!!error}
              errorMessage={error}
              disabled={loading}
            />

            <SubmitButton onPress={handleSubmit} loading={loading}>
              Salvar
            </SubmitButton>
          </Form>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </>
  );
}

ChangeEmail.propTypes = {
  navigation: PropTypes.shape({
    pop: PropTypes.func,
  }).isRequired,
};
