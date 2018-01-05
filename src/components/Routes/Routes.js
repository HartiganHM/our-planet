import React from 'react';
import { Route } from 'react-router-dom';
import InteractiveMap from '../../containers/InteractiveMap/InteractiveMap';
import Search from '../../containers/Search/Search';
import CardContainer from '../../containers/CardContainer/CardContainer';
import AboutPage from '../AboutPage/AboutPage';
import AnimalPage from '../../containers/AnimalPage/AnimalPage';
import ContinentPage from '../../containers/ContinentPage/ContinentPage';

const Routes = () => {
  return (
    <div>
      <Route
        exact
        path="/"
        render={() => {
          return (
            <div>
              <InteractiveMap />
              <Search />
              <CardContainer />
            </div>
          );
        }}
      />
      <Route path='/about' component={AboutPage} />
      <Route path='/animals/:animal' component={AnimalPage} />
      <Route path='/continents/:continent' component={ContinentPage} />
    </div>
  );
};

export default Routes;
