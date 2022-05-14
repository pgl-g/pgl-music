import React from 'react';
import PglMine from '../pages/mine';
import PglDiscover from '../pages/discover';
import PglFirends from '../pages/firends';
import { Redirect } from 'react-router-dom';

const routes = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to="/mine" />
  },
  {
    path: "/discover",
    component: PglDiscover,
  },
  {
    path: "/mine",
    exact: true,
    component: PglMine
  },
  {
    path: "/friend",
    exact: true,
    component: PglFirends
  },
]

export default routes;