import React from 'react';
import PropTypes from 'prop-types';

import Loading from '~/components/Loading';

import { Container, LoadingContainer, Initials, Picture } from './styles';

function Avatar({ name, url, size, loading, style }) {
  const initials = name ? name.trim().substr(0, 1) : null;

  return (
    <Container size={size} loading={loading} style={{ ...style }}>
      {loading && (
        <LoadingContainer>
          <Loading size={84} />
        </LoadingContainer>
      )}

      {initials && !url && (
        <Initials size={size} loading={loading}>
          {initials}
        </Initials>
      )}

      {!loading && url && <Picture source={{ uri: url }} size={size} />}
    </Container>
  );
}

Avatar.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  size: PropTypes.number,
  loading: PropTypes.bool,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Avatar.defaultProps = {
  name: null,
  url: null,
  size: 64,
  style: null,
  loading: false,
};

export default React.memo(Avatar);
