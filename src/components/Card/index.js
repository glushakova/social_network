import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

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
  optionalObjectWithShape: PropTypes.shape({
    first: PropTypes.string,
    last: PropTypes.string,
  }),
};

export { Card };
