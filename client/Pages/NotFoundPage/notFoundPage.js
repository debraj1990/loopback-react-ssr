import React from 'react';

export const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return <h1>Ooops, route not found.</h1>;
};

export default {
  component: NotFoundPage
};
