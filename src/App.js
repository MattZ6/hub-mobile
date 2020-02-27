import React from 'react';
import { useSelector } from 'react-redux';

import createRouter from '~/routes';

export default function App() {
  const signed = useSelector(x => x.auth.signed);

  const hasProfile = useSelector(x => x.user.hasProfile);
  const firstSkillConfig = useSelector(x => x.user.firstSkillConfig);
  const firstPreferenceConfig = useSelector(x => x.user.firstPreferenceConfig);

  const Routes = createRouter(
    signed,
    hasProfile,
    firstSkillConfig,
    firstPreferenceConfig
  );

  return <Routes />;
}
