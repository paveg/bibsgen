import React from 'react';
import type { PathRouteProps } from 'react-router-dom';

const Home = React.lazy(() => import('@/lib/pages/home'));
const ChangeLog = React.lazy(() => import('@/lib/pages/changelog'));

export const routes: Array<PathRouteProps> = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/changelog',
    element: <ChangeLog />,
  },
];
