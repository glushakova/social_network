import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { getUsers, sortUsers } from '../../actions';
import { Loader, Card } from '../../components';
import { ROUTES } from '../../const';
import './style.css';

const Users = () => {
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.err);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  if (!users && !loading) {
    return <div>{`Ошибка: ${error}`}</div>;
  }

  if (loading && !users) {
    return <Loader />;
  }

  return (
    <>
      <div className="page">
        <div className="page-users">
          <button onClick={() => dispatch(sortUsers())}>Sort by name</button>
          {users?.map((element) => {
            return (
              <Link key={element._id} to={`${ROUTES.USERS}/${element.index}`}>
                <Card name={element.name} picture={element.picture} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export { Users };
