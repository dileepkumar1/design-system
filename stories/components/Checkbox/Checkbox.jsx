import React from 'react';
import PropTypes from 'prop-types';
import './Checkbox.css'; // Make sure to style your component

const Checkbox = ({ label, variant, disabled, alert, ...props }) => {
  return (
    <div className={`checkbox ${variant} ${disabled ? 'disabled' : ''} ${alert ? 'alert' : ''}`}>
      <input type="checkbox" disabled={disabled} {...props} />
      {label && <label>{label}</label>}
    </div>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.oneOf(['main']),
  disabled: PropTypes.bool,
  alert: PropTypes.bool,
};

Checkbox.defaultProps = {
  variant: 'main',
  disabled: false,
  alert: false,
};

export default Checkbox;
