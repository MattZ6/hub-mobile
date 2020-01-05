import React, { forwardRef } from 'react';

import {
  Wrapper,
  Container,
  TInput,
  Counter,
  ErrorMessage,
} from '~/components/Input/styles';

function Input({ style, invalid, disabled, maxLength, length, ...rest }, ref) {
  return (
    <Wrapper style={style} disabled={disabled}>
      <Container invalid={invalid}>
        <TInput
          {...rest}
          ref={ref}
          editable={!disabled}
          maxLength={maxLength}
        />

        {length && <Counter>{length}</Counter>}
      </Container>

      {invalid && !disabled && (
        <ErrorMessage numberOfLines={1}>{rest.errorMessage}</ErrorMessage>
      )}
    </Wrapper>
  );
}

export default forwardRef(Input);
