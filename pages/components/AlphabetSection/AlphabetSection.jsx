import Tabs from '../Tabs/Tabs';
import styles from './AlphabetSection.module.scss';

const AlphabetSection = () => {
  return (
    <section className={styles.alphabetSection}>
      <div className={styles.alphabetSection__container}>
        <h2>Алфавитный указатель</h2>

        <div className={styles.alphabetSection__block}>
          <Tabs />
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
