import * as React from 'react';
const { IndexRoute, Route } = require('react-router');

import App from '../containers/app';
import AboutPage from '../containers/about-page';
import SearchPage from '../containers/search-page';
import TrendingPage from '../containers/trending-page';

export default (
  <Route path="/" component={ App }>
    <IndexRoute component={ SearchPage }/>
    <Route path="trending" component={ TrendingPage }/>
    <Route path="about" component={ AboutPage }/>
  </Route>
);
