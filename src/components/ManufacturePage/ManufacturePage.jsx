import Container from '@/src/common/Container/Container';
import MenuSort from '@/src/common/MenuSort/MenuSort';
import MenuSortHuge from '@/src/common/MenuSortHuge/MenuSortHuge';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

import DrugsTable from '../DrugsTable/DrugsTable';
import Pagination from '../Pagination/Pagination';
import styles from './ManufacturePage.module.scss';

const ManufacturePage = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  const [drugsSort, setDrugsSort] = useState('По популярности');
  const [openSort, setOpenSort] = useState(false);

  const handleDrugsSort = (sort) => {
    setDrugsSort(sort);
  };

  const handleOpenSort = () => {
    setOpenSort(!openSort);
  };

  const activeStyle = {
    color: '#4D5156',
    backgroundColor: '#EAF2FA',
    borderRadius: '12px',
  };

  return (
    <Container>
      <div className={styles['manufacture-page']}>
        <ul className={styles['manufacture-page__crumbreads']}>
          <li>
            <Link href="/">Proliki</Link>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="4"
              viewBox="0 0 4 4"
              fill="none"
            >
              <rect width="4" height="4" rx="2" fill="#4D5156" />
            </svg>
          </li>
          <li>
            <Link href="/manufacturers">Производители</Link>
          </li>
        </ul>
        <div className={styles['manufacture-page__header']}>
          <h1 className={styles['manufacture-page__title']}>{id}</h1>
          <p> 14 препаратов, 1 активное вещество</p>
        </div>
        <MenuSortHuge
          drugsSort={drugsSort}
          onDrugsSort={handleDrugsSort}
          onOpenSort={handleOpenSort}
        />
        <DrugsTable />
        <div className={styles['manufacture-page__pagination']}>
          <Pagination />
        </div>
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

export default ManufacturePage;
