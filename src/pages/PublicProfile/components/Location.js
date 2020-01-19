import React from 'react';
import PropTypes from 'prop-types';

import { LocationContainer, LocationText, LocationIcon } from '../styles';

export default function Location({ location }) {
  return (
    <LocationContainer>
      <LocationIcon />
      <LocationText>{location}</LocationText>
    </LocationContainer>
  );
}

Location.propTypes = {
  location: PropTypes.string.isRequired,
};
