import React from 'react';
import PropTypes from 'prop-types';

import { Container, Content, Title, Description, StyledIcon } from './styles';

export default function ItemTitleButton({ title, description, icon, ...rest }) {
  return (
    <Container {...rest}>
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Content>
      {icon && <StyledIcon name={icon} />}
    </Container>
  );
}

ItemTitleButton.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

ItemTitleButton.defaultProps = {
  icon: null,
};
