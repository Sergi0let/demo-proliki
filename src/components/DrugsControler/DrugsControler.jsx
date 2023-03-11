import { useState } from 'react';
import styles from './DrugsControler.module.scss';
import sort from 'public/img/icons/sort.svg';
import Image from 'next/image';

const DrugsControler = ({ drugsSort, onDrugsSort, onOpenSort }) => {
  const [drugsLocalSort, setDrugsLocalSort] = useState(drugsSort);
  const handleDrugsSort = (e) => {
    setDrugsLocalSort(e.target.textContent);
    onDrugsSort(e.target.textContent);
  };

  const handleOpenSort = () => {
    console.log('first');
    onOpenSort();
  };

  const activeStyle = {
    color: '#4D5156',
    backgroundColor: '#EAF2FA',
    borderRadius: '12px',
  };
  return (
    <div className={styles.controler}>
      <div className={styles['desktop-controler']}>
        <h4>Сортировать:</h4>
        <button
          onClick={handleDrugsSort}
          style={drugsLocalSort === 'По популярности' ? activeStyle : null}
        >
          По популярности
        </button>
        <button
          onClick={handleDrugsSort}
          style={drugsLocalSort === 'А-я' ? activeStyle : null}
        >
          А-я
        </button>
        <button
          onClick={handleDrugsSort}
          style={drugsLocalSort === 'Я-а' ? activeStyle : null}
        >
          Я-а
        </button>
      </div>
      <button onClick={handleOpenSort} className={styles['mobile-controler']}>
        <Image
          src={sort}
          alt="sort"
          className={styles['mobile-controler__btn']}
        />
        <span className={styles['mobile-controler__select']}>{drugsSort}</span>
      </button>
    </div>
  );
};

export default DrugsControler;
