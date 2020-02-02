import React, { useState, useEffect, useRef } from 'react';
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { updateProfileRequest } from '~/store/modules/user/actions';

import Header from '~/components/Header';
import Input from '~/components/Input';

import { validateName } from '~/utils/validators';

import { Form, SubmitButton } from '~/pages/UpdateName/styles';

export default function UpdateName() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.user.updating);

  const profile = useSelector(state => state.user.profile);

  const [name, setName] = useState(profile.name);

  const [nameError, setNameError] = useState();

  const [touched, setTouched] = useState(false);

  const nameRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      nameRef.current.focus();
    }, 300);
  }, []);

  useEffect(() => {
    if (touched) {
      setNameError(validateName(name));
    }
  }, [name, touched]);

  function handleSubmit() {
    Keyboard.dismiss();

    if (!validateName(name)) {
      const data = {
        name: name.trim(),
      };

      dispatch(updateProfileRequest(data));
    } else {
      setTouched(true);
    }
  }

  return (
    <>
      <Header showBackButton title="Editar nome" />

      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        enabled={Platform.OS === 'ios'}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1 }}>
          <Form>
            <Input
              placeholder="Seu nome completo"
              returnKeyType="next"
              value={name}
              onChangeText={setName}
              ref={nameRef}
              onSubmitEditing={handleSubmit}
              invalid={!!nameError}
              errorMessage={nameError}
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
