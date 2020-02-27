import React from 'react';
import PropTypes from 'prop-types';

import {
  RegionButton,
  ButtonContent,
  ButtonTitle,
  SelectionIcon,
} from '../styles';

function Region({ region, ...rest }) {
  return (
    <RegionButton {...rest}>
      <ButtonContent>
        <ButtonTitle>{region.name}</ButtonTitle>
      </ButtonContent>

      {region.selected && <SelectionIcon name="check" size={24} />}
    </RegionButton>
  );
}

Region.propTypes = {
  region: PropTypes.shape({
    name: PropTypes.string,
    selected: PropTypes.bool,
  }).isRequired,
};

export default React.memo(Region);
