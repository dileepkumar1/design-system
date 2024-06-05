import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Slider = ({ min, max, step, onStop }) => {
  const [value, setValue] = useState(min);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleStop = () => {
    if (onStop) onStop(value);
  };

  return (
    <div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        onMouseUp={handleStop}
        onTouchEnd={handleStop}
      />
      <span>{value}</span>
    </div>
  );
};

Slider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  onStop: PropTypes.func,
};

Slider.defaultProps = {
  min: 0,
  max: 100,
  step: 1,
  onStop: null,
};

export default Slider;
