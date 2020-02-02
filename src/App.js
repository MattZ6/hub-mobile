import React from 'react';
import { useSelector } from 'react-redux';

import createRouter from '~/routes';

export default function App() {
  const signed = useSelector(x => x.auth.signed);
  const hasProfile = useSelector(x => x.user.hasProfile);
  const skillsConfigured = useSelector(x => x.user.instrumentsConfigured);
  const stylesConfigured = useSelector(x => x.user.stylesConfigured);

  const Routes = createRouter(
    signed,
    hasProfile,
    skillsConfigured,
    stylesConfigured
  );

  return <Routes />;
}
