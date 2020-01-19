import React, { useState, useEffect, useRef } from 'react';
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { updateProfileRequest } from '~/store/modules/user/actions';

import { validateEmail } from '~/utils/validators';

import { Form, SubmitButton } from '~/pages/ChangeEmail/styles';

import Input from '~/components/Input';

export default function ChangeEmail() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.user.updating);

  const profile = useSelector(state => state.user.profile);

  const [email, setEmail] = useState(profile.email);

  const [error, setError] = useState();

  const [touched, setTouched] = useState(false);

  const ref = useRef();

  useEffect(() => {
    setTimeout(() => {
      ref.current.focus();
    }, 300);
  }, []);

  useEffect(() => {
    if (touched) {
      setError(validateEmail(email));
    }
  }, [email, touched]);

  function handleSubmit() {
    Keyboard.dismiss();

    if (!validateEmail(email)) {
      const data = {
        email: email.trim(),
      };

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
  );
}

ChangeEmail.navigationOptions = {
  title: 'Alterar e-mail',
};
