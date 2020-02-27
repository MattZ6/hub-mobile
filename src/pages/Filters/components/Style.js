import React from 'react';
import PropTypes from 'prop-types';

import { RoundButton, RoundButtonText, SelectionIcon } from '../styles';

function Style({ style, ...rest }) {
  return (
    <RoundButton {...rest}>
      {style.selected && (
        <SelectionIcon name="check" size={16} style={{ marginHorizontal: 8 }} />
      )}

      <RoundButtonText selected={style.selected}>{style.name}</RoundButtonText>
    </RoundButton>
  );
}

Style.propTypes = {
  style: PropTypes.shape({
    name: PropTypes.string,
    selected: PropTypes.bool,
  }).isRequired,
};

export default React.memo(Style);
