import { useEffect, useState } from 'react';
import Link from 'next/link';

import Container from '@/src/common/Container/Container';
import Letter from '@/src/common/Letter/Letter';
import RadioButton from '@/src/common/RadioButton/RadioButton';
import { H1Title } from '@/src/common/Title/Title';
import manufacturers from '@/src/data/manufactures';

import styles from './Manufacture.module.scss';

const Manufacture = () => {
  const [currentLetter, setCurrentLetter] = useState('А');
  const [data, setData] = useState([]);
  const [dataLetter, setDataLetter] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const [currentTab, setCurrentTab] = useState('1');
  const [checked, setChecked] = useState({
    абв: true,
    abc: false,
  });

  useEffect(() => {
    const filtered = manufacturers[currentLetter.toLowerCase()];
    const firstTwoLetter = Array.from(
      new Set(
        manufacturers[currentLetter.toLowerCase()].map((item) =>
          item.slice(0, 2).toUpperCase()
        )
      )
    );
    setData(filtered);
    setDataLetter(firstTwoLetter);
    setCurrentData(filtered);
  }, [currentLetter, data]);

  const filter = Object.keys(checked)
    .filter((key) => checked[key])
    .toString();

  const handleCheck = (id) => {
    if (id === 'абв') {
      setChecked({ абв: true, abc: false, 123: false });
    } else if (id === 'abc') {
      setChecked({ абв: false, abc: true, 123: false });
    }
  };

  const tabs = [
    {
      id: 'абв',
      name: 'абв',
      value: 'АБВ',
      text: 'АБВ',
      content: [
        'А',
        'Б',
        'В',
        'Г',
        'Д',
        'Е',
        'Є',
        'Ж',
        'З',
        'И',
        'І',
        'Ї',
        'Й',
        'К',
        'Л',
        'М',
        'Н',
        'О',
        'П',
        'Р',
        'С',
        'Т',
        'У',
        'Ф',
        'Х',
        'Ц',
        'Ч',
        'Ш',
        'Щ',
        'Ю',
        'Я',
      ],
    },
    {
      id: 'abc',
      name: 'abc',
      value: 'ABC',
      text: 'ABC',
      content: [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z',
      ],
    },
  ];
  return (
    <Container>
      <div className={styles.manufacture}>
        <ul className={styles.manufacture__crumbreads}>
          <li>
            <Link href="/">Proliki</Link>
          </li>
        </ul>
        <div className={styles.manufacture__title}>
          <H1Title title="Производители" />
        </div>
        <div className={styles.content}>
          {tabs.map((item, i) => (
            <RadioButton
              key={i}
              {...item}
              checked={checked[item.id]}
              onChange={handleCheck}
            />
          ))}

          <div className={styles.links}>
            {tabs
              .filter((item) => item.id === filter)[0]
              .content.map((elem, i) => (
                <Letter
                  onClick={() => setCurrentLetter(elem)}
                  style={
                    currentLetter === elem
                      ? {
                          color: 'white',
                          background: '#4D5156',
                          cursor: 'not-allowed',
                        }
                      : {}
                  }
                  key={i}
                >
                  {elem}
                </Letter>
              ))}
          </div>
          <ul className={styles.content__links}>
            {dataLetter.map((item, i) => (
              <li key={i}>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <ul className={styles['manufacture__list']}>
          {data &&
            data.map((item, i) => (
              <li key={i}>
                <Link href={`/manufacturers/${item}`}>{item}</Link>
              </li>
            ))}
        </ul>
      </div>
    </Container>
  );
};

export default Manufacture;
