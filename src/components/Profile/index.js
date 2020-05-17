import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Profile = ({ user }) => {
  return (
    <>
      <div className="user">
        <img src={user.picture} className="picture" alt="user" />
        <div>
          <div className="bold">
            <div>{user.name.first}</div>
            <div>{user.name.last}</div>
          </div>
          <div>{user.isActive ? 'online' : 'offline'}</div>
        </div>
      </div>
      <div className="information">
        <span className="bold">About me:</span>
        <span>{`${user.age} years old`}</span>
        <span className="content">{user.about}</span>
        <span className="bold">Address:</span>
        <span>{user.address} </span>
        <span className="bold">Contact:</span>
        <span> {user.phone}</span>
        <span>{user.email}</span>
      </div>
    </>
  );
};

Profile.propTypes = {
  user: PropTypes.object,
  optionalObjectWithShape: PropTypes.shape({
    picture: PropTypes.node,
    last: PropTypes.string,
    first: PropTypes.string,
    isActive: PropTypes.bool,
    age: PropTypes.number,
    about: PropTypes.string,
    address: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
  }),
};

export { Profile };
