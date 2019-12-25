import React, { useState, useRef } from 'react';
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  ToastAndroid,
} from 'react-native';

import { Container, Form, Image } from './styles';

import Input from '~/components/Input';
import Button from '~/components/Button';

export default function CreateAccount() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [nameError, setNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState(null);

  const [loading, setLoading] = useState(false);

  function validateForm() {
    if (name.trim().length < 6)
      setNameError('O nome precisa conter no mínimo 6 caracteres');
    else setNameError(null);

    if (password.trim().length < 6) {
      setPasswordError('A senha precisa conter no mínimo 6 caracteres');
    } else {
      setPasswordError(null);
    }

    if (confirmPassword.trim().length < 6)
      setConfirmPasswordError(
        'A confirmação precisa conter no mínimo 6 caracteres'
      );
    else if (password.trim() !== confirmPassword.trim())
      setConfirmPasswordError('As senhas não condizem');
    else setConfirmPasswordError(null);

    // if (nameError || emailError || passwordError || confirmPasswordError) {
    //   return false;
    // }
    // return true;
  }

  function handleSubmit() {
    Keyboard.dismiss();

    validateForm();

    if (nameError || emailError || passwordError || confirmPasswordError) {
      ToastAndroid.show('Inválido', ToastAndroid.SHORT);
    } else {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      enabled={Platform.OS === 'ios'}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}>
        <Container>
          <Form>
            <Image source={{ uri: `https://i.pravatar.cc/150` }} />

            <Input
              title="Nome"
              placeholder="Seu nome completo"
              returnKeyType="next"
              value={name}
              onChangeText={x => setName(x)}
              onSubmitEditing={() => emailRef.current.focus()}
              invalid={!!nameError}
              errorMessage={nameError}
              disabled={loading}
            />

            <Input
              title="E-mail"
              placeholder="Seu melhor e-mail"
              keyboardType="email-address"
              returnKeyType="next"
              value={email}
              onChangeText={x => setEmail(x)}
              ref={emailRef}
              onSubmitEditing={() => passwordRef.current.focus()}
              invalid={!!emailError}
              errorMessage={emailError}
              disabled={loading}
            />

            <Input
              title="Senha"
              placeholder="Sua senha"
              secureTextEntry
              returnKeyType="next"
              value={password}
              onChangeText={x => setPassword(x)}
              ref={passwordRef}
              onSubmitEditing={() => confirmPasswordRef.current.focus()}
              invalid={!!passwordError}
              errorMessage={passwordError}
              disabled={loading}
            />

            <Input
              title="Confirmação de senha"
              placeholder="Confirme sua senha"
              secureTextEntry
              returnKeyType="send"
              value={confirmPassword}
              onChangeText={x => setConfirmPassword(x)}
              ref={confirmPasswordRef}
              onSubmitEditing={handleSubmit}
              invalid={!!confirmPasswordError}
              errorMessage={confirmPasswordError}
              disabled={loading}
            />

            <Button style={{ marginTop: 10 }} onPress={() => handleSubmit()}>
              Let&rsquo;s Rock
            </Button>
          </Form>
        </Container>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

CreateAccount.navigationOptions = {
  title: 'Cadastro',
};
