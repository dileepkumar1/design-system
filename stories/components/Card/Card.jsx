import React from 'react';
import PropTypes from 'prop-types';
import './Card.css'; // Assuming you have a CSS file for styling

const Card = ({ children, shadow, radius }) => {
  const shadowClass = `shadow-${shadow}`;
  const radiusClass = `radius-${radius}`;

  return (
    <div className={`card ${shadowClass} ${radiusClass}`}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  shadow: PropTypes.oneOf(['none', 'small', 'medium', 'large']),
  radius: PropTypes.oneOf(['none', 'small', 'medium', 'large']),
};

Card.defaultProps = {
  shadow: 'none',
  radius: 'none',
};

export default Card;
