import './emailInput.scss';
import React, { useState } from 'react';
import className from 'classnames';

const iconValid = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="16" height="16" rx="8" fill="#0058E9" />
    <path
      d="M5.33203 8.10461L7.21765 9.99023L10.9889 6.219"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const iconInvalid = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="8" cy="8" r="8" fill="#FF3868" />
    <rect x="7" y="3" width="2" height="6" rx="1" fill="white" />
    <rect x="7" y="11" width="2" height="2" rx="1" fill="white" />
  </svg>
);

export const emailValidation = (emailData) => {
  let re =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return re.test(String(emailData).toLowerCase());
};

const EmailInput = ({ placeholder, type }) => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);

  console.log('isValid', isValid);

  const handleChange = (e) => {
    let emailValue = e.target.value;

    setIsValid(emailValidation(emailValue));
    setEmail(emailValue);
  };

  const classes = className('input-email__input', { 'is-valid': !isValid });

  console.log('email', email);
  return (
    <div className="input-email">
      <input
        className={classes}
        type={type}
        placeholder={placeholder}
        value={email}
        onChange={handleChange}
      />
      <span className="input-email__icon">
        {email && isValid && iconValid}
        {!isValid && iconInvalid}
      </span>

      {!isValid && (
        <span className="input-email__message">
          Невірний формат введення емейлу
        </span>
      )}
    </div>
  );
};

export default EmailInput;
