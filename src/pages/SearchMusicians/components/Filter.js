import React from 'react';
import PropTypes from 'prop-types';

import { FilterButton, FilterButtonText } from '../styles';

function Filter({ title, selected, ...rest }) {
  return (
    <FilterButton {...rest}>
      <FilterButtonText selected={selected}>{title}</FilterButtonText>
    </FilterButton>
  );
}

Filter.propTypes = {
  title: PropTypes.string.isRequired,
  selected: PropTypes.bool,
};

Filter.defaultProps = {
  selected: false,
};

export default React.memo(Filter);
