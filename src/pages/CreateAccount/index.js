import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Keyboard } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { signUpRequest } from '~/store/modules/auth/actions';
import { removeRegion } from '~/store/modules/region/actions';

import Header from '~/components/Header';
import Input from '~/components/Input';
import ItemButton from '~/components/ItemButton';

import * as validators from '~/utils/validators';

import {
  Container,
  Form,
  Label,
  Description,
  SubmitButton,
} from '~/pages/CreateAccount/styles';

export default function CreateAccount({ navigation }) {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);
  const region = useSelector(state => state.region.region);

  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const [nameError, setNameError] = useState();
  const [nicknameError, setNicknameError] = useState();
  const [locationError, setLocationError] = useState();
  const [emailError, setEmailError] = useState();
  const [passwordError, setPasswordError] = useState();
  const [passwordConfirmationError, setPasswordConfirmationError] = useState();

  const [touched, setTouched] = useState(false);

  const nameRef = useRef();
  const nicknameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const MAX_LENGTH_NICKNAME = 12;

  useEffect(() => {
    nameRef.current.focus();

    return () => {
      dispatch(removeRegion());
    };
  }, []);

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

  useEffect(() => {
    if (touched) {
      setNameError(validators.validateName(name));
    }
  }, [name, touched]);

  useEffect(() => {
    if (touched) {
      setNicknameError(validators.validateNickname(nickname));
    }
  }, [nickname, touched]);

  useEffect(() => {
    if (touched) {
      setEmailError(validators.validateEmail(email));
    }
  }, [email, touched]);

  useEffect(() => {
    if (touched) {
      setPasswordError(validators.validatePassword(password));
    }
  }, [password, touched]);

  useEffect(() => {
    if (touched) {
      setPasswordConfirmationError(
        validators.validatePasswordConfirmation(passwordConfirmation, password)
      );
    }
  }, [password, passwordConfirmation, touched]);

  useEffect(() => {
    const message =
      touched && !region ? 'A seleção da cidade é obrigatória' : null;

    setLocationError(message);
  }, [region, touched]);

  function handleNavigate() {
    navigation.navigate('SelectLocation');
  }

  function _checkIsValidForm() {
    return (
      !validators.validateName(name) &&
      !validators.validateNickname(nickname) &&
      !validators.validateEmail(email) &&
      !validators.validatePassword(password) &&
      !validators.validatePasswordConfirmation(
        passwordConfirmation,
        password
      ) &&
      region
    );
  }

  function handleSubmit() {
    Keyboard.dismiss();

    if (_checkIsValidForm()) {
      const data = {
        name: name.trim(),
        nickname: nickname.trim(),
        email: email.trim(),
        password: password.trim(),
        passwordConfirmation: passwordConfirmation.trim(),
        regionId: region.id,
      };

      dispatch(signUpRequest(data));
    } else {
      setTouched(true);
    }
  }

  return (
    <>
      <Header showBackButton title="Cadastro" />
      <Container>
        <Form>
          <Label>Usuário</Label>
          <Description>Como você será conhecido dentro do app</Description>

          <Input
            placeholder="Seu nome completo"
            returnKeyType="next"
            value={name}
            onChangeText={setName}
            ref={nameRef}
            onSubmitEditing={() => nicknameRef.current.focus()}
            invalid={!!nameError}
            errorMessage={nameError}
            disabled={loading}
          />

          <Input
            placeholder="Nickname (apelido)"
            returnKeyType="next"
            maxLength={MAX_LENGTH_NICKNAME}
            length={qtdNickname}
            value={nickname}
            onChangeText={setNickname}
            ref={nicknameRef}
            onSubmitEditing={() => emailRef.current.focus()}
            invalid={!!nicknameError}
            errorMessage={nicknameError}
            disabled={loading}
          />

          <Label>Cidade</Label>
          <Description>Local de sua residência atual</Description>

          <ItemButton
            style={{ marginBottom: 16 }}
            title={region?.name}
            disabled={loading}
            description={
              region
                ? 'Toque para alterar sua cidade'
                : 'Toque para selecionar sua cidade'
            }
            invalid={locationError}
            errorMessage={locationError}
            leftIcon="room"
            rightIcon="edit"
            onPress={handleNavigate}
          />

          <Label>Credenciais</Label>
          <Description>Para futuros logins no aplicativo</Description>

          <Input
            placeholder="Seu melhor e-mail"
            keyboardType="email-address"
            returnKeyType="next"
            value={email}
            onChangeText={setEmail}
            ref={emailRef}
            onSubmitEditing={() => passwordRef.current.focus()}
            invalid={!!emailError}
            errorMessage={emailError}
            disabled={loading}
          />

          <Input
            placeholder="Sua senha"
            secureTextEntry
            returnKeyType="next"
            value={password}
            onChangeText={setPassword}
            ref={passwordRef}
            onSubmitEditing={() => confirmPasswordRef.current.focus()}
            invalid={!!passwordError}
            errorMessage={passwordError}
            disabled={loading}
          />

          <Input
            placeholder="Confirme sua senha"
            secureTextEntry
            returnKeyType="send"
            value={passwordConfirmation}
            onChangeText={setPasswordConfirmation}
            ref={confirmPasswordRef}
            onSubmitEditing={handleSubmit}
            invalid={!!passwordConfirmationError}
            errorMessage={passwordConfirmationError}
            disabled={loading}
          />

          <SubmitButton onPress={handleSubmit} loading={loading}>
            Let&rsquo;s Rock
          </SubmitButton>
        </Form>
      </Container>
    </>
  );
}

CreateAccount.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
