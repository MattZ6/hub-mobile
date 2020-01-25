import React from 'react';

import Shimmer from '~/components/Shimmer';

import { InfoContainer, Header } from '../styles';

export default function Loading() {
  return (
    <InfoContainer>
      <Header>
        <Shimmer
          visible={false}
          width={120}
          height={120}
          style={{ borderRadius: 60, marginVertical: 16 }}
        />
      </Header>

      {/* <Shimmer
        visible={false}
        width={120}
        height={16}
        style={{ marginTop: 16 }}
      /> */}

      <Shimmer
        visible={false}
        width={300}
        height={26}
        style={{ marginTop: 8 }}
      />

      <Shimmer
        visible={false}
        width={200}
        height={18}
        style={{ marginTop: 6 }}
      />

      <Shimmer
        visible={false}
        width={120}
        height={16}
        style={{ marginVertical: 16 }}
      />
      <Shimmer
        visible={false}
        width={320}
        height={16}
        style={{ marginTop: 2 }}
      />
      <Shimmer
        visible={false}
        width={320}
        height={16}
        style={{ marginTop: 2 }}
      />
      <Shimmer
        visible={false}
        width={280}
        height={16}
        style={{ marginTop: 2 }}
      />
    </InfoContainer>
  );
}
