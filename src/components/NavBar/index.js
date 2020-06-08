import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { ROUTES } from '../../const';
import { signOut } from '../../actions';
import { Card } from '../../components';
import './style.css';

const NavBar = () => {
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);
  const dispathch = useDispatch();

  const history = useHistory();
  const signOutOnButton = () => {
    dispathch(signOut());
    toSignIn();
  };
  const toSignIn = () => {
    history.push('/sign-in');
  };

  return (
    <nav className="navbar">
      <Link to={ROUTES.MAIN}>Main</Link>
      <Link to={ROUTES.USERS}>Users</Link>
      {token ? (
        <>
          <Link to={`${ROUTES.USERS}/${user?.index}`}>
            <Card name={user?.name} picture={user?.picture} small />
          </Link>
          <button className="button" onClick={() => signOutOnButton()}>
            Sign Out
          </button>
        </>
      ) : (
        <Link to={ROUTES.SIGNIN}>Sign in</Link>
      )}
    </nav>
  );
};

export { NavBar };
