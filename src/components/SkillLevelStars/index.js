import React from 'react';
import PropTypes from 'prop-types';

import { Container, Star } from './styles';

function SkillLevelStars({ level }) {
  return (
    <Container>
      <Star gold={level >= 1} />
      <Star gold={level >= 2} />
      <Star gold={level >= 3} />
    </Container>
  );
}

SkillLevelStars.propTypes = {
  level: PropTypes.number.isRequired,
};

export default React.memo(SkillLevelStars);
