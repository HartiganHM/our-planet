import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import Sticky from '../Sticky/Sticky';
import Intro from '../Intro/Intro';
import InteractiveMap from '../InteractiveMap/InteractiveMap';
import Search from '../../containers/Search/Search';
import CardContainer from '../../containers/CardContainer/CardContainer';
import AboutPage from '../AboutPage/AboutPage';
import AnimalPage from '../../containers/AnimalPage/AnimalPage';
import ContinentPage from '../../containers/ContinentPage/ContinentPage';

const Routes = () => {
  return (
    <div>
      <Route exact path="/" component={LandingPage} />
      <Route path="/" component={Sticky} />
      <Route
        exact
        path="/"
        render={() => {
          return (
            <div className="buffer">
              <Intro />
              <InteractiveMap />
              <Search />
              <CardContainer />
            </div>
          );
        }}
      />
      <Route exact path="/about" component={AboutPage} />
      <Route path="/animals/:animal" component={AnimalPage} />
      <Route path="/continents/:continent" component={ContinentPage} />
    </div>
  );
};

export default Routes;
