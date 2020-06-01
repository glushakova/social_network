import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { NavBar } from '../components';
import { User, Users, MainPage, SignInPageConnect } from '../pages';
import { signInWithToken } from '../actions';
import { ROUTES } from '../const';

const Navigation = () => {
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(signInWithToken(token));
    }
  }, [token, dispatch]);

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path={ROUTES.SIGNIN} component={SignInPageConnect} />
        <Route path={ROUTES.USER} component={User} />
        <Route path={ROUTES.USERS} component={Users} />
        <Route path={ROUTES.MAIN} component={MainPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Navigation;
