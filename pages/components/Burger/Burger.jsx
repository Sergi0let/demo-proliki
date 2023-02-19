import React from 'react';
import styles from './Burger.module.scss';

const Burger = ({ onBurger, openBurger }) => {
  const handleBurger = () => {
    onBurger(!openBurger);
  };

  return (
    <button
      className={
        openBurger ? [styles.burger, styles.active].join(' ') : styles.burger
      }
      onClick={handleBurger}
    >
      <div className={styles.block}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
    </button>
  );
};

export default Burger;
