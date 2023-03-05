import Link from 'next/link';
import Image from 'next/image';
import styles from './HeaderFixed.module.scss';
import ChangeLang from '@/pages/common/ChangeLang/ChangeLang';
import Burger from '@/pages/common/Burger/Burger';
import Search from '@/pages/common/Search/Search';
import List from './List/List';
import Container from '@/pages/common/Container/Container';
import { useRouter } from 'next/router';

const HeaderFixed = ({ openBurger, onBurger, onClose }) => {
  const { pathname } = useRouter();

  const burgerOpen = openBurger ? '0' : '-1000%';

  const classActiveTab = {
    borderBottom: '2px solid #3B009A',
    paddingBottom: '16px',
    color: '#3B009A',
  };
  return (
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        <ul className={styles.header__top}>
          <Link href="/" className={styles.header__image}>
            <Image
              src={'./img/logo/logo-l.svg'}
              alt="Емблема сайту"
              width={124}
              height={32}
              className={styles.header__logo}
            />
          </Link>
          <Search />
          <button className={styles.header__btn_see}>Для слабозорих</button>
          <ChangeLang />
          <Burger openBurger={openBurger} onBurger={onBurger} />
        </ul>
        <ul className={styles.header__menu}>
          <li>
            <Link
              style={pathname === '/atx_classification' ? classActiveTab : {}}
              href="/atx_classification"
            >
              ATХ класифікація
            </Link>
          </li>
          <li>
            <Link
              style={pathname === '/active_substances' ? classActiveTab : {}}
              href="/active_substances"
            >
              Активні речовини
            </Link>
          </li>
          <li>
            <Link
              style={pathname === '/alphabet' ? classActiveTab : {}}
              href="/alphabet"
            >
              Алфавітний покажчик
            </Link>
          </li>
          <li>
            <Link
              style={pathname === '/manufacturers' ? classActiveTab : {}}
              href="/manufacturers"
            >
              Виробники
            </Link>
          </li>
          <li>
            <Link
              style={pathname === '/news' ? classActiveTab : {}}
              href="/news"
            >
              Новини
            </Link>
          </li>
          <li>
            <Link
              style={pathname === '/about' ? classActiveTab : {}}
              href="/about"
            >
              Про нас
            </Link>
          </li>
          <li>
            <Link style={pathname === '/' ? classActiveTab : {}} href="/">
              Контакти
            </Link>
          </li>
        </ul>
      </nav>
    </header>
    // <header className={styles.header}>
    //   <Container>
    //     <nav>
    //       <div className={styles.header__top}>
    //         <div className={styles.top}>
    //           <Link href={'/'} onClick={() => onClose()}>
    //             <Image
    //               src={'./img/logo/logo-l.svg'}
    //               alt="Емблема сайту"
    //               width={124}
    //               height={32}
    //               className={styles.logo}
    //             />
    //           </Link>
    //           <div className={styles.search}>
    //             <Search />
    //           </div>
    //           <div className={styles.top__buttons}>
    //             <div className={styles.forLowSee}>
    //               <button>Для слабозорих</button>
    //             </div>
    //             <ChangeLang />
    //             <Burger openBurger={openBurger} onBurger={onBurger} />
    //           </div>
    //         </div>

    //         <div className={styles.header__bottom}>
    //           <div className={styles.searchBottom}>
    //             <Search />
    //           </div>
    //           <List
    //             openBurger={openBurger}
    //             onBurger={onBurger}
    //             onClose={onClose}
    //           />
    //         </div>
    //       </div>
    //       <div
    //         onClick={() => onClose()}
    //         style={{ top: burgerOpen }}
    //         className={styles.cover}
    //       ></div>
    //     </nav>
    //   </Container>
    // </header>
  );
};

export default HeaderFixed;
