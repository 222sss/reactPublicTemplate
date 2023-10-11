import React from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import Home from '@/views/Home/index';
export const routes = [
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: '/home',
    element: <Home />,
    meta: {
      title: '登录',
      noLogin: true,
      hideMenu: true
    }
  }
];
const Routes = () => useRoutes(routes);
export default Routes;
