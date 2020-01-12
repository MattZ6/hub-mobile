import React from 'react';
import PropTypes from 'prop-types';

import { Container, Content, Label, Title, StyledIcon } from './styles';

export default function InfoItem({ label, value, icon, ...rest }) {
  return (
    <Container {...rest}>
      <Content>
        <Label>{label}</Label>
        <Title>{value}</Title>
      </Content>
      <StyledIcon name={icon} />
    </Container>
  );
}

InfoItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
