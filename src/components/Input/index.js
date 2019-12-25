import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { Container, Title, TInput, ErrorMessage } from './styles';

function Input({ style, ...rest }, ref) {
  return (
    <Container style={style} disabled={rest.disabled}>
      {/* <Title>{rest.title}</Title> */}

      <TInput {...rest} ref={ref} editable={!rest.disabled} />

      {rest.invalid && !rest.disabled && (
        <ErrorMessage>{rest.errorMessage}</ErrorMessage>
      )}
    </Container>
  );
}

Input.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Input.defaultProps = {
  style: {},
};

export default forwardRef(Input);
