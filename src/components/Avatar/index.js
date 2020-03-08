import React from 'react';
import PropTypes from 'prop-types';

import { Container, Initials, Picture } from './styles';

function Avatar({ name, url, size, style }) {
  const initials = name ? name.trim().substr(0, 1) : null;

  return (
    <Container size={size} style={{ ...style }}>
      {initials && <Initials size={size}>{initials}</Initials>}

      {url && <Picture source={{ uri: url }} size={size} />}
    </Container>
  );
}

Avatar.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Avatar.defaultProps = {
  name: null,
  url: null,
  size: 64,
  style: null,
};

export default React.memo(Avatar);
