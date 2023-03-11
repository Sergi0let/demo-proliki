import Container from '@/src/common/Container/Container';
import { TitleBig } from '@/src/common/Title/Title';
import Link from 'next/link';
import styles from '../ClassificationMain/ClassificationMain.module.scss';

const ClassificationPage = ({ data }) => {
  return (
    <Container>
      <div className={styles.classification}>
        <ul className={styles.classification__crumbreads}>
          <li>
            <Link href="/">Proliki</Link>
          </li>
        </ul>
        <div className={styles.classification__title}>
          <TitleBig title="ATХ классификация" />
        </div>
        <ul className={styles.classification__list}>
          {data &&
            data.map((item) => (
              <li key={item.id} className={styles.itemClassification}>
                <span>{item.letter}</span>
                <Link href={`/atx_classification/${item.letter}`}>
                  {item.title}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </Container>
  );
};

export default ClassificationPage;
