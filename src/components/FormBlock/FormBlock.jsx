import Image from 'next/image';
import { useState, useEffect, useReducer, useRef } from 'react';

import warning from '../../../public/img/icons/warning.svg';
import check from '../../../public/img/icons/check.svg';

import styles from './FormBlock.module.scss';

const FormBlock = () => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmailState] = useReducer(emailReducer, {
    value: '',
    isValid: undefined,
  });

  const [nameState, dispatchNameState] = useReducer(nameReducer, {
    value: '',
    isValid: undefined,
  });

  const [textState, dispatchTextState] = useReducer(textReducer, {
    value: '',
  });
  const { isValid: emailIsValid } = emailState;
  const { isValid: nameIsValid } = nameState;

  const emailInputRef = useRef();
  const nameInputRef = useRef();

  const emailChangeHandler = (event) => {
    dispatchEmailState({ type: 'USER_INPUT', value: event.target.value });
  };

  const nameChangeHandler = (event) => {
    dispatchNameState({ type: 'USER_INPUT', value: event.target.value });
  };
  const textChangeHandler = (event) => {
    dispatchTextState({ type: 'USER_INPUT', value: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmailState({ type: 'INPUT_BLUR' });
  };

  const validatePasswordHandler = () => {
    dispatchNameState({ type: 'INPUT_BLUR' });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      console.log('-------------------------');
      console.log('formIsValid', formIsValid);
      console.log('emailState', emailState);
      console.log('nameState', nameState);
      console.log('textState', textState);
      console.log('-------------------------');

      dispatchNameState({ type: 'USER_INPUT', value: '' });
      dispatchEmailState({ type: 'USER_INPUT', value: '' });
      dispatchTextState({ type: 'USER_INPUT', value: '' });
      setFormIsValid(true);
    } else if (!emailIsValid) {
      emailInputRef.current.focus();
    } else {
      nameInputRef.current.focus();
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('Effect function');
      setFormIsValid(emailIsValid && nameIsValid);
    }, 1000);

    return () => {
      console.log('Очистка');
      clearTimeout(timer);
    };
  }, [emailIsValid, nameIsValid]);

  const addIconValid = (typeValid) =>
    typeValid === false ? (
      <Image src={warning} alt="warning" />
    ) : nameState.value.length > 1 ? (
      <Image src={check} alt="check" />
    ) : (
      ''
    );

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <h4>Не соромтеся зв&apos;язатися з нами!</h4>
      <div
        className={`${styles.form__input} ${
          nameIsValid === false ? styles.invalid : ''
        }`}
      >
        <input
          minLength={2}
          maxLength={33}
          ref={nameInputRef}
          value={nameState.value}
          onChange={nameChangeHandler}
          onBlur={validatePasswordHandler}
          required
          type="text"
          id="name"
          name="name"
          placeholder="Ім’я"
        />
        <div
          className={`${styles.form__icon} ${
            nameIsValid === false
              ? styles.invalid
              : nameState.value.length > 0
              ? styles.valid
              : ''
          }`}
        >
          {addIconValid(nameIsValid)}
        </div>
      </div>

      <div
        className={`${styles.form__input} ${
          emailIsValid === false ? styles.invalid : ''
        }`}
      >
        <input
          minLength={2}
          maxLength={33}
          ref={emailInputRef}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          type="email"
          id="email"
          name="email"
          placeholder="Електронна пошта"
        />
        <div
          className={`${styles.form__icon} ${
            emailIsValid === false
              ? styles.invalid
              : emailState.value.length > 0
              ? styles.valid
              : ''
          }`}
        >
          {addIconValid(emailIsValid)}
        </div>
      </div>
      <div className={styles.form__input}>
        <textarea
          minLength={2}
          maxLength={120}
          onChange={textChangeHandler}
          value={textState.value}
          placeholder="Текст повідомлення"
          name="message"
          id="message"
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <button
        type="submit"
        className={`${styles.form__btn} ${formIsValid ? styles.valid_btn : ''}`}
      >
        Відправити
      </button>
    </form>
  );
};

export default FormBlock;

const emailReducer = (prevState, action) => {
  if (action.type === 'USER_INPUT') {
    return {
      value: action.value,
      isValid: action.value.includes('@'),
    };
  }
  if (action.type === 'INPUT_BLUR') {
    return {
      value: prevState.value,
      isValid: prevState.value.includes('@'),
    };
  }
  return {
    value: '',
    isValid: false,
  };
};

const nameReducer = (prevState, action) => {
  if (action.type === 'USER_INPUT') {
    return {
      value: action.value,
      isValid: action.value.trim().length > 4,
    };
  }
  if (action.type === 'INPUT_BLUR') {
    return {
      value: prevState.value,
      isValid: prevState.value.trim().length > 4,
    };
  }
  return {
    value: '',
    isValid: false,
  };
};

const textReducer = (prevState, action) => {
  if (action.type === 'USER_INPUT') {
    return {
      value: action.value,
    };
  }
  return {
    value: '',
  };
};
