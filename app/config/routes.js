import React from 'react';
import Main from '../components/Main';
import Profile from '../components/Profile';
import Dash from '../components/Dash';
import { Route, IndexRoute } from 'react-router';

module.exports = (
    <Route path="/" component={Main}>
        <IndexRoute component={Dash}/>
        <Route path="user/:userID" component={Profile}/>
    </Route>
);