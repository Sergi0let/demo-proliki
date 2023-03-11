import { useState } from 'react';
import styles from './DrugsControler.module.scss';
import sort from 'public/img/icons/sort.svg';
import Image from 'next/image';

const DrugsControler = () => {
  const [drugsSort, setDrugsSort] = useState('По популярности');
  console.log(drugsSort);

  const handleDrugsSort = (e) => {
    setDrugsSort(e.target.textContent);
  };

  const activeStyle = {
    color: '#4D5156',
    backgroundColor: '#EAF2FA',
    borderRadius: '12px',
  };
  return (
    <div className={styles.controler}>
      <h4>Сортировать:</h4>
      <button
        onClick={handleDrugsSort}
        style={drugsSort === 'По популярности' ? activeStyle : null}
      >
        По популярности
      </button>
      <button
        onClick={handleDrugsSort}
        style={drugsSort === 'А-я' ? activeStyle : null}
      >
        А-я
      </button>
      <button
        onClick={handleDrugsSort}
        style={drugsSort === 'Я-а' ? activeStyle : null}
      >
        Я-а
      </button>
    </div>
    // <div className={styles.controler}>
    //   <Image src={sort} alt="sort" className={styles.controler_} />
    //   <Image src={sort} alt="sort" className={styles.controler_} />
    // </div>
  );
};

export default DrugsControler;
