import React from 'react';
import PropTypes from 'prop-types';

import { Title } from './styles';

export default function SectionTitle({ children, style }) {
  return <Title style={style}>{children}</Title>;
}

SectionTitle.propTypes = {
  children: PropTypes.string.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

SectionTitle.defaultProps = {
  style: null,
};
