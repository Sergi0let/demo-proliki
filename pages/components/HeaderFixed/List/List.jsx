import styles from './List.module.scss';
import { useState } from 'react';
import Burger from '../../Burger/Burger';
import ChangeLang from '../../ChangeLang/ChangeLang';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const List = ({ openBurger, onBurger, onClose }) => {
  const { pathname } = useRouter();

  const navigation = [
    { id: 0, title: 'ATХ класифікація', path: '/atx_classification' },
    { id: 1, title: 'Активні речовини', path: '/active_substances' },
    { id: 2, title: 'Алфавітний покажчик', path: '/alphabet' },
    { id: 3, title: ' Виробники', path: '/manufacturers' },
    { id: 4, title: 'Новини', path: '/news' },
    { id: 5, title: 'Про нас', path: '/about' },
    { id: 6, title: 'Контакти', path: '/' },
  ];

  const burgerOpen = openBurger ? '0' : '-1000%';

  const lowSee = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.67969 3L21.6797 19"
        stroke="#202227"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.0546 4.79046C14.2347 4.26835 14.8039 3.99106 15.326 4.17112C18.4478 5.24771 21.0835 7.65289 22.8918 10.8025C23.3668 11.6299 23.4799 12.6015 23.2316 13.4975C23.084 14.0297 22.5329 14.3416 22.0007 14.194C21.4685 14.0465 21.1567 13.4954 21.3042 12.9632C21.4117 12.5757 21.3626 12.1559 21.1573 11.7984C19.5394 8.98037 17.2514 6.95069 14.674 6.06185C14.1519 5.88179 13.8746 5.31257 14.0546 4.79046ZM8.7503 4.94125C8.95814 5.45293 8.71183 6.03622 8.20014 6.24406C5.82167 7.21018 3.71737 9.15939 2.2022 11.7984C1.9326 12.268 1.9326 12.845 2.2022 13.3146C4.42466 17.1855 7.89339 19.5565 11.6798 19.5565C14.367 19.5565 16.8801 18.369 18.9146 16.2991C19.3017 15.9052 19.9349 15.8998 20.3288 16.2869C20.7226 16.674 20.7281 17.3072 20.341 17.7011C17.9956 20.0872 14.9897 21.5565 11.6798 21.5565C6.99415 21.5565 2.94527 18.6256 0.467746 14.3104C-0.155911 13.2242 -0.155916 11.8889 0.467735 10.8026C2.16221 7.85128 4.58162 5.55518 7.44748 4.39109C7.95917 4.18325 8.54246 4.42956 8.7503 4.94125Z"
        fill="#202227"
      />
      <path
        d="M14.5892 11.8251C14.748 12.457 14.6968 13.1233 14.4434 13.7235C14.1899 14.3236 13.748 14.825 13.1844 15.1517C12.6208 15.4785 11.9662 15.6129 11.3194 15.5347C10.6726 15.4564 10.0689 15.1698 9.59949 14.7181C9.13007 14.2663 8.82045 13.6741 8.71743 13.0308C8.61441 12.3875 8.7236 11.7282 9.02848 11.1524C9.33337 10.5767 9.81738 10.1159 10.4074 9.83956C10.9973 9.56327 11.6612 9.48653 12.2987 9.62095"
        stroke="#202227"
        strokeWidth="2"
      />
    </svg>
  );

  return (
    <ul className={styles.list} style={{ top: burgerOpen }}>
      <div className={styles.topList}>
        <Image
          onClick={() => onClose()}
          src={'./img/logo/logo-l.svg'}
          alt="Емблема сайту"
          width={124}
          height={32}
        />
        <div>
          <ChangeLang />
          <Burger onBurger={onBurger} openBurger={openBurger} />
        </div>
      </div>
      {navigation.map((item) => (
        <li
          key={item.id}
          className={pathname === item.path ? styles.active : null}
        >
          <Link href={item.path} alt={item.title} onClick={() => onClose()}>
            {item.title}
          </Link>
        </li>
      ))}
      <li className={styles.see}>
        <Link href="/" alt="Группы">
          <span>{lowSee}</span>
          <span>Версія для слабозорих</span>
        </Link>
      </li>
    </ul>
  );
};

export default List;
