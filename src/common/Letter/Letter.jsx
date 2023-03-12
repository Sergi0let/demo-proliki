import styles from './Letter.module.scss';

const Letter = ({ children, style, onClick }) => {
  return (
    <div onClick={onClick} style={style} className={styles.letter}>
      {children}
    </div>
  );
};

export default Letter;
