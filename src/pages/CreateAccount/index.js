import React from 'react';

import { Container, Input, SubmitButton, SubmitButtonText } from './styles';

export default function CreateAccount() {
  return (
    <Container>
      <Input
        placeholder="Como você se chama?"
        autoCapitalize="none"
        autoCorrect={false}
        contextMenuHidden
        returnKeyLabel="Proximo"
      />
      <Input
        placeholder="Seu melhor e-mail"
        autoCapitalize="none"
        contextMenuHidden
        autoCorrect={false}
        keyboardType="email-address"
      />
      <Input
        placeholder="Senha"
        autoCapitalize="none"
        contextMenuHidden
        autoCorrect={false}
        secureTextEntry
      />
      <Input
        placeholder="Confirmação da senha"
        autoCapitalize="none"
        contextMenuHidden
        autoCorrect={false}
        secureTextEntry
      />

      <SubmitButton>
        <SubmitButtonText>Let's Rock!</SubmitButtonText>
      </SubmitButton>
    </Container>
  );
}

CreateAccount.navigationOptions = {
  title: 'Cadastro',
};
