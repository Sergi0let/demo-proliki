import styles from './MainContainer.module.scss';

const MainContainer = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};

export default MainContainer;
