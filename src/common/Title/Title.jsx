import styles from './Title.module.scss';

const Title = ({ level = '2', title }) => {
  const HeadingTag = `h${level}`;
  return <HeadingTag className={styles.mainTitle}>{title}</HeadingTag>;
};

export default Title;

export const TitleSmall = ({ level = '4', title }) => {
  const HeadingTag = `h${level}`;
  return <HeadingTag className={styles.secondaryTitle}>{title}</HeadingTag>;
};
