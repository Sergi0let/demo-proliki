import styles from './ItemClassification.module.scss';

const ItemClassification = ({ item }) => {
  return (
    <li className={styles.itemClassification}>
      <span>{item.letter}</span>
      <a href={item.link}>{item.title}</a>
    </li>
  );
};

export default ItemClassification;
