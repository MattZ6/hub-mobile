import React from 'react';
import PropTypes from 'prop-types';

import { CityButton, Pin, CityText, CityBoldText, Check } from '../styles';

function City({ city, ...rest }) {
  return (
    <CityButton {...rest}>
      <Pin check={city.check} />
      <CityText>
        <CityBoldText>{city.city} </CityBoldText>
        {city.state ? `${city.state} - ` : ' '}
        {city.country}
      </CityText>
      {city.check && <Check />}
    </CityButton>
  );
}

City.propTypes = {
  city: PropTypes.shape({
    check: PropTypes.bool,
    city: PropTypes.string,
    state: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};

export default React.memo(City);
