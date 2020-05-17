import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';

import { Loader, Card, Profile } from '../../components';
import { ROUTES } from '../../const';
import './style.css';

const User = (props) => {
  const [userData, userChange] = useState(null);
  const [loading, loadingChange] = useState(false);
  const [error, errorChange] = useState('');

  useEffect(() => {
    loadingChange(true);
    const getUser = async () => {
      try {
        const response = await axios.get(
          `https://serverless-backend-ky9b8rmuq.now.sh/api/users/${props.match.params.index}`
        );
        userChange(response.data);
        loadingChange(false);
      } catch (error) {
        loadingChange(false);
        errorChange(error.message);
      }
    };
    getUser();
  }, [props.match.params.index]);

  if (!userData && !loading) {
    return <div>{`Ошибка: ${error}`}</div>;
  }

  if (loading && !userData) {
    return <Loader />;
  }

  return (
    <>
      <div className="component">
        {userData && <Profile user={userData} />}
        <div className="friends">
          <span className="bold">Friends:</span>
          {userData?.friends.length >= 1 ? (
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
            <span className="component">{`You could be the first friend for ${userData?.name.first}`}</span>
          )}
        </div>
      </div>
    </>
  );
};

export { User };

User.propTypes = {
  match: PropTypes.object,
};
