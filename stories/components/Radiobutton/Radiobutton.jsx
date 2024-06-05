// RadioButton.js

import React from 'react';

const RadioButton = ({ id, label, checked, disabled, onChange }) => {
  return (
    <div>
      <input
        type="radio"
        id={id}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default RadioButton;
