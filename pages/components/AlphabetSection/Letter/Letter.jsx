import styles from './Letter.module.scss';

const Letter = ({ children }) => {
  return <div className={styles.letter}>{children}</div>;
};

export default Letter;
