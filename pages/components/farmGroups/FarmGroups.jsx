import Link from 'next/link';

import styles from './FarmGroups.module.scss';
import FarmItem from '../farmaItem/FarmItem';
import phylogenetic from '../../../public/img/farmGroups/phylogenetic.svg';
import substance from '../../../public/img/farmGroups/substance.svg';
import alphabet from '../../../public/img/farmGroups/alphabet.svg';
import medicine from '../../../public/img/farmGroups/medicine.svg';

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
    <section className={styles['farm-groups']}>
      <div className={styles['farm-groups__row']}>
        {farmGroupsData.map(({ card, title, link }) => (
          <Link href={link} key={title} className={styles['farm-groups__item']}>
            <FarmItem card={card} title={title}>
              {title}
            </FarmItem>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FarmGroups;
