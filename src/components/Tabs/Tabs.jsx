import Letter from '@/src/common/Letter/Letter';
import RadioButton from '@/src/common/RadioButton/RadioButton';
import { useState } from 'react';

import styles from './Tabs.module.scss';

const Tabs = () => {
  const [currentTab, setCurrentTab] = useState('1');
  const [checked, setChecked] = useState({ абв: true, abc: false, 123: false });

  const filter = Object.keys(checked)
    .filter((key) => checked[key])
    .toString();

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
    setChecked({ абв: true, abc: false, 123: false });
  };

  const handleCheck = (id) => {
    if (id === 'абв') {
      setChecked({ абв: true, abc: false, 123: false });
    } else if (id === 'abc') {
      setChecked({ абв: false, abc: true, 123: false });
    } else if (id === '123') {
      setChecked({ абв: false, abc: false, 123: true });
    }
  };

  const tabs = [
    {
      id: 1,
      tabTitle: 'Препарати',
      checkSearch: [
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
        {
          id: '123',
          name: '123',
          value: '123',
          text: '123',
          content: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
        },
      ],
    },
    {
      id: 2,
      tabTitle: 'Виробники',
      checkSearch: [
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
        {
          id: '123',
          name: '123',
          value: '123',
          text: '123',
          content: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
        },
      ],
    },
    {
      id: 3,
      tabTitle: 'Активні речовини',
      checkSearch: [
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
      ],
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        {tabs.map((tab, i) => (
          <button
            key={i}
            id={tab.id}
            disabled={currentTab === `${tab.id}`}
            onClick={handleTabClick}
          >
            {tab.tabTitle}
          </button>
        ))}
      </div>
      <div className={styles.content}>
        {tabs.map((tab, i) => (
          <div key={i}>
            {currentTab === `${tab.id}` && (
              <div>
                <div className={styles.radiobuttons}>
                  {tab.checkSearch.map((item, i) => (
                    <RadioButton
                      key={i}
                      {...item}
                      checked={checked[item.id]}
                      onChange={handleCheck}
                    />
                  ))}
                </div>

                <div className={styles.links}>
                  {tab.checkSearch
                    .filter((item) => item.id === filter)[0]
                    .content.map((elem, i) => (
                      <Letter key={i}>{elem}</Letter>
                    ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
