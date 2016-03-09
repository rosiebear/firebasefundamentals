import React from 'react';
import Main from '../components/Main';
import Profile from '../components/Profile';
import { Route, IndexRoute } from 'react-router';

module.exports = (
  <Route path="/" component={Main}>
    <IndexRoute component={Profile} />
  </Route>
);