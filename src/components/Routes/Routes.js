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
import Footer from '../Footer/Footer';

const Routes = () => {
  return (
    <div>
      <Route exact path="/our-planet/" component={LandingPage} />
      <Route path="/our-planet/" component={Sticky} />
      <Route
        exact
        path="/our-planet/"
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
      <Route exact path="/our-planet/about" component={AboutPage} />
      <Route path="/our-planet/animals/:animal" component={AnimalPage} />
      <Route path="/our-planet/continents/:continent" component={ContinentPage} />
      <Route path="/our-planet/" component={Footer} />
    </div>
  );
};

export default Routes;
