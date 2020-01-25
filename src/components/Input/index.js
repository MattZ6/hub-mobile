import React, { forwardRef } from 'react';

import PropTypes from 'prop-types';

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

Input.propTypes = {
  invalid: PropTypes.bool,
  disabled: PropTypes.bool,
  maxLength: PropTypes.number,
  length: PropTypes.number,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Input.defaultProps = {
  invalid: false,
  disabled: false,
  maxLength: null,
  length: null,
  style: null,
};
