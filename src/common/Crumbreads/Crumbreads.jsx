import Link from 'next/link';
import React from 'react';

import styles from './Crumbreads.module.scss';

// const dot = (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="4"
//     height="4"
//     viewBox="0 0 4 4"
//     fill="none"
//   >
//     <rect width="4" height="4" rx="2" fill="#4D5156" />
//   </svg>
// );

const routeData = (route) =>
  route.route.split('/').filter((el) => el !== '[id]' && el !== '');

const normalizeNameCrumb = (name) => {
  if (name === 'manufacturers') {
    return 'Виробники';
  }
  if (name === 'drug') {
    return 'Препарат';
  }
  if (name === 'atx_classification') {
    return 'ATX классификация';
  }

  if (name === 'active_substances') {
    return 'Активні речовини';
  }
  return name;
};

export default function Crumbreads({ routePath }) {
  return (
    <ul className={styles['crumbreads']}>
      <li>
        <Link href="/">Proliki</Link>
      </li>

      {routePath &&
        routeData(routePath).map((el, i) => (
          <li key={i}>
            <Link href={`/${el}`}>{normalizeNameCrumb(el)}</Link>
          </li>
        ))}
    </ul>
  );
}
