import { useState } from 'react';
import Link from 'next/link';

import Container from '@/src/common/Container/Container';
import DrugsControler from '../DrugsControler/DrugsControler';
import DrugsTable from '../DrugsTable/DrugsTable';

import styles from './DrugsList.module.scss';

const DrugsList = () => {
  const [drugsSort, setDrugsSort] = useState('По популярности');
  const [openSort, setOpenSort] = useState(false);

  const handleDrugsSort = (sort) => {
    setDrugsSort(sort);
  };

  const handleOpenSort = () => {
    setOpenSort(!openSort);
  };

  const sortCheck = (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.33398 10.2615L8.04803 14.9755L17.4761 5.54743"
        stroke="#4D5156"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );

  return (
    <Container>
      <div className={styles.list}>
        <ul className={styles.list__crumbreads}>
          <li>
            <Link href="/">Proliki</Link>
          </li>
        </ul>
        <div className={styles.list__header}>
          <h1 className={styles.list__title}>
            Результаты поиска “Нифуроксазид”
          </h1>
          <p>14 препаратов, 1 активное вещество</p>
        </div>
        <DrugsControler
          drugsSort={drugsSort}
          onDrugsSort={handleDrugsSort}
          onOpenSort={handleOpenSort}
        />
        <DrugsTable />

        <ul className={styles.summary}>
          <li>
            <p className={styles['summary__find-substance']}>
              Найдено активное вещество: 1
            </p>
          </li>
          <li>
            <a href="#" className={styles.summary__substance}>
              Нифуроксазид (Nifuroxazidum)
            </a>
          </li>
        </ul>
      </div>
      <div
        style={openSort ? { display: 'block' } : { display: 'none' }}
        className={styles['menu-sort']}
      >
        <div onClick={handleOpenSort} className={styles['menu-sort__bg']}></div>
        <div className={styles['menu-sort__list']}>
          <ul>
            {['По популярности', 'А-я', 'Я-а'].map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  handleDrugsSort(item);
                  handleOpenSort();
                }}
                className={styles['menu-sort__item']}
              >
                <a
                  href="#"
                  style={drugsSort === item ? { color: '#4D5156' } : null}
                >
                  {item}
                </a>
                {drugsSort === item && sortCheck}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default DrugsList;
