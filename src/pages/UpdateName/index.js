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

import { validateName } from '~/utils/validators';
import { throwRequestErrorMessage } from '~/utils/error';

import { Form, SubmitButton } from '~/pages/UpdateName/styles';

function handleBack(loading) {
  return loading;
}

export default function UpdateName({ navigation }) {
  const dispatch = useDispatch();

  const profile = useSelector(state => state.user.profile);

  const [name, setName] = useState(profile.name);
  const [nameError, setNameError] = useState();
  const [touched, setTouched] = useState(false);
  const [loading, setLoading] = useState(false);

  const nameRef = useRef();

  useBackButton(() => handleBack(loading));

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

  async function _submit() {
    setLoading(true);

    const data = {
      name: name.trim(),
    };

    try {
      const response = await api.put('/v1/users', data);

      dispatch(updateProfileSuccess(response.data));

      showSuccessSnack('Nome alterado com sucesso');

      navigation.pop();
    } catch (err) {
      throwRequestErrorMessage(err);
      setLoading(false);
    }
  }

  function handleSubmit() {
    Keyboard.dismiss();

    if (!validateName(name)) {
      _submit();
    } else {
      setTouched(true);
    }
  }

  return (
    <>
      <Header showBackButton disableBack={loading} title="Editar nome" />

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

UpdateName.propTypes = {
  navigation: PropTypes.shape({
    pop: PropTypes.func,
  }).isRequired,
};
