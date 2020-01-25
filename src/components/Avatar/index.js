import React from 'react';
import PropTypes from 'prop-types';

import { Picture } from './styles';

export default function Avatar({ id, size, style }) {
  return (
    <Picture
      source={{ uri: `https:i.pravatar.cc/200?u=${id}` }}
      size={size}
      style={style}
    />
  );
}

Avatar.propTypes = {
  id: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Avatar.defaultProps = {
  style: null,
};
