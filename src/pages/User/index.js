import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { getUser } from '../../actions';
import { Loader, Card, Profile } from '../../components';
import { ROUTES } from '../../const';
import './style.css';

const User = (props) => {
  const userData = useSelector((state) => state.user.user);
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.err);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(props.match.params.index));
  }, [props.match.params.index, dispatch]);

  if (!userData && !loading) {
    return <div>{`Ошибка: ${error}`}</div>;
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div className="component">
        {userData && <Profile />}
        {
          <div className="friends">
            <span className="bold">Friends:</span>
            {userData?.friends?.length >= 1 ? (
              userData.friends.map((index) => (
                <Link key={index.index} to={`${ROUTES.USERS}/${index.index}`}>
                  <Card
                    key={index.id}
                    name={index.name}
                    picture={index.picture}
                  />
                </Link>
              ))
            ) : (
              <span className="component">{`You could be the first friend for ${userData?.name?.first}`}</span>
            )}
          </div>
        }
      </div>
    </>
  );
};

export { User };

User.propTypes = {
  match: PropTypes.object,
};
