// Select.js
import React from 'react';
import PropTypes from 'prop-types';
import './Select.css'; // Add appropriate styling for each size variant

const Select = ({ size, options, isDisabled, ...props }) => {
  return (
    <select className={`select ${size}`} disabled={isDisabled} {...props}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

Select.propTypes = {
  size: PropTypes.oneOf(['default', 'medium', 'small', 'large']),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  isDisabled: PropTypes.bool,
};

Select.defaultProps = {
  size: 'default',
  isDisabled: false,
};

export default Select;
