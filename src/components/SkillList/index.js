import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import api from '~/services/api';

import ErrorContainer from '~/components/ErrorContainer';
import Shimmer from '~/components/Shimmer';
import Skill from '~/components/Skill';
import SectionTitle from '~/components/SectionTitle';

import { ShimmerContainer } from './styles';

export default function SkillList({ title, titleStyle, userId, editable }) {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function loadSkills() {
    setLoading(true);

    if (error) {
      setError(false);
    }

    try {
      const url = userId ? `/v1/musicians/${userId}/skills` : '/v1/skills';

      const { data } = await api.get(url);

      setSkills(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadSkills();
  }, []);

  if (error) {
    return (
      <ErrorContainer
        title="Não foi possível suas habilidades"
        tip="Verifique sua conexão e tente novamente"
        style={{ marginVertical: 16 }}
        onPress={loadSkills}
      />
    );
  }

  if (loading) {
    return (
      <>
        <Shimmer style={titleStyle} />

        <ShimmerContainer>
          <Shimmer width={200} height={20} />
          <Shimmer width={100} height={18} />
        </ShimmerContainer>

        <ShimmerContainer>
          <Shimmer width={200} height={20} />
          <Shimmer width={100} height={18} />
        </ShimmerContainer>

        <ShimmerContainer>
          <Shimmer width={200} height={20} />
          <Shimmer width={100} height={18} />
        </ShimmerContainer>
      </>
    );
  }

  return (
    skills.length > 0 && (
      <>
        <SectionTitle style={titleStyle}>{title}</SectionTitle>
        {skills.map(skill => (
          <Skill key={String(skill.id)} skill={skill} editable={editable} />
        ))}
      </>
    )
  );
}

SkillList.propTypes = {
  title: PropTypes.string,
  userId: PropTypes.number,
  editable: PropTypes.bool,
  titleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

SkillList.defaultProps = {
  title: 'Habilidades',
  userId: null,
  editable: false,
  titleStyle: null,
};
