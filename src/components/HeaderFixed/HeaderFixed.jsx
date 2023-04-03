import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import ChangeLang from '@/src/common/ChangeLang/ChangeLang';
import Burger from '@/src/common/Burger/Burger';
import styles from '@/src/components/HeaderFixed/HeaderFixed.module.scss';

import logo from '../../../public/img/logo/logo-l.svg';

const volumeIcon = (
  <svg
    width="14"
    height="20"
    viewBox="0 0 14 20"
    fill="#0058E9"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M7.06809 13.3303H6.94126C4.75527 13.3303 2.97656 11.6464 2.97656 9.57686V3.81351C2.97634 1.71102 4.78365 0 7.00447 0C9.22552 0 11.0326 1.71102 11.0326 3.81351V9.57686C11.0328 11.6464 9.25402 13.3303 7.06809 13.3303ZM7.00445 1.90717C5.89427 1.90717 4.99116 2.76216 4.99116 3.81319V9.57654C4.99116 10.5946 5.86589 11.4225 6.94101 11.4225H7.06783C8.14319 11.4225 9.01769 10.5944 9.01769 9.57654V3.81319C9.01791 2.76216 8.11486 1.90717 7.00445 1.90717Z" />
    <path d="M12.0723 19.0464C12.0723 19.571 11.619 20.0001 11.0649 20.0001H2.94506C2.39098 20.0001 1.93764 19.571 1.93764 19.0464C1.93764 18.5218 2.39098 18.0926 2.94506 18.0926H5.99767V16.1947C2.99566 15.7847 0.517342 13.5338 0.0135725 10.6439C-0.0770495 10.1194 0.295559 9.63292 0.849619 9.54714C1.39358 9.46134 1.91755 9.82368 2.00816 10.3386C2.39088 12.6372 4.54698 14.3636 7.00503 14.3636C9.45295 14.3636 11.5989 12.6372 12.0019 10.3386C12.0824 9.82366 12.6064 9.46108 13.1503 9.55646C13.7044 9.64225 14.0773 10.1287 13.9864 10.6437C13.4826 13.5334 11.0043 15.7843 8.01263 16.1945V18.0924H11.065C11.6191 18.0926 12.0724 18.5218 12.0724 19.0463L12.0723 19.0464Z" />
  </svg>
);

const searchIcon = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.33203 13.3334C10.6457 13.3334 13.332 10.6471 13.332 7.33337C13.332 4.01967 10.6457 1.33337 7.33203 1.33337C4.01832 1.33337 1.33203 4.01967 1.33203 7.33337C1.33203 10.6471 4.01832 13.3334 7.33203 13.3334Z"
      stroke="#9F9F9F"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.6667 14.6667L12 12"
      stroke="#9F9F9F"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const HeaderFixed = ({ openBurger, onBurger }) => {
  const { pathname, route } = useRouter();
  const [search, setSearch] = useState('');
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [scroll, setScroll] = useState(false);

  // console.log('header: isSmallScreen', isSmallScreen, 'scroll', scroll);

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth < 768);
    }

    function handleScroll() {
      if (openBurger) {
        return;
      }
      setScroll(window.scrollY > 0);
    }

    window.addEventListener('resize', handleResize);

    if (isSmallScreen) {
      window.addEventListener('scroll', handleScroll);
    }

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);

      if (isSmallScreen) {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isSmallScreen, openBurger]);

  const classActiveTab = {
    borderBottom: '2px solid #3B009A',
    paddingBottom: '16px',
    color: '#3B009A',
  };

  const styleFixedHeader = `${styles.header__nav} ${
    route === '/about' ? styles.noFixed : ''
  }`;

  return (
    <header style={scroll ? { height: '63px' } : {}} className={styles.header}>
      <nav className={styleFixedHeader}>
        <ul
          style={scroll ? { gridTemplateRows: '40px' } : {}}
          className={styles.header__top}
        >
          <Link
            href="/"
            className={styles.header__image}
            style={scroll ? { display: 'none' } : {}}
          >
            <Image
              src={logo}
              alt="Емблема сайту"
              width={124}
              height={32}
              className={styles.header__logo}
            />
          </Link>
          <form
            style={
              !openBurger && scroll
                ? {
                    position: 'fixed',
                    top: '6px',
                    left: '0%',
                    right: '0%',
                    paddingTop: '4px',
                    margin: '0 auto',
                    paddingLeft: '15px',
                    paddingRight: '15px',
                    zIndex: '101',
                  }
                : {}
            }
            type="sumbit"
            className={styles.search}
          >
            <input
              className={styles.search__input}
              type="text"
              placeholder="Шукати ліки"
            />
            <span
              style={scroll ? { left: '30px' } : {}}
              className={styles.search__placeholder}
            >
              {searchIcon}
            </span>
            <button
              style={scroll ? { right: '15px' } : {}}
              className={styles.search__btn}
            >
              {volumeIcon}
            </button>
          </form>
          <button className={styles.header__btn_see}>
            <span>Для слабозорих</span>
          </button>
          <ChangeLang />
          <Burger openBurger={openBurger} onBurger={onBurger} />
        </ul>
        <ul className={styles.header__menu}>
          <li>
            <Link
              className={
                pathname === '/atx_classification' ? styles['active-tab'] : null
              }
              href="/atx_classification"
            >
              ATХ класифікація
            </Link>
          </li>
          <li>
            <Link
              className={
                pathname === '/active_substances' ? styles['active-tab'] : null
              }
              href="/active_substances"
            >
              Активні речовини
            </Link>
          </li>
          <li>
            <Link
              className={pathname === '/alphabet' ? styles['active-tab'] : null}
              href="/alphabet"
            >
              Алфавітний покажчик
            </Link>
          </li>
          <li>
            <Link
              className={
                pathname === '/manufacturers' ? styles['active-tab'] : null
              }
              href="/manufacturers"
            >
              Виробники
            </Link>
          </li>
          <li>
            <Link
              className={pathname === '/news' ? styles['active-tab'] : null}
              href="/news"
            >
              Новини
            </Link>
          </li>
          <li>
            <Link
              className={pathname === '/about' ? styles['active-tab'] : null}
              href="/about"
            >
              Про нас
            </Link>
          </li>
          <li>
            <Link
              className={pathname === '/contacts' ? styles['active-tab'] : null}
              href="/contacts"
            >
              Контакти
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderFixed;
