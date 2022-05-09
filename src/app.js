import React, { memo } from 'react';

import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';
import routes from './router';

import PglHeader from '@/components/Header';
import PglFooter from '@/components/Footer';

export default memo(function App() {
  return (
    <HashRouter>
      <PglHeader />
      {renderRoutes(routes)}
      <PglFooter />
    </HashRouter>
  )
})
