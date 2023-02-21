import Tabs from '../Tabs/Tabs';
import styles from './AlphabetSection.module.scss';

const AlphabetSection = () => {
  return (
    <section className={styles.alphabetSection}>
      <div className={styles.alphabetSection__container}>
        <h2>Алфавитный указатель</h2>

        <div className={styles.alphabetSection__block}>
          <Tabs />
          {/* <div className={styles.alphabetSection__tabs}>
            <button type="button" className={styles.alphabetSection__tab}>
              Препараты
            </button>
            <button type="button" className={styles.alphabetSection__tab}>
              Производители
            </button>
            <button type="button" className={styles.alphabetSection__tab}>
              Активные вещества
            </button>
          </div> */}

          <div className={styles.alphabetSection__radio}>
            <input
              type="radio"
              name="alphabet"
              id="alphabet-1"
              className={styles.alphabetSection__radioInput}
            />
            <label
              htmlFor="alphabet-1"
              className={styles.alphabetSection__radioLabel}
            >
              АБВ
            </label>
          </div>
          <div className={styles.alphabetSection__radio}>
            <input
              type="radio"
              name="alphabet"
              id="alphabet-2"
              className={styles.alphabetSection__radioInput}
            />
            <label
              htmlFor="alphabet-2"
              className={styles.alphabetSection__radioLabel}
            >
              ABC
            </label>
          </div>
          <div className={styles.alphabetSection__radio}>
            <input
              type="radio"
              name="alphabet"
              id="alphabet-3"
              className={styles.alphabetSection__radioInput}
            />
            <label
              htmlFor="alphabet-3"
              className={styles.alphabetSection__radioLabel}
            >
              123
            </label>
          </div>
          <ul className={styles.alphabetSection__list}>
            <li className={styles.alphabetSection__item}>
              <a href="#" className={styles.alphabetSection__link}>
                A
              </a>
            </li>
            <li className={styles.alphabetSection__item}>
              <a href="#" className={styles.alphabetSection__link}>
                B
              </a>
            </li>
            <li className={styles.alphabetSection__item}>
              <a href="#" className={styles.alphabetSection__link}>
                C
              </a>
            </li>
            <li className={styles.alphabetSection__item}>
              <a href="#" className={styles.alphabetSection__link}>
                D
              </a>
            </li>
            <li className={styles.alphabetSection__item}>
              <a href="#" className={styles.alphabetSection__link}>
                E
              </a>
            </li>

            <li className={styles.alphabetSection__item}>
              <a href="#" className={styles.alphabetSection__link}>
                F
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AlphabetSection;

{
  /* <body>
  
  <main>
    <article>
      <H1>
        Ваш надійний довідник в медичному світі: вся інформація про ліки тут.
      </H1>

      <section>
        ATХ классификация Активные вещества Алфавитный указатель Производители
      </section>

      <section>
        <H2>Алфавитный указатель</H2>
      </section>

      <section>
        <H2>Популярные препараты по каттегориям</H2>
        <H3>От кашля</H3>
      </section>
    </article>
  </main>
</body>; */
}
