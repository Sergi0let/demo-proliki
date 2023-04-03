import Container from '@/src/common/Container/Container';
import Crumbreads from '@/src/common/Crumbreads/Crumbreads';
import { H1Title } from '@/src/common/Title/Title';
import Link from 'next/link';
import styles from '../ClassificationMain/ClassificationMain.module.scss';

const ClassificationPage = ({ data }) => {
  const router = useRouter();
  return (
    <Container>
      <div className={styles.classification}>
        <Crumbreads routePath={router} />
        <div className={styles.classification__title}>
          <H1Title title="ATХ классификация" />
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
