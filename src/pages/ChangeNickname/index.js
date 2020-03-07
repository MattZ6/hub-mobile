import React, { useState, useEffect, useRef, useMemo } from 'react';
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

import { validateNickname } from '~/utils/validators';
import { throwRequestErrorMessage } from '~/utils/error';

import { Form, SubmitButton } from '~/pages/UpdateName/styles';

function handleBack(loading) {
  return loading;
}

export default function ChangeNickname({ navigation }) {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  const [nickname, setNickname] = useState(profile.nickname);
  const [nicknameError, setNicknameError] = useState();
  const [touched, setTouched] = useState(false);
  const [loading, setLoading] = useState(false);

  const ref = useRef();

  const MAX_LENGTH_NICKNAME = 12;

  const qtdNickname = useMemo(() => {
    if (!nickname) {
      return MAX_LENGTH_NICKNAME;
    }

    const result = MAX_LENGTH_NICKNAME - nickname.length;

    if (!result || result === 0) {
      return '0';
    }

    return result;
  }, [nickname]);

  useBackButton(() => handleBack(loading));

  useEffect(() => {
    setTimeout(() => {
      ref.current.focus();
    }, 300);
  }, []);

  useEffect(() => {
    if (touched) {
      setNicknameError(validateNickname(nickname));
    }
  }, [nickname, touched]);

  async function _submit() {
    setLoading(true);

    const data = {
      nickname: nickname.trim(),
    };

    try {
      const response = await api.put('/v1/users', data);

      dispatch(updateProfileSuccess(response.data));

      showSuccessSnack('Apelido alterado com sucesso');

      navigation.pop();
    } catch (error) {
      throwRequestErrorMessage(error);
      setLoading(false);
    }
  }

  function handleSubmit() {
    Keyboard.dismiss();

    if (!validateNickname(nickname)) {
      _submit();
    } else {
      setTouched(true);
    }
  }

  return (
    <>
      <Header showBackButton disableBack={loading} title="Alterar apelido" />

      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        enabled={Platform.OS === 'ios'}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1 }}>
          <Form>
            <Input
              placeholder="Nickname (apelido)"
              returnKeyType="next"
              maxLength={MAX_LENGTH_NICKNAME}
              length={qtdNickname}
              value={nickname}
              onChangeText={setNickname}
              ref={ref}
              onSubmitEditing={handleSubmit}
              invalid={!!nicknameError}
              errorMessage={nicknameError}
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

ChangeNickname.propTypes = {
  navigation: PropTypes.shape({
    pop: PropTypes.func,
  }).isRequired,
};
