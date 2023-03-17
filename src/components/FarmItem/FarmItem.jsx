import Image from 'next/image';
import styles from './FarmItem.module.scss';

const FarmItem = ({ children, card }) => {
  return (
    <div className={styles['farm-item']}>
      <Image
        src={card}
        width={80}
        height={80}
        alt={children}
        className={styles.img}
      />
      <h3>{children}</h3>
    </div>
  );
};

export default FarmItem;
