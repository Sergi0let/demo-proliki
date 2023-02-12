import React from 'react';
import PropTypes from 'prop-types';

import check from '../../img/icons/check.svg';
import './checkbox.scss';

const Checkbox = ({ label, checked, disabled, onChange }) => {
  const handleCheckboxChange = () => {
    if (disabled) {
      return;
    }
    onChange(!checked);
  };

  return (
    <div className="checkbox" onClick={handleCheckboxChange}>
      <input
        type="checkbox"
        className="checkbox__input"
        // checked={checked}
        disabled={disabled}
      />
      <div
        className={`checkbox__round ${checked ? 'checked' : ''} ${
          disabled ? 'disabled' : ''
        }`}
      >
        <img src={check} alt="checkIcon" />
      </div>
      <span
        className={`checkbox__label ${checked ? 'checked' : ''} ${
          disabled ? 'disabled' : ''
        }`}
      >
        {label}
      </span>
    </div>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

Checkbox.defaultProps = {
  checked: false,
  disabled: false,
  onChange: () => {},
};

export default Checkbox;
