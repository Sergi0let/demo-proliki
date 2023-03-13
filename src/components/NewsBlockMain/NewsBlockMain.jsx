import Container from '@/src/common/Container/Container';
import { TitleBig } from '@/src/common/Title/Title';
import Link from 'next/link';
import styles from './NewsBlockMain.module.scss';

const NewsBlockMain = () => {
  return (
    <Container>
      <main className={styles['news-block']}>
        <div className={styles['news-block__news']}>
          <ul className={styles['news-block__crumbreads']}>
            <li>
              <Link href="/">Proliki</Link>
            </li>
          </ul>
          <div className={styles['news-block__title']}>
            <TitleBig title="Новости медицины и фармации" />
          </div>
          <div className={styles['news-block__news-item']}>
            Lorem ipsum dolor sit amet.
          </div>
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
            <h3>Категории</h3>
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

        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          impedit voluptate aliquid, illo mollitia minus, molestiae eum sapiente
          eveniet vitae delectus at atque, facilis deserunt possimus
          consequuntur placeat. Consectetur, expedita. Ad explicabo aut
          accusamus aspernatur debitis rerum quasi at fugiat minus maxime? Eos
          dolorum, optio a velit labore quos! Doloremque id expedita atque autem
          dolore tenetur quibusdam dolores, labore fuga. Fugit, distinctio Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Commodi impedit
          voluptate aliquid, illo mollitia minus, molestiae eum sapiente eveniet
          vitae delectus at atque, facilis deserunt possimus consequuntur
          placeat. Consectetur, expedita. Ad explicabo aut accusamus aspernatur
          debitis rerum quasi at fugiat minus maxime? Eos dolorum, optio a velit
          labore quos! Doloremque id expedita atque autem dolore tenetur
          quibusdam dolores, labore fuga. Fugit, distinctio Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Commodi impedit voluptate
          aliquid, illo mollitia minus, molestiae eum sapiente eveniet vitae
          delectus at atque, facilis deserunt possimus consequuntur placeat.
          Consectetur, expedita. Ad explicabo aut accusamus aspernatur debitis
          rerum quasi at fugiat minus maxime? Eos dolorum, optio a velit labore
          quos! Doloremque id expedita atque autem dolore tenetur quibusdam
          dolores, labore fuga. Fugit, distinctio Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Commodi impedit voluptate aliquid, illo
          mollitia minus, molestiae eum sapiente eveniet vitae delectus at
          atque, facilis deserunt possimus consequuntur placeat. Consectetur,
          expedita. Ad explicabo aut accusamus aspernatur debitis rerum quasi at
          fugiat minus maxime? Eos dolorum, optio a velit labore quos!
          Doloremque id expedita atque autem dolore tenetur quibusdam dolores,
          labore fuga. Fugit, distinctio
        </div>
      </main>
    </Container>
  );
};

export default NewsBlockMain;
