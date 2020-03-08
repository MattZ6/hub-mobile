import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import api from '~/services/api';

import { useBackButton } from '~/hooks/useBackButton';

import Header from '~/components/Header';
import Loading from '~/components/Loading';
import ErrorContainer from '~/components/ErrorContainer';

import Info from './components/Info';
import Skills from './components/Skills';
import Styles from './components/Styles';

import { Container, Content } from './styles';

function handleBackButton(handle) {
  return handle;
}

export default function PublicProfile({ navigation }) {
  const [id] = useState(navigation.getParam('id'));

  const [user, setUser] = useState(null);
  const [skills, setSkills] = useState([]);
  const [styles, setStyles] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(false);

  useBackButton(() => handleBackButton(loading));

  async function loadMusician() {
    setLoading(true);

    setError(false);

    try {
      const [userRes, skillsRes, stylesRes] = await Promise.all([
        api.get(`/v1/musicians/${id}`),
        api.get(`/v1/musicians/${id}/skills`),
        api.get(`/v1/musicians/${id}/styles`),
      ]);

      setUser(userRes.data);
      setSkills(skillsRes.data);
      setStyles(stylesRes.data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadMusician();
  }, [id]);

  return (
    <>
      <Header showBackButton disableBack={loading} title="Músico" />

      <Container>
        {loading && !error && <Loading style={{ marginTop: 24 }} />}

        {!loading && error && <ErrorContainer onPress={loadMusician} />}

        {!loading && !error && (
          <Content>
            {user && <Info user={user} />}

            {styles.length > 0 && <Styles styles={styles} />}

            {skills.length > 0 && <Skills skills={skills} />}
          </Content>
        )}
      </Container>
    </>
  );
}

PublicProfile.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};
