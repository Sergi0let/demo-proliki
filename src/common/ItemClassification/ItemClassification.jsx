import Link from 'next/link';
import styles from './ItemClassification.module.scss';

const ItemClassification = ({ item }) => {
  return (
    <li className={styles.itemClassification}>
      <span>{item.letter}</span>
      <Link href={`/atx_classification/first/${item.letter}`}>
        {item.title}
      </Link>
    </li>
  );
};

export default ItemClassification;
