import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import api from '~/services/api';

import Musician from '~/components/Musician';

import { Container, List, ListHeader } from '~/pages/SearchMusicians/styles';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function normalizeData(data) {
  const users = data.map(user => {
    let description = null;

    user.skills.forEach((x, i) => {
      if (!description) {
        description = capitalizeFirstLetter(x.label);
        return;
      }

      if (i < user.skills.length - 1) {
        description += `, ${x.label}`;
      } else {
        description += ` e ${x.label}`;
      }
    });

    return {
      ...user,
      description,
    };
  });

  return users;
}

export default function SearchMusicians() {
  const [musicians, setMusicians] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getUsers() {
      setError(false);

      try {
        setTimeout(async () => {
          const { data } = await api.get('/v1/musicians');

          const users = normalizeData(data);

          setMusicians(users);
        }, 300);
      } catch (err) {
        setError(true);

        console.tron.error(err);
      }
    }

    getUsers();
  }, []);

  return (
    <Container>
      {/* <TouchableOpacity onPress={() => {}}>
        <Text style={{ padding: 20, color: '#fff', fontSize: 40 }}>Perfil</Text>
      </TouchableOpacity> */}
      {error ? (
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 30, color: '#fff' }}>Deu ruim</Text>
        </View>
      ) : (
        <List
          ListHeaderComponent={<ListHeader>Buscar</ListHeader>}
          data={musicians}
          keyExtractor={x => String(x.id)}
          renderItem={({ item }) => <Musician musician={item} />}
          showsVerticalScrollIndicator={false}
        />
      )}
    </Container>
  );
}

// SearchMusicians.navigationOptions = {
//   headerShown: false,
// };
