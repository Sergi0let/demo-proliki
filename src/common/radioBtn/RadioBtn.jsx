import React from 'react';

import './radioBtn.scss';

const RadioBtn = ({ name, value, checked, onChange, label }) => (
  <label className="radio-btn">
    <input
      type="radio"
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
    />
    <div className="radio-btn__round"></div>
    {label}
  </label>
);

export default RadioBtn;
