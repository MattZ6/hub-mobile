import { Platform } from 'react-native';
import styled from 'styled-components/native';

import { fonts } from '~/styles';

export const Title = styled.Text`
  color: #fff;
  margin-top: 10px;
  font-family: ${fonts.semiBold};
  font-size: 48px;
  padding: 0 20px;
  text-shadow: 2px 2px 3px black;
`;

// export const Form = styled.ScrollView.attrs({
//   enabled: Platform.OS === 'ios',
//   behavior: 'padding',
// })`
//   align-self: stretch;
//   margin-top: 40px;
//   padding: 0 20px;
// `;

export const Form = styled.ScrollView.attrs({
  keyboardShouldPersistTaps: 'handled',
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  padding: 20px 20px 0;
`;

// -----------------------

// import styled from 'styled-components/native';
// import { StyleSheet } from 'react-native';

// export const Container = styled.View`
//   flex: 1;
//   justify-content: center;
//   background: #100f12;
//   padding-top: 24px;
// `;

// export const Title = styled.Text`
//   font-size: 18px;
//   color: #fff;
//   font-weight: bold;
//   letter-spacing: 2.8px;
//   text-transform: uppercase;
//   text-align: center;
// `;

// export const Description = styled.Text`
//   text-align: center;
//   color: #999;
//   font-size: 15px;
//   margin: 5px 0 30px;
//   max-width: 260px;
//   align-self: center;
// `;

// export const FormContainer = styled.ScrollView.attrs({
//   // contentContainerStyle: { justifyContent: 'center' },
// })`
//   flex: 1;
//   padding: 0 30px;
//   margin-top: 30px;
// `;

// export const InputTitle = styled.Text`
//   color: #999;
//   font-weight: bold;
// `;

// export const InputContainer = styled.View`
//   flex-direction: row;
//   border-bottom-width: ${StyleSheet.hairlineWidth};
//   border-color: rgba(255, 255, 255, 0.2);
//   justify-content: space-between;
//   margin-bottom: 30px;
// `;

// export const Input = styled.TextInput.attrs({
//   placeholderTextColor: '#999',
// })`
//   height: 48px;
//   font-size: 17px;
//   color: #fff;
//   flex: 1;
// `;

// export const SubmitButton = styled.TouchableOpacity`
//   height: 50px;
//   background-color: #7159c1;
//   justify-content: center;
//   align-items: center;
// `;

// export const SubmitButtonText = styled.Text`
//   color: #e6e6e6;
//   font-size: 14px;
//   font-weight: bold;
//   letter-spacing: 2.8px;
// `;

// export const ForgotPasswordButton = styled.TouchableOpacity`
//   margin: 30px 0 50px;
//   align-items: center;
// `;

// export const ForgotPasswordButtonText = styled.Text`
//   color: #999;
//   font-size: 16px;
// `;
