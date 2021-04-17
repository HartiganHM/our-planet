import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import {
  AboutPage,
  InteractiveMap,
  Intro,
  LandingPage,
  Sticky,
} from '../index';

import Search from '../../containers/Search/Search';
import CardContainer from '../../containers/CardContainer/CardContainer';
import AnimalPage from '../../containers/AnimalPage/AnimalPage';
import ContinentPage from '../../containers/ContinentPage/ContinentPage';

import Footer from '../Footer/Footer';

const Routes = () => (
  <Router basename="/our-planet">
    <Route exact path="/" component={LandingPage} />
    <Route path="/" component={Sticky} />
    <Route
      exact
      path="/"
      render={() => (
        <div className="buffer">
          <Intro />
          <InteractiveMap />
          <Search />
          <CardContainer />
        </div>
      )}
    />
    <Route exact path="/about" component={AboutPage} />
    <Route path="/animals/:animal" component={AnimalPage} />
    <Route path="/continents/:continent" component={ContinentPage} />
    <Route path="/" component={Footer} />
  </Router>
);

export default Routes;
