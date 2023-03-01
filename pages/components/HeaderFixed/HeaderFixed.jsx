import styles from './HeaderFixed.module.scss';
import Image from 'next/image';
import ChangeLang from '../ChangeLang/ChangeLang';
import Burger from '../Burger/Burger';
import Search from '../Search/Search';
import List from './List/List';
import Link from 'next/link';

const HeaderFixed = ({ openBurger, onBurger, onClose }) => {
  const burgerOpen = openBurger ? '0' : '-1000%';

  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.header__top}>
          <div className={styles.top}>
            <Link href={'/'} onClick={() => onClose()}>
              <Image
                src={'./img/logo/logo-l.svg'}
                alt="Емблема сайту"
                width={124}
                height={32}
                className={styles.logo}
              />
            </Link>
            <div className={styles.search}>
              <Search />
            </div>
            <div className={styles.top__buttons}>
              <div className={styles.forLowSee}>
                <button>Для слабозорих</button>
              </div>
              <ChangeLang />
              <Burger openBurger={openBurger} onBurger={onBurger} />
            </div>
          </div>
        </div>

        <div className={styles.header__bottom}>
          <div className={styles.searchBottom}>
            <Search />
          </div>
          <List openBurger={openBurger} onBurger={onBurger} onClose={onClose} />
        </div>
        <div
          onClick={() => onClose()}
          style={{ top: burgerOpen }}
          className={styles.cover}
        ></div>
      </nav>
    </header>
  );
};

export default HeaderFixed;
