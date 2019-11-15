import React from 'react';

import {
  Container,
  Title,
  Form,
  Input,
  SubmitButton,
  SubmitButtonText,
  NewAccountButton,
  NewAccountButtonText,
} from './styles';

export default function Login({ navigation }) {
  function handleNavigate() {
    navigation.navigate('CreateAccount');
  }

  return (
    <Container>
      <Title>Pronto pro Rock?</Title>
      <Form>
        <Input placeholder="Seu e-mail" keyboardType="email-address" />
        <Input placeholder="Digite sua senha" secureTextEntry />

        <SubmitButton>
          <SubmitButtonText>Vamos lá!</SubmitButtonText>
        </SubmitButton>

        <NewAccountButton onPress={handleNavigate}>
          <NewAccountButtonText>
            Ainda não tenho uma conta :(
          </NewAccountButtonText>
        </NewAccountButton>
      </Form>
    </Container>
  );
}

Login.navigationOptions = {
  headerShown: false,
};
