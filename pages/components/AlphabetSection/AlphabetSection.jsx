import Tabs from '../Tabs/Tabs';
import styles from './AlphabetSection.module.scss';

const AlphabetSection = () => {
  return (
    <section className={styles.alphabetSection}>
      <div className={styles.alphabetSection__container}>
        <h2>Алфавітний покажчик</h2>
        <div className={styles.alphabetSection__block}>
          <Tabs />
        </div>
      </div>
    </section>
  );
};

export default AlphabetSection;
