import Image from 'next/image';
import styles from './CardNews.module.scss';

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
        <p>
          <time dateTime="2021-02-01 00:00">2 марта 2021</time>
        </p>
      </div>
    </article>
  );
};

export default CardNews;
