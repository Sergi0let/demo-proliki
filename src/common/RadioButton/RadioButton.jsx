import styles from './RadioButton.module.scss';

const RadioButton = ({ name, id, value, onChange, checked, text }) => {
  const handleCheck = (e) => {
    onChange(e.target.id);
  };

  return (
    <label htmlFor={id} className={styles['radio-btn']}>
      <input
        className={styles['radio-btn__input']}
        type="radio"
        name={name}
        id={id}
        value={value}
        onChange={handleCheck}
        checked={checked}
      />
      <span className={styles['radio-btn__content']} />
      {text}
    </label>
  );
};

export default RadioButton;
