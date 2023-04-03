import Container from '@/src/common/Container/Container';
import Crumbreads from '@/src/common/Crumbreads/Crumbreads';
import MenuSort from '@/src/common/MenuSort/MenuSort';
import MenuSortHuge from '@/src/common/MenuSortHuge/MenuSortHuge';
import { H1Title, H2Title } from '@/src/common/Title/Title';

import DrugsTable from '@/src/components/DrugsTable/DrugsTable';
import Pagination from '@/src/components/Pagination/Pagination';
import atx_classification from '@/src/data/atx_classification';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from '../../src/components/ClassificationMain/ClassificationMain.module.scss';

const ClassificationPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const data = atx_classification.find((item) => item.letter === id);

  const [drugData, setDrugData] = useState([]);

  useEffect(() => {
    setDrugData(data.group);
  }, [data]);

  const [drugsSort, setDrugsSort] = useState('По популярности');
  const [openSort, setOpenSort] = useState(false);

  const handleDrugsSort = (sort) => {
    setDrugsSort(sort);
  };

  const handleOpenSort = () => {
    setOpenSort(!openSort);
  };
  if (!data) return null;

  return (
    <Container>
      <div className={styles.classification}>
        <Crumbreads routePath={router} />

        <div className={styles.classification__title}>
          <H1Title
            title="Препараты влияющие на пищеварительную систему и обмен веществ"
            variable={id}
          />
        </div>
        <ul className={styles.classification__list}>
          {drugData &&
            drugData.map((item) => (
              <li key={item.id} className={styles.itemClassification}>
                <span>{item.letter}</span>
                <Link href={`/atx_classification/${id}/${item.letter}}`}>
                  {item.title}
                </Link>
              </li>
            ))}
        </ul>
        <H2Title
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
        <Pagination />
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
