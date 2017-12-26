import React from 'react';
import { Route } from 'react-router-dom';
import CardContainer from '../CardContainer/CardContainer';

const Routes = () => {
  return (
    <div>
      <Route exact path="/" component={CardContainer} />
    </div>
  );
};

export default Routes;
