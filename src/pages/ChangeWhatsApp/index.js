import React, { useState, useEffect, useRef } from 'react';
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { updateProfileSuccess } from '~/store/modules/user/actions';

import api from '~/services/api';
import { showSuccessSnack } from '~/services/toast';

import Header from '~/components/Header';
import Input from '~/components/Input';
import ButtonClear from '~/components/ButtonClear';

import { validateName } from '~/utils/validators';
import { throwRequestErrorMessage } from '~/utils/error';

import { Form, SubmitButton } from '~/pages/UpdateName/styles';

export default function ChangeWhatsApp({ navigation }) {
  const dispatch = useDispatch();

  const profile = useSelector(state => state.user.profile);

  const [whatsapp, setWhatsapp] = useState(profile.whatsapp);
  const [error, setError] = useState();
  const [touched, setTouched] = useState(false);
  const [loading, setLoading] = useState(false);

  const ref = useRef();

  useEffect(() => {
    setTimeout(() => {
      ref.current.focus();
    }, 300);
  }, []);

  useEffect(() => {
    if (touched) {
      setError(validateName(whatsapp));
    }
  }, [whatsapp, touched]);

  async function _submit() {
    setLoading(true);

    const data = {
      whatsapp: whatsapp.trim(),
    };

    try {
      const response = await api.put('/v1/users', data);

      dispatch(updateProfileSuccess(response.data));

      showSuccessSnack('Número adicionado com sucesso');

      navigation.pop();
    } catch (err) {
      throwRequestErrorMessage(err);
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit() {
    Keyboard.dismiss();

    if (!validateName(whatsapp)) {
      _submit();
    } else {
      setTouched(true);
    }
  }

  return (
    <>
      <Header showBackButton title="WhastApp" />

      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        enabled={Platform.OS === 'ios'}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1 }}>
          <Form>
            <Input
              placeholder="DDD + Número"
              returnKeyType="done"
              keyboardType="phone-pad"
              value={whatsapp}
              onChangeText={setWhatsapp}
              ref={ref}
              onSubmitEditing={handleSubmit}
              invalid={!!error}
              errorMessage={error}
              disabled={loading}
            />

            <SubmitButton onPress={handleSubmit} loading={loading}>
              Salvar
            </SubmitButton>

            <ButtonClear>Remover</ButtonClear>
          </Form>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </>
  );
}

ChangeWhatsApp.propTypes = {
  navigation: PropTypes.shape({
    pop: PropTypes.func,
  }).isRequired,
};
