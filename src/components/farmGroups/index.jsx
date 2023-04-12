import Link from 'next/link';

import phylogenetic from '@/public/img/farmGroups/phylogenetic.svg';
import substance from '@/public/img/farmGroups/substance.svg';
import alphabet from '@/public/img/farmGroups/alphabet.svg';
import medicine from '@/public/img/farmGroups/medicine.svg';

import styles from './FarmGroups.module.scss';
import Container from '../../common/Container/Container';
import FarmItem from '../FarmItem/FarmItem';

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

const FarmGroups = () => {
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
};

export default FarmGroups;
