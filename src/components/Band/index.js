import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Container, Thumb, Content, Title, Description } from './styles';

export default function Band({ band }) {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const names = band.skills.map(x => x.label);

    let description = null;

    names.forEach((x, i) => {
      if (!description) {
        description = x;
        return;
      }

      if (i < names.length - 1) {
        description += `, ${x}`;
      } else {
        description += ` e ${x}`;
      }
    });

    const bandInfo = { ...band, description };

    setInfo({ ...bandInfo });
  }, [band]);

  return (
    <>
      {info && (
        <Container>
          <Thumb />
          <Content>
            {info.title && <Title>{info.title}</Title>}
            {info.description && <Description>{info.description}</Description>}
          </Content>
        </Container>
      )}
    </>
  );
}

Band.propTypes = {
  band: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    skills: PropTypes.array,
  }).isRequired,
};
