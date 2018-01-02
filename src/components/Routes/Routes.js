import React from 'react';
import { Route } from 'react-router-dom';
import Search from '../../containers/Search/Search';
import CardContainer from '../../containers/CardContainer/CardContainer';
import AnimalPage from '../../containers/AnimalPage/AnimalPage';
import ContinentPage from '../../containers/ContinentPage/ContinentPage'

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
      <Route path='/:animal' component={AnimalPage}/>
      <Route path='/:continent' component={ContinentPage}/>
    </div>
  );
};

export default Routes;
