import React from 'react';
import { Animated } from 'react-native';
import PropTypes from 'prop-types';

import Musician from './Musician';
import More from './More';

import {
  ListHeader,
  ListHeaderTitle,
  ListHeaderDescription,
  List,
} from '../styles';

export default function MusicianList({
  title,
  description,
  musicians,
  showMusicianNick,
  size,
  ...rest
}) {
  return (
    <>
      <ListHeader>
        {title && <ListHeaderTitle>{title}</ListHeaderTitle>}
        {description && (
          <ListHeaderDescription>{description}</ListHeaderDescription>
        )}
      </ListHeader>

      <List
        {...rest}
        data={musicians}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Musician
            musician={item}
            size={size}
            showDescription={showMusicianNick}
          />
        )}
        ListFooterComponent={<More size={size} />}
      />
    </>
  );
}

MusicianList.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  musicians: PropTypes.arrayOf(PropTypes.object).isRequired,
  size: PropTypes.number,
  showMusicianNick: PropTypes.bool,
};

MusicianList.defaultProps = {
  size: 80,
  title: null,
  description: null,
  showMusicianNick: true,
};
