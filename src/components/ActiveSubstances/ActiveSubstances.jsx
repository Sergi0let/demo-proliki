import Container from '@/src/common/Container/Container';
import Letter from '@/src/common/Letter/Letter';
import RadioButton from '@/src/common/RadioButton/RadioButton';
import Title, { TitleBig, TittleIntermidiate } from '@/src/common/Title/Title';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import active_substances from '../../data/active_substances';

import styles from './ActiveSubstances.module.scss';

const ActiveSubstances = () => {
  const [currentLetter, setCurrentLetter] = useState('А');
  const [substances, setSubstances] = useState([]); // active_substances
  console.log('currentLetter', currentLetter);
  console.log('substances', substances);
  const [currentTab, setCurrentTab] = useState('1');
  const [checked, setChecked] = useState({
    абв: true,
    abc: false,
  });

  useEffect(() => {
    const filtered = active_substances[currentLetter];
    setSubstances(filtered);
  }, [currentLetter, substances]);

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
        <ul className={styles['active-substances__crumbreads']}>
          <li>
            <Link href="/">Proliki</Link>
          </li>
        </ul>
        <div className={styles['active-substances__title']}>
          <TitleBig title="Алфавитный указатель препаратов" />
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
            <li>
              <span>АБ</span>
            </li>
            <li>
              <span>АВ</span>
            </li>
            <li>
              <span>АГ</span>
            </li>
            <li>
              <span>АД</span>
            </li>
            <li>
              <span>АЕ</span>
            </li>
            <li>
              <span>АЗ</span>
            </li>
            <li>
              <span>АИ</span>
            </li>
            <li>
              <span>АЙ</span>
            </li>
            <li>
              <span>АК</span>
            </li>
            <li>
              <span>АЛ</span>
            </li>
            <li>
              <span>АМ</span>
            </li>
            <li>
              <span>АН</span>
            </li>
            <li>
              <span>АП</span>
            </li>
            <li>
              <span>АР</span>
            </li>
            <li>
              <span>АС</span>
            </li>
            <li>
              <span>АТ</span>
            </li>
            <li>
              <span>АУ</span>
            </li>
            <li>
              <span>АФ</span>
            </li>
            <li>
              <span>АХ</span>
            </li>
            <li>
              <span>АЦ</span>
            </li>
            <li>
              <span>АЧ</span>
            </li>
            <li>
              <span>АШ</span>
            </li>
            <li>
              <span>АЄ</span>
            </li>
          </ul>
        </div>
        <ul className={styles['active-substances__list']}>
          {substances &&
            substances.map((item, i) => (
              <li key={i}>
                <a href="#">
                  {item.ua} <span>({item.eng})</span>
                </a>
              </li>
            ))}
        </ul>

        <Title title="Активные вещества" />
        <div className={styles['active-substances__block-text']}>
          <p>
            Правильное питание и физическая активность – залог здоровья,
            хорошего настроения, заряда бодрости и отличного внешнего вида.
            Сбалансированный рацион, даже если он составлен по всем правилам, в
            соответствии со всеми рекомендациями относительно соотношения
            белки/жиры/углеводы, не способен насытить организм необходимыми
            витаминами, минералами, микроэлементами. В связи с этим, многие, кто
            следит за здоровьем и старается поддерживать его на постоянно
            высоком уровне, предпочитает недорого и быстро купить бады в
            интернет аптеке.
          </p>
        </div>
        <TittleIntermidiate title="Назначение и виды активных веществ" />
        <div className={styles['active-substances__block-text']}>
          <p>
            Активные пищевые добавки бады – природные вещества (иногда
            идентичные таковым), употребляемые вместе с едой, вводимые в
            некоторые продукты в качестве дополнительного элемента в составе.
            Основная задача – стать еще одним источником пищевых, биологически
            активных элементов, которые налаживают работу обмена веществ. Помимо
            этого, их употребление способно нормализировать функционирование
            систем и органов. Не являются лекарственным средством, поэтому не
            помогают избавиться от недугов. Но это вовсе не означает, что
            биодобавки можно употреблять бесконтрольно, без предварительной
            беседы с врачом.
          </p>
          <p>
            На полках супермаркетов можно найти все, что угодно. Но обращая
            внимание на состав продуктов, можно заметить, что сбалансированность
            далека от идеала. Пищевые добавки значительно улучшили вкус, но
            снизили содержание витаминов, микроэлементов. Именно бад препараты
            призваны решить эту проблему, результативно справляясь с
            восполнением нехватки.
          </p>
        </div>
        <TittleIntermidiate title="Преимущества активных веществ" />
        <div className={styles['active-substances__block-text']}>
          <p>
            Санитарные нормы и правила четко определяют назначение такой группы,
            как натуральные бады. Они способны оптимизировать, привести в
            порядок протеиновый, липидный, углеводный и другие виды обмена
            веществ. Начинать прием рекомендовано при различных функциональных
            расстройствах. С учетом показаний, особенностей клинической картины,
            можно купить бады, которые значительно улучшать функциональность
            систем организма, положительно сказаться на общем его состоянии.
          </p>
          <p>К основным преимуществам употребления можно отнести:</p>
          <p className={styles['classification__block-text_list']}>
            <span></span>Повышение иммунитета;
          </p>
          <p className={styles['classification__block-text_list']}>
            <span>•</span>Восстановление микрофлоры кишечника;
          </p>
          <p className={styles['classification__block-text_list']}>
            <span>•</span>Ускорение процесса выздоровления;
          </p>
          <p className={styles['classification__block-text_list']}>
            <span>•</span>Снижение веса;
          </p>
        </div>
        <TittleIntermidiate title="Особенности применения" />
        <div className={styles['active-substances__block-text']}>
          <p>
            Несмотря на то, что добавки не являются лекарственными средствами,
            рекомендуется придерживаться определенных правил приема. Изначально,
            прежде чем отправится в аптеку и купить биодобавки необходимо
            проконсультироваться с квалифицированным специалистом. Прием
            начинается с небольших дозировок, для объективной оценки реакции на
            препарат и постепенно доводится до рекомендованной суточной нормы.
            Для лучшего усвоения, принимаются во время приема пищи, если иное не
            указано в инструкции.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default ActiveSubstances;
