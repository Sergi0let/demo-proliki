import { useState } from 'react';

import { accordionData } from '@/public/utils/accordeon';
import Title, { TitleSmall } from '@/src/common/Title/Title';

import styles from './CategorySection.module.scss';

const minus = (
  <svg
    width="14"
    height="2"
    viewBox="0 0 14 2"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 1L13 1"
      stroke="#0058E9"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const plus = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 2.00012V14.0001"
      stroke="#0058E9"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 8.00012L14 8.00012"
      stroke="#0058E9"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles['accordion-item']}>
      <div
        className={styles['accordion-item__title']}
        onClick={() => setIsActive(!isActive)}
      >
        <TitleSmall title={title} />
        <button>{isActive ? minus : plus}</button>
      </div>
      {isActive && (
        <ul className={styles['accordion-item__list']}>
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const AccordionDesctop = ({ title, content }) => {
  return (
    <div className={styles['accordion-item']}>
      <div className={styles['accordion-item__title']}>
        <TitleSmall title={title} />
      </div>
      {
        <ul className={styles['accordion-item__list']}>
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      }
    </div>
  );
};

const CategorySection = () => {
  return (
    <section className={styles.accordion}>
      <Title title="Популярные препараты по каттегориям" />
      <div className={styles.accordion__mobile}>
        {accordionData.map(({ title, content }, index) => (
          <Accordion key={index} title={title} content={content} />
        ))}
      </div>
      <div className={styles.accordion__desktop}>
        {accordionData.map(({ title, content }, index) => (
          <AccordionDesctop key={index} title={title} content={content} />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
