import phylogenetic from '@/public/img/farmGroups/phylogenetic.svg';
import substance from '@/public/img/farmGroups/substance.svg';
import alphabet from '@/public/img/farmGroups/alphabet.svg';
import medicine from '@/public/img/farmGroups/medicine.svg';

import Container from '@/src/common/Container/Container';
import FarmItem from '@/src/components/FarmItem/FarmItem';
import Link from 'next/link';

import styles from './index.module.scss';

const farmGroupsData = [
  {
    card: phylogenetic,
    title: 'ATХ класифікація',
    link: '/atx_classification',
  },
  { card: substance, title: 'Активні речовини', link: '/active_substances' },
  { card: alphabet, title: 'Алфавітний покажчик', link: '/alphabet' },
  { card: medicine, title: 'Виробники', link: '/manufacturers' },
];

export default function FarmBlock() {
  return (
    <Container>
      <div className={styles.main}>
        {farmGroupsData.map(({ card, title, link }) => (
          <Link href={link} key={title} className={styles.main__item}>
            <FarmItem card={card} title={title}>
              {title}
            </FarmItem>
          </Link>
        ))}
      </div>
    </Container>
  );
}
