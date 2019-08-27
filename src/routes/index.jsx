import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePageView from '../views/HomePageView';
import PasswordResetView from '../views/PasswordResetView';
import UserFeedView from '../views/UserFeedView';
import notFound from '../views/notFound';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePageView} />
    <Route exact path="/login" component={UserFeedView} />
    <Route exact path="/password-reset" component={PasswordResetView} />
    <Route component={notFound} />
  </Switch>
);

export default Routes;
