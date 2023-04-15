import Image from 'next/image';
import noMatches from '@/public/img/404/img-404.jpg';
import { H1Title } from '@/src/common/Title/Title';
import Container from '@/src/common/Container/Container';

import home from '@/public/img/404/home.svg';
import styles from './index.module.scss';

export default function NoMatches() {
  return (
    <Container style={{ width: '1440px' }}>
      <div className={styles['no-matches']}>
        <div className={styles['no-matches__wrapper']}>
          <div className={styles['no-matches__content']}>
            <H1Title
              className={styles['no-matches__content-title']}
              title="Сторінку не знайдено"
            />
            <p className={styles['no-matches__text-content']}>
              Неправильно набрано адресу або такої сторінки на сайті більше не
              існує.
            </p>
            <button className={styles['no-matches__btn']}>
              <Image src={home} alt="home" title="home" />
              На головну
            </button>
          </div>
          <div className={styles['no-matches__img-wrapper']}>
            <Image
              src={noMatches}
              width={552}
              alt="image 404 page"
              title="rocket and spaceman"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
