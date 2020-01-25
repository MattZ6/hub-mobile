import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';

import { StyledIcon, Title, Tip } from './styles';

export default function Error({
  title,
  tip,
  icon,
  style,
  enabled,
  ...buttonProps
}) {
  return (
    <RectButton
      enabled={enabled}
      {...buttonProps}
      style={{
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
        ...style,
      }}>
      <StyledIcon name={icon} />

      <Title>{title}</Title>
      <Tip>{tip}</Tip>
    </RectButton>
  );
}

Error.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  tip: PropTypes.string.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  enabled: PropTypes.bool,
  buttonProps: PropTypes.shape(),
};

Error.defaultProps = {
  icon: 'signal-wifi-off',
  style: null,
  enabled: true,
  buttonProps: null,
};
