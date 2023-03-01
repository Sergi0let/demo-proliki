import styles from './Container.module.scss';

const Container = ({ children }) => {
  return <section className={styles.main}>{children}</section>;
};

export default Container;
