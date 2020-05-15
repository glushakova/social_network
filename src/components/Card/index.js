import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

const Card = ({ name, picture }) => {
  return (
    <div className="card">
      <img src={picture} className="card-image" alt="user" />
      <div className="card-content">
        <h2>{name.first}</h2>
        <h4>{name.last}</h4>
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.object,
  picture: PropTypes.node,
};

export { Card };
