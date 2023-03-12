import styles from './Title.module.scss';

const Title = ({ level = '2', title, variable }) => {
  const HeadingTag = `h${level}`;
  return (
    <HeadingTag className={styles.mainTitle}>
      {title} {variable ? `(ATX код ${variable})` : ''}
    </HeadingTag>
  );
};

export default Title;

export const TitleSmall = ({ level = '4', title }) => {
  const HeadingTag = `h${level}`;
  return <HeadingTag className={styles.secondaryTitle}>{title}</HeadingTag>;
};

export const TitleMedium = ({ level = '3', title, name }) => {
  const HeadingTag = `h${level}`;
  return (
    <HeadingTag className={styles.mediumTitle}>
      {title} {name}
    </HeadingTag>
  );
};

export const TitleBig = ({ level = '1', title, variable = '' }) => {
  const HeadingTag = `h${level}`;
  return (
    <HeadingTag className={styles.bigTitle}>
      {variable ? `${variable} - ` : ''} {title}
    </HeadingTag>
  );
};

export const TittleIntermidiate = ({ level = '3', title }) => {
  const HeadingTag = `h${level}`;
  return <HeadingTag className={styles.intermidiateTitle}>{title}</HeadingTag>;
};
