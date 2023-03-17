import phylogenetic from '@/public/img/farmGroups/phylogenetic.svg';
import substance from '@/public/img/farmGroups/substance.svg';
import alphabet from '@/public/img/farmGroups/alphabet.svg';
import medicine from '@/public/img/farmGroups/medicine.svg';

const farmGroupData = [
  {
    card: phylogenetic,
    title: 'ATХ класифікація',
    link: '/atx_classification',
  },
  { card: substance, title: 'Активні речовини', link: '/active_substances' },
  { card: alphabet, title: 'Алфавітний покажчик', link: '/alphabet' },
  { card: medicine, title: 'Виробники', link: '/manufacturers' },
];

export default farmGroupData;
