// Input.js
import React from 'react';
import PropTypes from 'prop-types';
import './Input.css'; // Import the CSS file for styling

const Input = ({ size, borderRadius, isDisabled, isRequired, placeholder, ...props }) => {
  const sizeClass = size ? `input--${size}` : 'input--default';
  const borderRadiusClass = borderRadius ? `input--border-${borderRadius}` : 'input--border-none';
  const classes = `input ${sizeClass} ${borderRadiusClass}`;

  return (
    <input
      className={classes}
      disabled={isDisabled}
      required={isRequired}
      placeholder={placeholder}
      {...props}
    />
  );
};

Input.propTypes = {
  size: PropTypes.oneOf(['default', 'medium', 'large']),
  borderRadius: PropTypes.oneOf(['none', 'small', 'large']),
  isDisabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  size: 'default',
  borderRadius: 'none',
  isDisabled: false,
  isRequired: false,
  placeholder: '',
};

export default Input;
