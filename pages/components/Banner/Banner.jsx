// make banner component
import React from 'react';

import styles from './Banner.module.scss';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.banner__content}>
        <h1 className={styles.banner__title}>
          Надійний довідник в медичному світі: все про ліки тут.
        </h1>
      </div>
    </div>
  );
};

export default Banner;
