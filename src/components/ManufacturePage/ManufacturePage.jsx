import Container from '@/src/common/Container/Container';
import Crumbreads from '@/src/common/Crumbreads/Crumbreads';
import MenuSort from '@/src/common/MenuSort/MenuSort';
import MenuSortHuge from '@/src/common/MenuSortHuge/MenuSortHuge';
import { H1Title } from '@/src/common/Title/Title';

import { useRouter } from 'next/router';
import { useState } from 'react';

import DrugsTable from '../DrugsTable/DrugsTable';
import Pagination from '../Pagination/Pagination';
import styles from './ManufacturePage.module.scss';

const ManufacturePage = () => {
  const router = useRouter();
  const { id } = router.query;

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
        <Crumbreads routePath={router} />
        <div className={styles['manufacture-page__header']}>
          <H1Title title={id} />
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
