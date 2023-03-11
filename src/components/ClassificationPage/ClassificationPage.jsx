import Container from '@/src/common/Container/Container';
import ItemClassification from '@/src/common/ItemClassification/ItemClassification';
import Title, { TitleBig } from '@/src/common/Title/Title';
import atx_classification from '@/src/data/atx_classification';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './ClassificationPage.module.scss';

const ClassificationPage = () => {
  const {
    query: { index },
  } = useRouter();

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
            <Link href="/atx_classification">ATX класифікація</Link>
          </li>
        </ul>
        <div className={styles.classification__title}>
          <TitleBig
            variable={index}
            title="Препараты влияющие на пищеварительную систему и обмен веществ"
          />
        </div>
        <ul className={styles.classification__list}>
          {atx_classification &&
            atx_classification.map((item) => (
              <ItemClassification key={item.id} item={item} />
            ))}
        </ul>
        <Title
          variable={index}
          title="Препараты влияющие на пищеварительную систему и обмен веществ"
        />
      </div>
    </Container>
  );
};

export default ClassificationPage;
