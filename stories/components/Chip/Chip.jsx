// src/components/Chip.js
import React from 'react';
import './Chip.css';

const Chip = ({ variant = 'default', children }) => {
  return <div className={`chip chip--${variant}`}>{children}</div>;
};

export default Chip;
