import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background: #181818;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  margin-bottom: 26px;
  background: #2a2a2a;
  height: 42px;
  padding: 0 16px;
  border-radius: 8px;
  color: #eee;
  font-weight: 500;
  font-size: 15px;
`;

export const SubmitButton = styled.TouchableOpacity`
  height: 60px;
  background: #ba3c43;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  border-radius: 8px;
`;

export const SubmitButtonText = styled.Text`
  font-size: 24px;
  color: #fff;
  text-align: center;
  font-weight: 700;
`;
