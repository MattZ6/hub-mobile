import React, { useState, useEffect, useRef } from 'react';
import { FlatList, BackHandler } from 'react-native';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import api from '~/services/api';
import googleApi, { GOOGLE_API_KEY } from '~/services/googleApi';

import { useBackButton } from '~/hooks/useBackButton';

import { showSuccessSnack } from '~/services/toast';

import { createRegionSuccess } from '~/store/modules/region/actions';
import { updateProfileSuccess } from '~/store/modules/user/actions';

import { throwRequestErrorMessage } from '~/utils/error';

import Loading from '~/components/Loading';
import ErrorContainer from '~/components/ErrorContainer';
import InformationContainer from '~/components/InformationContainer';
import FooterButton from '~/components/FooterButton';

import City from './components/City';

import {
  Container,
  Header,
  Search,
  HeaderButton,
  HeaderIcon,
  Content,
} from './styles';

function handleBack(loading) {
  return loading;
}

export default function SelectLocation({ navigation }) {
  const dispatch = useDispatch();
  // const submiting = useSelector(state => state.region.submiting);

  const [cities, setCities] = useState([
    {
      city: 'Curitiba',
      state: 'PR',
      country: 'Brasil',
    },
    {
      city: 'Guarapuava',
      state: 'PR',
      country: 'Brasil',
    },
    {
      city: 'Maringá',
      state: 'PR',
      country: 'Brasil',
    },
  ]);
  // const [cities, setCities] = useState(null);

  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [submiting, setSubmiting] = useState(false);

  const [fromProfile] = useState(navigation.getParam('fromProfile', null));

  const [show, setShow] = useState(false);

  const ref = useRef();

  useBackButton(() => handleBack(submiting || loading));

  function handleNavigateBack() {
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

  async function _submitConfimation(name) {
    setSubmiting(true);

    const data = { name };

    try {
      const response = await api.post('/v1/regions', data);

      if (fromProfile) {
        const regionId = response.data.id;

        const res = await api.put('/v1/users', { regionId });

        dispatch(updateProfileSuccess(res.data));

        showSuccessSnack('Cidade alterada com sucesso');
      } else {
        dispatch(createRegionSuccess(response.data));
      }

      navigation.goBack();
    } catch (err) {
      throwRequestErrorMessage(err);
    } finally {
      setSubmiting(false);
    }
  }

  function handleConfirm() {
    const city = cities.find(x => x.check);

    const state = city.state ? `${city.state} - ` : ' ';
    const location = `${city.city}, ${state}${city.country}`;

    _submitConfimation(location);
    // console.tron.log(location);

    // setSubmiting(true);

    // dispatch(createRegionRequest(location));
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
    const subscription = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        return false;
      }
    );

    return () => {
      subscription.remove();
    };
  }, []);

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <Container>
      <Header>
        <HeaderButton onPress={handleNavigateBack} disabled={submiting}>
          <HeaderIcon name="arrow-back" disabled={submiting} />
        </HeaderButton>

        <Search
          placeholder="Qual o nome da cidade?"
          onChangeText={handleSetSearch}
          value={search}
          ref={ref}
          onSubmitEditing={handleSearch}
          editable={!submiting}
        />

        {search.length > 0 && (
          <HeaderButton onPress={() => handleSetSearch()} disabled={submiting}>
            <HeaderIcon name="clear" disabled={submiting} />
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
                justifyContent: cities.length > 0 ? 'flex-start' : 'center',
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
                <City
                  city={item}
                  onPress={() => handleCheck(index)}
                  disabled={submiting}
                />
              )}
            />
          </>
        )}
      </Content>

      {show && (
        <FooterButton
          onPress={handleConfirm}
          text="Confirmar"
          buttonProps={{ loading: submiting }}
        />
      )}
    </Container>
  );
}

SelectLocation.propTypes = {
  navigation: PropTypes.shape().isRequired,
};
