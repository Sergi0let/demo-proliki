import Image from 'next/image';
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
    <section className={styles.news}>
      <div className={styles.news__header}>
        <h2>Новини медицини та фармації</h2>
        <a href="#">Усі новини</a>
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
    </section>
  );
};

export default NewsBlock;

const CardNews = ({ image, alt, category, text }) => {
  return (
    <article className={styles.card}>
      <div className={styles.card__img_wrapper}>
        <Image
          src={`/img/news/${image}`}
          width={360}
          height={240}
          alt={alt}
          className={styles.card__img}
        />
      </div>

      <div className={styles.card__content}>
        <h3>{category}</h3>
        <p>{text}</p>
        <time datetime="2021-02-01 00:00">2 марта 2021</time>
      </div>
    </article>
  );
};
