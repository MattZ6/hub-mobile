import React, { useState, useEffect, useRef } from 'react';
import { FlatList } from 'react-native';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import googleApi, { GOOGLE_API_KEY } from '~/services/googleApi';
import { selectLocation } from '~/store/modules/user/actions';

import Loading from '~/components/Loading';
import ErrorContainer from '~/components/ErrorContainer';
import InformationContainer from '~/components/InformationContainer';
import FooterButton from '~/components/FooterButton';

import {
  Container,
  Header,
  Search,
  HeaderButton,
  HeaderIcon,
  Content,
  City,
  Pin,
  CityBoldText,
  CityText,
  Check,
} from './styles';

export default function SelectLocation({ navigation }) {
  const dispatch = useDispatch();

  const [cities, setCities] = useState(null);

  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [show, setShow] = useState(false);

  const ref = useRef();

  function handleBack() {
    navigation.pop();
  }

  function handleSetSearch(text = '') {
    setSearch(text);
    setError(false);
    setLoading(false);
    setCities(null);
    setShow(false);
  }

  function handleCheck(index) {
    const cityList = cities.map((x, i) => ({ ...x, check: i === index }));

    setCities(cityList);
    setShow(true);
  }

  function confirmSelection() {
    const city = cities.find(x => x.check);

    const state = city.state ? `${city.state} - ` : ' ';
    const location = `${city.city}, ${state}${city.country}`;

    dispatch(selectLocation(location));

    navigation.goBack();
  }

  async function handleSearch() {
    if (search.trim().length === 0) {
      return;
    }

    setError(false);
    setLoading(true);

    const params = {
      key: GOOGLE_API_KEY,
      language: 'pt',
      types: '(cities)',
      input: search.trim(),
    };

    try {
      const { data } = await googleApi.get('place/autocomplete/json', {
        params,
      });

      const words = params.input.toLowerCase().split(' ');

      const list = data.predictions
        .map(prediction => {
          const [country, state, city] = prediction.terms.reverse();

          const item = {
            city: `${city?.value || state.value}`,
            state: !city ? null : state.value,
            country: country.value,
          };

          if (words.some(x => item.city.toLowerCase().includes(x))) {
            return item;
          }

          return null;
        })
        .filter(x => !!x);

      setCities(list);
      setLoading(false);
    } catch (err) {
      setError(true);
      setCities(null);
    }
  }

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <Container>
      <Header>
        <HeaderButton onPress={handleBack}>
          <HeaderIcon name="arrow-back" />
        </HeaderButton>

        <Search
          placeholder="Qual o nome da cidade?"
          onChangeText={handleSetSearch}
          value={search}
          ref={ref}
          onSubmitEditing={handleSearch}
        />

        {search.length > 0 && (
          <HeaderButton onPress={() => handleSetSearch()}>
            <HeaderIcon name="clear" />
          </HeaderButton>
        )}
      </Header>

      <Content>
        {error && <ErrorContainer onPress={handleSearch} />}

        {!error && loading && <Loading size={56} />}

        {!error && !loading && cities === null && (
          <InformationContainer
            icon="search"
            title="Busque pelo nome de sua cidade"
            description='Ex: "Guarapuava" ou "Florianópolis"'
          />
        )}

        {!error && !loading && Array.isArray(cities) && (
          <>
            <FlatList
              contentContainerStyle={{
                flex: 1,
                paddingBottom: cities.length > 0 ? 200 : 0,
              }}
              showsVerticalScrollIndicator={false}
              data={cities}
              keyExtractor={(_, index) => String(index)}
              ListEmptyComponent={
                <InformationContainer
                  icon="location-off"
                  title="Nenhuma cidade encontrada"
                  description="Por favor, tente novamente"
                />
              }
              renderItem={({ item, index }) => (
                <City onPress={() => handleCheck(index)}>
                  <Pin check={item.check} />
                  <CityText>
                    <CityBoldText>{item.city} </CityBoldText>
                    {item.state ? `${item.state} - ` : ' '}
                    {item.country}
                  </CityText>
                  {item.check && <Check />}
                </City>
              )}
            />
          </>
        )}
      </Content>

      {show && <FooterButton onPress={confirmSelection} text="Confirmar" />}
    </Container>
  );
}

SelectLocation.propTypes = {
  navigation: PropTypes.shape().isRequired,
};
