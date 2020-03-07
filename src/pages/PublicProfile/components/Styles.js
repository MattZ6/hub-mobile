import React from 'react';
import PropTypes from 'prop-types';

import { SectionTitle, StyleList, Style, StyleTitle } from '../styles';

export default function Styles({ styles }) {
  return (
    <>
      <SectionTitle>Gostos musicais</SectionTitle>
      <StyleList>
        {styles.map(style => (
          <Style key={String(style.id)}>
            <StyleTitle>{style.style.name}</StyleTitle>
          </Style>
        ))}
      </StyleList>
    </>
  );
}

Styles.propTypes = {
  styles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      style: PropTypes.shape({
        name: PropTypes.string,
      }),
    })
  ).isRequired,
};
