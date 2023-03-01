import styles from './MainContainer.module.scss';

const MainContainer = ({ children }) => {
  return <div className={styles.main}>{children}</div>;
};

export default MainContainer;
