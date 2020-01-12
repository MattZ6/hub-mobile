import React from 'react';
import { useSelector } from 'react-redux';

import createRouter from '~/routes';

export default function App() {
  const signed = useSelector(state => state.auth.signed);
  const hasProfile = useSelector(state => !!state.user.profile);

  const Routes = createRouter(true, true);
  // const Routes = createRouter(signed, hasProfile);

  return <Routes />;
}
