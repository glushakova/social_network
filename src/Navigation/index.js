import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { User, Users, MainPage } from '../pages';
import { ROUTES } from '../const';

const Navigation = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path={ROUTES.USER} component={User} />
        <Route path={ROUTES.USERS} component={Users} />
        <Route path={ROUTES.MAIN} component={MainPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Navigation;
