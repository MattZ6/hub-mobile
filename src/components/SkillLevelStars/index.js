import React from 'react';
import PropTypes from 'prop-types';

import { Container, Star } from './styles';

function SkillLevelStars({ level, size }) {
  return (
    <Container>
      <Star gold={level >= 1} size={size} />
      <Star gold={level >= 2} size={size} />
      <Star gold={level >= 3} size={size} />
    </Container>
  );
}

SkillLevelStars.propTypes = {
  level: PropTypes.number.isRequired,
  size: PropTypes.number,
};

SkillLevelStars.defaultProps = {
  size: 16,
};

export default React.memo(SkillLevelStars);
