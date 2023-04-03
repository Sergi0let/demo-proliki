import styles from './Title.module.scss';

export const H1Title = ({ title, className, variable }) => {
  if (variable) {
    return (
      <h1 className={`${styles.h1Title} ${className}`}>
        {variable} - {title}
      </h1>
    );
  }
  return <h1 className={`${styles.h1Title} ${className}`}>{title}</h1>;
};

export const H2Title = ({ title, className, variable, pro, name }) => {
  if (variable) {
    return (
      <h2 className={`${styles.h2Title} ${className}`}>
        {title} (ATX код {variable})
      </h2>
    );
  } else if (pro) {
    return (
      <h2 className={`${styles.h2Title} ${className}`}>
        {pro} {title}
      </h2>
    );
  } else if (name) {
    return (
      <h2 className={`${styles.h2Title} ${className}`}>
        {title} {name}
      </h2>
    );
  }
  return <h2 className={`${styles.h2Title} ${className}`}>{title}</h2>;
};

export const H3Title = ({ title, className }) => (
  <h3 className={`${styles.h3Title} ${className}`}>{title}</h3>
);

export const H4Title = ({ title, className }) => (
  <h4 className={`${styles.h4Title} ${className}`}>{title}</h4>
);

export const H5Title = ({ title, className }) => (
  <h5 className={`${styles.h5Title} ${className}`}>{title}</h5>
);
