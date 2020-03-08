import React from 'react';
import PropTypes from 'prop-types';

import { ButtonContainer, ButtonTitle } from '../styles';

function Button({ title, ...rest }) {
  return (
    <ButtonContainer {...rest}>
      <ButtonTitle>{title}</ButtonTitle>
    </ButtonContainer>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
};

export default React.memo(Button);
