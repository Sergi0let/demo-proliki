import CardNews from '@/pages/common/CardNews/CardNews';
import Container from '@/pages/common/Container/Container';
import Title from '@/pages/common/Title/Title';
import Image from 'next/image';
import Link from 'next/link';
import styles from './NewsBlock.module.scss';

const NewsBlock = () => {
  const newsData = [
    {
      image: 'news-1.jpg',
      alt: 'рекомендації щодо складу вакцин проти грипу',
      category: 'Категорія',

      text: 'ЕМА опублікувало рекомендації щодо складу вакцин проти грипу на 2021р.',
    },
    {
      image: 'news-2.jpg',
      alt: 'Медичні міфи: 6 помилок про мігреню',
      category: 'Категорія',
      text: 'Медичні міфи: 6 помилок про мігреню',
    },
    {
      image: 'news-3.jpg',
      alt: 'Емпагліфлозин схвалений в ЄС при серцевій недостатності',
      category: 'Категорія',
      text: 'Емпагліфлозин схвалений в ЄС при серцевій недостатності',
    },
  ];

  return (
    <Container>
      <div className={styles.news}>
        <div className={styles.news__header}>
          <Title title="Новини медицини та фармації" />
          <Link className={styles.news__link} href="/news">
            Усі новини
          </Link>
        </div>
        <div className={styles.news__wrapper}>
          {newsData.map((item, index) => (
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
