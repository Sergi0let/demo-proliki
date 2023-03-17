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

// --------- //

export const H1Title = ({ title, className }) => (
  <h1 className={`${styles.h1Title} ${className}`}>{title}</h1>
);

export const H2Title = ({ title, className }) => (
  <h2 className={`${styles.h2Title} ${className}`}>{title}</h2>
);

export const H3Title = ({ title, className }) => (
  <h3 className={`${styles.h3Title} ${className}`}>{title}</h3>
);

export const H4Title = ({ title, className }) => (
  <h4 className={`${styles.h4Title} ${className}`}>{title}</h4>
);

export const H5Title = ({ title, className }) => (
  <h5 className={`${styles.h5Title} ${className}`}>{title}</h5>
);
