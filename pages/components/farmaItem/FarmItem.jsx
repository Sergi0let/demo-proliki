import styles from './FarmItem.module.scss';
import Image from 'next/image';

const FarmItem = ({ children, card }) => {
  return (
    <div className={styles['farm-item']}>
      <Image src={card} width={80} height={80} alt={children} />
      <h3>{children}</h3>
    </div>
  );
};

export default FarmItem;
