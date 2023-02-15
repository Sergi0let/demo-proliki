import './farmGroups.scss';
import FarmItem from '../../common/farmaItem/FarmItem';
import phylogenetic from '../../img/farmGroups/phylogenetic.svg';
import substance from '../../img/farmGroups/substance.svg';
import alphabet from '../../img/farmGroups/alphabet.svg';
import medicine from '../../img/farmGroups/medicine.svg';
const FarmGroups = () => {
  return (
    <section className="farm-groups">
      <div className="farm-groups__row">
        <FarmItem card={phylogenetic}>ATХ классификация</FarmItem>
        <FarmItem card={substance}>Активные вещества</FarmItem>
        <FarmItem card={alphabet}>Алфавитный указатель</FarmItem>
        <FarmItem card={medicine}>Производители</FarmItem>
      </div>
    </section>
  );
};

export default FarmGroups;
