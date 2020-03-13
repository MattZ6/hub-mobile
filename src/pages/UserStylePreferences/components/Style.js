import React from 'react';
import PropTypes from 'prop-types';

import {
  Item,
  ItemTitle,
  DeleteHint,
  RightButton,
  ButtonIcon,
  Loader,
} from '../styles';

function Style({ style, ...rest }) {
  const showHint = style.showButton && style.selected && !style.deleting;
  const showButton = !style.deleting && style.showButton;

  return (
    <Item>
      <ItemTitle>{style.style.name}</ItemTitle>

      {showHint && <DeleteHint>Toque para confirmar</DeleteHint>}

      {showButton && (
        <RightButton {...rest}>
          <ButtonIcon
            name={style.selected ? 'error-outline' : 'clear'}
            selected={style.selected}
          />
        </RightButton>
      )}

      {style.deleting && <Loader />}
    </Item>
  );
}

Style.propTypes = {
  style: PropTypes.shape({
    id: PropTypes.number,
    selected: PropTypes.bool,
    showButton: PropTypes.bool,
    deleting: PropTypes.bool,
    style: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  }).isRequired,
};

export default React.memo(Style);
