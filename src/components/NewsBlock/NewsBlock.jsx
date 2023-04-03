import Link from 'next/link';

import CardNews from '@/src/common/CardNews/CardNews';
import Container from '@/src/common/Container/Container';
import { H2Title } from '@/src/common/Title/Title';

import news_data from '@/src/data/news_data';
import styles from './NewsBlock.module.scss';

const NewsBlock = () => {
  return (
    <Container>
      <div className={styles.news}>
        <div className={styles.news__header}>
          <H2Title title="Новини медицини та фармації" />
          <Link className={styles.news__link} href="/news">
            Усі новини
          </Link>
        </div>
        <div className={styles.news__wrapper}>
          {news_data &&
            news_data.map((item, index) => (
              <CardNews
                key={index}
                image={item.image}
                alt={item.alt}
                category={item.category}
                text={item.text}
              />
            ))}
        </div>
      </div>
    </Container>
  );
};

export default NewsBlock;
