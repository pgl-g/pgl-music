import React from 'react';
import { Redirect } from 'react-router-dom';


const PglDiscover = React.lazy(_ => import('../pages/discover'));
const PglFirends = React.lazy(_ => import('../pages/firends')) ;
const PglMine  = React.lazy(_ => import('../pages/mine'));
const PglRecommend = React.lazy(_ => import("../pages/discover/c-pages/recommend"));
const PglRanking = React.lazy(_ => import("../pages/discover/c-pages/ranking"));
const PglSongs = React.lazy(_ => import("../pages/discover/c-pages/songs"));
const PglDjradio = React.lazy(_ => import("../pages/discover/c-pages/djradio"));
const PglArtist = React.lazy(_ => import("../pages/discover/c-pages/artist"));
const PglAlbum = React.lazy(_ => import("../pages/discover/c-pages/album"));
// const PglPlayer = React.lazy(_ => import("../pages/player"));

const routes = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to="/discover" />
  },
  {
    path: "/discover",
    component: PglDiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => (
          <Redirect to="/discover/recommend"/>
        )
      },
      {
        path: "/discover/recommend",
        component: PglRecommend
      },
      {
        path: "/discover/ranking",
        component: PglRanking
      },
      {
        path: "/discover/songs",
        component: PglSongs
      },
      {
        path: "/discover/djradio",
        exact: true,
        component: PglDjradio
      },
      {
        path: "/discover/artist",
        component: PglArtist
      },
      {
        path: "/discover/album",
        component: PglAlbum
      },
      // {
      //   path: "/discover/player",
      //   component: PglPlayer
      // }
    ]
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