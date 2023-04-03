import CardNews from '@/src/common/CardNews/CardNews';
import Container from '@/src/common/Container/Container';
import Crumbreads from '@/src/common/Crumbreads/Crumbreads';
import { H1Title } from '@/src/common/Title/Title';
import newsData from '@/src/data/news_block-main';
import Image from 'next/image';
import Link from 'next/link';
import Pagination from '../Pagination/Pagination';
import styles from './NewsBlockMain.module.scss';

const NewsBlockMain = () => {
  return (
    <Container>
      <main className={styles['news-block']}>
        <div className={styles['news-block__news']}>
          <Crumbreads />
          <div className={styles['news-block__title']}>
            <H1Title title="Новости медицины и фармации" />
          </div>
          <article className={styles.card}>
            <a href="#" className={styles.card__img_wrapper}>
              <Image
                src={`/img/news/news-main-1.jpg`}
                width={360}
                height={240}
                alt="main news"
                className={styles.card__img}
              />
            </a>
            <div className={styles.card__content}>
              <a className={styles.card__category} href="#">
                Категория
              </a>
              <a className={styles.card__text_link} href="#">
                Препараты от изжоги как новое средство для контроля уровня
                глюкозы в крови при сахарном диабете
              </a>
              <p className={styles.card__text_date}>
                <time dateTime="2021-02-01 00:00">2 марта 2021</time>
              </p>
            </div>
          </article>
          <ul className={styles['news-block__list-news']}>
            {newsData &&
              newsData.map((news) => <CardNews key={news.id} {...news} />)}
          </ul>

          <Pagination />
        </div>

        <div className={styles['news-block__aside-block']}>
          <aside>
            <h3>Категории</h3>
            <ul>
              <li>
                <a href="#">Частная медицина</a>
                <p>12</p>
              </li>
              <li>
                <a href="#">Фармацевтика</a>
                <p>8</p>
              </li>
              <li>
                <a href="#">Коронавирусная болезнь</a>
                <p>6</p>
              </li>
              <li>
                <a href="#">Детское здоровье</a>
                <p>6</p>
              </li>
              <li>
                <a href="#">Кардиология</a>
                <p>3</p>
              </li>
              <li>
                <a href="#">Онкология и гематология</a>
                <p>2</p>
              </li>
              <li>
                <a href="#">Народная медицина</a>
                <p>1</p>
              </li>
              <li>
                <a href="#">Грипп и простуда</a>
                <p>1</p>
              </li>
            </ul>
          </aside>
          <aside>
            <h3>Популярні новини</h3>
            <ul>
              <li>
                <a href="#">
                  Препараты от изжоги как новое средство для контроля уровня
                  глюкозы в крови при сахарном диабете
                </a>
              </li>
              <li>
                <a href="#">
                  Поможет ли вакцинация при «Дельта»-варианте COVID-19?
                </a>
              </li>
              <li>
                <a href="#">
                  Есть ли надежда на длительный иммунитет у перенесших COVID-19
                  в легкой форме?
                </a>
              </li>
              <li>
                <a href="#">
                  Роль фармацевтів у пропаганді здорового способу життя
                </a>
              </li>
              <li>
                <a href="#">
                  Израиль сообщает о снижении эффективности вакцины
                </a>
              </li>
            </ul>
          </aside>
        </div>
      </main>
    </Container>
  );
};

export default NewsBlockMain;
