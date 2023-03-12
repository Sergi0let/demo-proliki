import Letter from '@/src/common/Letter/Letter';
import Image from 'next/image';
import styles from './Pagination.module.scss';
import arrow from '/public/img/icons/arrow.svg';

const Pagination = () => {
  return (
    <div className={styles.pagination}>
      <Letter>
        <Image src={arrow} alt="arrow" />
      </Letter>
      <Letter>1</Letter>
      <Letter>2</Letter>
      <Letter>...</Letter>
      <Letter>12</Letter>
      <Letter>
        <Image
          src={arrow}
          alt="arrow"
          style={{ transform: 'rotate(180deg)' }}
        />
      </Letter>
    </div>
  );
};

export default Pagination;
