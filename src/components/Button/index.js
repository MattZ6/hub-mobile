import React from 'react';
import PropTypes from 'prop-types';

import { Container, Title, Loader } from '~/components/Button/styles';

export default function Button({ children, enabled, loading, round, ...rest }) {
  return (
    <Container
      {...rest}
      enabled={!loading && enabled}
      darken={!enabled}
      round={round}>
      {loading ? <Loader size="large" /> : <Title>{children}</Title>}
    </Container>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  enabled: PropTypes.bool,
  loading: PropTypes.bool,
  round: PropTypes.bool,
};

Button.defaultProps = {
  enabled: true,
  loading: false,
  round: true,
};
