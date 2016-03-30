import React from 'react';
import Main from '../components/Main';
import Profile from '../components/Profile';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import Dash from '../components/Dash';
import UserDash from '../components/User/UserDash';
import UserProfile from '../components/User/UserProfile';
import { Route, IndexRoute } from 'react-router';

module.exports = (
    <Route path="/" component={Main}>
        <IndexRoute component={Dash}/>
        <Route path="test" component={UserDash}>
            <Route path="user/:userID" component={UserProfile}/>
        </Route>
        <Route path="login" component={Login} />
        <Route path="signup" component={SignUp} />
    </Route>
);