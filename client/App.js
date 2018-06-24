import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './Components/Header/Header'

const App = ({ route }) => {
  return (
    <div>
      <Header />
    </div>
  );
};

export default {
  component: App,
};
