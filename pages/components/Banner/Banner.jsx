// make banner component
import React from 'react';

import styles from './Banner.module.scss';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.banner__content}>
        <h1 className={styles.banner__title}>
          Ваш надійний довідник в медичному світі: вся інформація про ліки тут
        </h1>
      </div>
    </div>
  );
};

export default Banner;
