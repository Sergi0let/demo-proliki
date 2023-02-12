import React from 'react';

import './radioBtn.scss';

const RadioBtn = ({ name, value, checked, onChange, label, disabled }) => (
  <label className="radio-btn">
    <input
      type="radio"
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
      disabled={disabled}
    />
    <div className={`radio-btn__round ${disabled ? 'disabled' : ''}`}></div>
    {label}
  </label>
);

export default RadioBtn;
