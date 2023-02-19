import style from './FarmGroups.module.scss';
import FarmItem from '../farmaItem/FarmItem';
import phylogenetic from '../../../public/img/farmGroups/phylogenetic.svg';
import substance from '../../../public/img/farmGroups/substance.svg';
import alphabet from '../../../public/img/farmGroups/alphabet.svg';
import medicine from '../../../public/img/farmGroups/medicine.svg';

const FarmGroups = () => {
  return (
    <section className={style['farm-groups']}>
      <div className={style['farm-groups__row']}>
        <FarmItem card={phylogenetic}>ATХ классификация</FarmItem>
        <FarmItem card={substance}>Активные вещества</FarmItem>
        <FarmItem card={alphabet}>Алфавитный указатель</FarmItem>
        <FarmItem card={medicine}>Производители</FarmItem>
      </div>
    </section>
  );
};

export default FarmGroups;
