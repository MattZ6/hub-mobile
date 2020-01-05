import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { signUpRequest } from '~/store/modules/auth/actions';

import { validateEmail } from '~/utils/validations';

import {
  Form,
  Label,
  Description,
  SubmitButton,
} from '~/pages/CreateAccount/styles';

import Input from '~/components/Input';

export default function CreateAccount() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const [nameError, setNameError] = useState(undefined);
  const [nicknameError, setNicknameError] = useState(undefined);
  const [emailError, setEmailError] = useState(undefined);
  const [passwordError, setPasswordError] = useState(undefined);
  const [passwordConfirmationError, setPasswordConfirmationError] = useState(
    undefined
  );

  const [touched, setTouched] = useState(false);

  const nameRef = useRef();
  const nicknameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const MAX_LENGTH_NICKNAME = 12;

  useEffect(() => {
    setTimeout(() => {
      nameRef.current.focus();
    }, 250);
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

  const valid = useMemo(() => {
    const firstTime =
      nameError === undefined ||
      nicknameError === undefined ||
      emailError === undefined ||
      passwordError === undefined ||
      passwordConfirmationError === undefined;

    if (firstTime || !touched) {
      return false;
    }

    return (
      !nameError &&
      !nicknameError &&
      !emailError &&
      !passwordError &&
      !passwordConfirmationError
    );
  }, [
    emailError,
    nameError,
    nicknameError,
    passwordConfirmationError,
    passwordError,
    touched,
  ]);

  useEffect(() => {
    function validateName() {
      let error = null;

      const regex = new RegExp(
        "^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]*$"
      );

      if (name.length === 0) {
        error = 'O nome é obrigatório';
      } else if (!regex.test(name)) {
        error = 'O nome não deve conter caracteres especiais';
      } else if (name.trim().length < 6) {
        error = 'O nome precisa ter pelo menos 6 caracteres';
      } else {
        error = null;
      }

      if (touched) {
        setNameError(error);
      }
    }

    validateName();
  }, [name, touched]);

  useEffect(() => {
    function validateNick() {
      let error = null;

      if (nickname.length === 0) {
        error = 'O nickname é obrigatório';
      } else if (!new RegExp('^[a-zA-Z0-9_]*$').test(nickname)) {
        error = 'Não são permitidos caracteres especiais';
      } else if (nickname.trim().length < 3) {
        error = 'O nickname precisa ter pelo menos 3 caracteres';
      } else {
        error = null;
      }

      if (touched) {
        setNicknameError(error);
      }
    }

    validateNick();
  }, [nickname, touched]);

  useEffect(() => {
    if (touched) {
      setEmailError(validateEmail(email));
    }
  }, [email, touched]);

  useEffect(() => {
    function validatePassword() {
      let error = null;

      if (password.length === 0) {
        error = 'A senha é obrigatória';
      } else if (password.includes(' ')) {
        error = 'A senha não pode conter espaços';
      } else if (password.trim().length < 6) {
        error = 'A senha precisa ter pelo menos 6 caracteres';
      } else {
        error = null;
      }

      if (touched) {
        setPasswordError(error);
      }
    }

    validatePassword();
  }, [password, touched]);

  useEffect(() => {
    function validatePassword() {
      let error = null;

      if (passwordConfirmation.length === 0) {
        error = 'A confirmação de senha é obrigatória';
      } else if (passwordConfirmation !== password) {
        error = 'As senhas não condizem';
      } else {
        error = null;
      }

      if (touched) {
        setPasswordConfirmationError(error);
      }
    }

    validatePassword();
  }, [password, passwordConfirmation, touched]);

  function handleSubmit() {
    Keyboard.dismiss();

    setTouched(true);

    if (!valid) {
      return;
    }

    const data = {
      name: name.trim(),
      nickname: nickname.trim(),
      email: email.trim(),
      password: password.trim(),
      passwordConfirmation: passwordConfirmation.trim(),
    };

    dispatch(signUpRequest(data));
  }

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      enabled={Platform.OS === 'ios'}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}>
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
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

CreateAccount.navigationOptions = {
  title: 'Cadastro',
};
