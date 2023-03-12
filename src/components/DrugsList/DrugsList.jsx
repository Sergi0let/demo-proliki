import { useState } from 'react';
import Link from 'next/link';

import Container from '@/src/common/Container/Container';
import DrugsTable from '../DrugsTable/DrugsTable';

import styles from './DrugsList.module.scss';
import MenuSort from '@/src/common/MenuSort/MenuSort';
import MenuSortHuge from '@/src/common/MenuSortHuge/MenuSortHuge';

const DrugsList = () => {
  const [drugsSort, setDrugsSort] = useState('По популярности');
  const [openSort, setOpenSort] = useState(false);

  const handleDrugsSort = (sort) => {
    setDrugsSort(sort);
  };

  const handleOpenSort = () => {
    setOpenSort(!openSort);
  };

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
        <MenuSortHuge
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
      <MenuSort
        openSort={openSort}
        handleOpenSort={handleOpenSort}
        handleDrugsSort={handleDrugsSort}
        drugsSort={drugsSort}
      />
    </Container>
  );
};

export default DrugsList;
