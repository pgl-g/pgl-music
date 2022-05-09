import PglMine from '../pages/mine';
import PglDiscover from '../pages/discover';
import PglFirends from '../pages/firends';

const routes = [
  {
    path: "/",
    exact: true,
    component: PglDiscover
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