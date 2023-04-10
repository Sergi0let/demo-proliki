import Container from '@/src/common/Container/Container';
import Crumbreads from '@/src/common/Crumbreads/Crumbreads';
import Letter from '@/src/common/Letter/Letter';
import RadioButton from '@/src/common/RadioButton/RadioButton';
import { H1Title, H2Title, H3Title } from '@/src/common/Title/Title';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import active_substances from '../../data/active_substances';

import styles from './ActiveSubstances.module.scss';

const ActiveSubstances = () => {
  const [currentLetter, setCurrentLetter] = useState('А');

  const [substances, setSubstances] = useState([]);
  const [dataLetter, setDataLetter] = useState([]);

  // const [currentTab, setCurrentTab] = useState('1');
  const [checked, setChecked] = useState({
    абв: true,
    abc: false,
  });

  useEffect(() => {
    const filtered = active_substances[currentLetter];
    if (!filtered) return;
    const firstTwoLetter = Array.from(
      new Set(filtered.map((item) => item.ua.slice(0, 2).toUpperCase()))
    );

    const sortLetter = firstTwoLetter.slice().sort((a, b) => {
      const secondLetterA = a.charAt(1);
      const secondLetterB = b.charAt(1);
      if (secondLetterA < secondLetterB) {
        return -1;
      }
      if (secondLetterA > secondLetterB) {
        return 1;
      }
      return 0;
    });

    setDataLetter(sortLetter);
    setSubstances(filtered);
  }, [currentLetter, substances]);

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
      <div className={styles['active-substances']}>
        <Crumbreads />
        <div className={styles['active-substances__title']}>
          <H1Title
            varibleSub={currentLetter}
            title="Активные вещества на букву"
          />
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

        <ul className={styles['active-substances__list']}>
          {substances &&
            substances.map((item, i) => (
              <li key={i}>
                <Link href={`/active_substances/${item.eng}`}>
                  {item.ua} <span>({item.eng})</span>
                </Link>
              </li>
            ))}
        </ul>

        <H2Title title="Що таке активні речовини?" />
        <div className={styles['active-substances__block-text']}>
          <p>
            Активні речовини - це речовини, які мають фармакологічну активність,
            тобто здатні взаємодіяти з організмом людини та викликати певну
            фармакологічну відповідь. Вони є ключовими компонентами лікарських
            засобів, які використовуються для лікування різних хвороб.
          </p>
          <p>
            Активні речовини можуть бути використані для профілактики,
            діагностики та лікування хвороб. При цьому, вони можуть бути введені
            в організм різними шляхами, такими як оральний, ін&rsquo;єкційний,
            трансдермальний та інші.
          </p>
          <p>
            Оскільки активні речовини мають певну фармакологічну активність,
            важливо дотримуватися дозування та режиму прийому лікарських
            засобів, які містять ці речовини. Неправильне використання може
            призвести до негативних наслідків, таких як побічні ефекти,
            алергічні реакції та інші. Тому перед застосуванням лікарських
            засобів важливо консультуватися з лікарем та дотримуватися його
            рекомендацій.
          </p>
        </div>

        <H3Title title="Переваги активних речовин" />
        <div className={styles['active-substances__block-text']}>
          <p>
            Активні речовини мають декілька переваг, які роблять їх корисними
            для лікування різних хвороб:
          </p>

          <p className={styles['classification__block-text_list']}>
            <span>•</span>Ефективність: Активні речовини взаємодіють з
            організмом людини та сприяють відновленню його функцій. Вони можуть
            впливати на різні біологічні процеси в організмі та допомагати у
            лікуванні різних хвороб.
          </p>
          <p className={styles['classification__block-text_list']}>
            <span>•</span>Специфічність: Багато активних речовин мають
            специфічну дію на певні біологічні процеси в організмі. Це дозволяє
            досягати високої ефективності лікування при мінімальній кількості
            побічних ефектів.
          </p>
          <p className={styles['classification__block-text_list']}>
            <span>•</span>Розширення можливостей лікування: Активні речовини
            можуть бути використані для лікування широкого спектру захворювань.
            Це означає, що вони можуть допомогти в лікуванні різних захворювань,
            таких як серцево-судинні захворювання, інфекції, онкологічні
            захворювання, неврологічні та психіатричні захворювання та інші.
          </p>
          <p className={styles['classification__block-text_list']}>
            <span>•</span>Дозування: Завдяки тому, що активні речовини мають
            чітко визначену концентрацію, дозування лікарських засобів може бути
            точнішим. Це забезпечує більш точну дозування та дозволяє зменшити
            кількість побічних ефектів.
          </p>
          <p className={styles['classification__block-text_list']}>
            <span>•</span>Постійний контроль: Після введення активних речовин в
            організм, їх дія може бути постійно контрольована, що дозволяє
            докладно слідкувати за результатами лікування та змінювати дозування
            відповідно до потреб пацієнта.
          </p>
        </div>
        <H3Title title="Побічні ефекти від активних речовин" />
        <div className={styles['active-substances__block-text']}>
          <p>
            Однак важливо зазначити, що активні речовини можуть мати й побічні
            ефекти, такі як алергічні реакції, токсичність та інші. Також, деякі
            активні речовини можуть спричинювати взаємодію з іншими лікарськими
            засобами або продуктами харчування, що може змінювати їх
            ефективність.
          </p>
          <p>
            Для того, щоб максимально використовувати переваги активних речовин
            та зменшити ризики побічних ефектів, важливо дотримуватися
            рекомендацій лікаря та не перевищувати рекомендовану дозування.
            Також важливо зважати на індивідуальні особливості кожного пацієнта,
            такі як стан здоров&rsquo;я, вік, вага та інші, при виборі
            лікарського засобу з активною речовиною.
          </p>
          <p>
            Загалом, активні речовини є важливим інструментом у лікуванні різних
            хвороб та дозволяють досягати високої ефективності лікування. Проте,
            їх використання повинно здійснюватися з обережністю та дотриманням
            рекомендацій фахівців з медицини.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default ActiveSubstances;
