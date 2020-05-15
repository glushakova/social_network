import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

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
};

export { Profile };
