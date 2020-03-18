import React, { useState, useEffect, useRef } from 'react';
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { useBackButton } from '~/hooks/useBackButton';

import { updateProfileSuccess } from '~/store/modules/user/actions';

import api from '~/services/api';
import { showSuccessSnack } from '~/services/toast';

import Header from '~/components/Header';
import Input from '~/components/Input';

import { validateWhatsAppNumber } from '~/utils/validators';
import { throwRequestErrorMessage } from '~/utils/error';

import { Form, SubmitButton } from '~/pages/UpdateName/styles';

function handleBack(loading) {
  return loading;
}

export default function ChangeWhatsApp({ navigation }) {
  const dispatch = useDispatch();

  const profile = useSelector(state => state.user.profile);

  const [whatsapp, setWhatsapp] = useState(profile.whatsapp ?? '');
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
      setError(validateWhatsAppNumber(whatsapp));
    }
  }, [whatsapp, touched]);

  async function _submit() {
    setLoading(true);

    const data = {
      whatsapp: whatsapp.trim(),
      removeWhatsApp: whatsapp.trim().length === 0,
    };

    try {
      const response = await api.put('/v1/users', data);

      dispatch(updateProfileSuccess(response.data));

      if (!profile.whatsapp && data.whatsapp.length > 0) {
        showSuccessSnack('Número adicionado com sucesso');
      } else if (profile.whatsapp && data.whatsapp.length > 0) {
        showSuccessSnack('Número atualizado com sucesso');
      } else {
        showSuccessSnack('Número removido com sucesso');
      }

      navigation.pop();
    } catch (err) {
      throwRequestErrorMessage(err);
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit() {
    Keyboard.dismiss();

    if (!validateWhatsAppNumber(whatsapp)) {
      _submit();
    } else {
      setTouched(true);
    }
  }

  useBackButton(() => handleBack(loading));

  return (
    <>
      <Header showBackButton disableBack={loading} title="WhastApp" />

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
              keyboardType="decimal-pad"
              textContentType="telephoneNumber"
              value={whatsapp}
              onChangeText={setWhatsapp}
              ref={ref}
              onSubmitEditing={handleSubmit}
              invalid={!!error}
              errorMessage={error}
              disabled={loading}
              maxLength={11}
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

ChangeWhatsApp.propTypes = {
  navigation: PropTypes.shape({
    pop: PropTypes.func,
  }).isRequired,
};
