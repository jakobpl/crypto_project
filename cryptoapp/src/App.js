import React, { Fragment, useState } from 'react';
import Home from './pages/Home/Home';
import Explore from './pages/Explore/Explore';
import Activity from './pages/Activity/Activity';
import { Route } from 'react-router-dom';
// import ScrollToTop from './helper-functions/ScrollToTop';
const App = () => {
  return (
    <Fragment>
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/explore' exact>
        <Explore />
      </Route>
      <Route path='/activity' exact>
        <Activity />
      </Route>
    </Fragment>
  );
};

export default App;
