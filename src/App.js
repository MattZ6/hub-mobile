import React from 'react';
import { useSelector } from 'react-redux';

import createRouter from '~/routes';

export default function App() {
  const signed = useSelector(state => state.auth.signed);
  const hasProfile = useSelector(state => state.user.hasProfile);
  const configured = useSelector(state => state.user.instrumentsConfigured);

  const Routes = createRouter(signed, hasProfile, configured);

  return <Routes />;
}
