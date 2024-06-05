// Switch.js

import React from 'react';
import './Switch.css';

const Switch = ({ checked, onChange, disabled }) => {
  const handleChange = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  return (
    <label className={`switch ${disabled ? 'disabled' : ''}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
      />
      <span className="slider"></span>
    </label>
  );
};

export default Switch;
