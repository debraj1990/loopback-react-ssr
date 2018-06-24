import React from 'react'
import App from './App';
import HomePage from './Pages/HomePage/homePage'
import UsersListPage from './Pages/UserListPage/userListPage'
import NotFoundPage from './Pages/NotFoundPage/notFoundPage'
import AdminsListPage from './Pages/AdminListPage/adminListPage';

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...AdminsListPage,
        path: '/admins'
      },
      {
        ...UsersListPage,
        path: '/users'
      },
      {
        ...NotFoundPage
      }
    ]
  }
];
