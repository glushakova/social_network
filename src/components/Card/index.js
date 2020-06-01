import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Card = ({ name, picture, small }) => {
  const classNames = {
    card: `card ${small && 'card-small'}`,
    cardImage: `card-image ${small && 'card-image-small'}`,
    cardContent: `card-content ${small && 'card-content-small'}`,
  };

  return (
    <div className={classNames.card}>
      <img src={picture} className={classNames.cardImage} alt="avatar" />
      <div className={classNames.cardContent}>
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
  small: PropTypes.bool,
};

export { Card };
