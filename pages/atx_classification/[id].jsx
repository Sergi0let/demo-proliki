import Container from '@/src/common/Container/Container';
import MenuSort from '@/src/common/MenuSort/MenuSort';
import MenuSortHuge from '@/src/common/MenuSortHuge/MenuSortHuge';
import Title, { TitleBig } from '@/src/common/Title/Title';

import DrugsTable from '@/src/components/DrugsTable/DrugsTable';
import atx_classification from '@/src/data/atx_classification';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from '../../src/components/ClassificationMain/ClassificationMain.module.scss';

const ClassificationPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const data = atx_classification.find((item) => item.letter === id);

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
      <div className={styles.classification}>
        <ul className={styles.classification__crumbreads}>
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
            <Link href="/atx_classification">ATХ классификация</Link>
          </li>
        </ul>
        <div className={styles.classification__title}>
          <TitleBig
            title="Препараты влияющие на пищеварительную систему и обмен веществ"
            variable={id}
          />
        </div>
        <ul className={styles.classification__list}>
          {data.group &&
            data.group.map((item) => (
              <li key={item.id} className={styles.itemClassification}>
                <span>{item.letter}</span>
                <Link href={`/atx_classification/${id}/${item.letter}}`}>
                  {item.title}
                </Link>
              </li>
            ))}
        </ul>
        <Title
          title="Препараты влияющие на пищеварительную систему и обмен веществ"
          variable={id}
        />
        <div className={styles.classification__advantage}>
          <MenuSortHuge
            drugsSort={drugsSort}
            onDrugsSort={handleDrugsSort}
            onOpenSort={handleOpenSort}
          />
          <DrugsTable />
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

export default ClassificationPage;
