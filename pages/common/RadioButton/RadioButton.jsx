import styles from './RadioButton.module.scss';

const RadioButton = ({ name, id, value, onChange, checked, text }) => {
  const handleCheck = (e) => {
    onChange(e.target.id);
  };

  return (
    <label htmlFor={id} className={styles['radio-label']}>
      <input
        className={styles['radio-input']}
        type="radio"
        name={name}
        id={id}
        value={value}
        onChange={handleCheck}
        checked={checked}
      />
      <span className={styles['custom-radio']} />
      {text}
    </label>
  );
};

export default RadioButton;
