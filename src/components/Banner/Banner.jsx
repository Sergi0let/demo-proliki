import Container from '@/src/common/Container/Container';
import { H1Title } from '@/src/common/Title/Title';

import styles from './Banner.module.scss';

const Banner = () => {
  return (
    <Container>
      <div className={styles.wrapper}>
        <div className={styles.banner}>
          <H1Title
            title="Надійний довідник в медичному світі: все про ліки тут."
            className={styles.banner__title}
          />
        </div>
      </div>
    </Container>
  );
};

export default Banner;
