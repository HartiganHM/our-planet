import React from 'react';
import { Route } from 'react-router-dom';
import Search from '../../containers/Search/Search';
import CardContainer from '../../containers/CardContainer/CardContainer';

const Routes = () => {
  return (
    <div>
      <Route
        exact
        path="/"
        render={() => {
          return (
            <div>
              <Search />
              <CardContainer />
            </div>
          );
        }}
      />
    </div>
  );
};

export default Routes;
