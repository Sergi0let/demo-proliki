import Container from '@/pages/common/Container/Container';

import styles from './Banner.module.scss';

const Banner = () => {
  return (
    <Container>
      <div className={styles.banner}>
        <h1 className={styles.banner__title}>
          Надійний довідник в медичному світі: все про ліки тут.
        </h1>
      </div>
    </Container>
  );
};

export default Banner;
