import Container from '@/src/common/Container/Container';
import Letter from '@/src/common/Letter/Letter';
import RadioButton from '@/src/common/RadioButton/RadioButton';
import { TitleBig } from '@/src/common/Title/Title';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './Manufacture.module.scss';
import manufacturers from '@/src/data/manufactures';

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

  // const handleTabClick = (e) => {
  //   setCurrentTab(e.target.id);
  //   setChecked({ абв: true, abc: false, 123: false });
  // };

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
          <TitleBig title="Производители" />
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
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam neque
      tenetur modi iste perspiciatis, impedit hic possimus nam excepturi unde
      officia culpa at voluptates ad fuga ullam nulla incidunt sapiente. Ipsam
      maiores modi nam a mollitia iste neque fugit! Laudantium esse aperiam rem,
      eum veritatis officia a optio ea iste expedita atque maxime ullam est,
      fugiat modi consectetur accusantium unde. Eligendi quae distinctio,
      expedita quo voluptatem similique harum vero architecto animi impedit
      commodi molestias consequuntur, soluta molestiae in, blanditiis doloribus
      reprehenderit beatae! Debitis perferendis et sed, repellat eligendi
      eveniet? Molestiae! Nesciunt impedit, repellat rerum similique quo labore
      quasi iure omnis inventore repudiandae expedita suscipit dolores eveniet
      autem porro cumque nobis. Eos dolorum blanditiis commodi odio ab laborum,
      ipsa fuga voluptatem. Nulla doloremque sint asperiores illum iure eveniet
      quod nesciunt minus mollitia voluptatem laudantium voluptatibus
      praesentium quia aperiam libero exercitationem sed, illo consequatur unde
      facilis harum ut explicabo dolorum ex. Fugit! At aut qui voluptate.
      Repellat laboriosam id excepturi delectus pariatur illo, voluptates alias
      possimus a minus architecto? Corporis culpa veniam modi, ducimus voluptas
      iure a fuga doloribus fugiat recusandae assumenda! Consequatur, quo
      aliquam doloremque quisquam officia asperiores cum eius similique
      blanditiis est saepe autem, iure magnam dolores adipisci sunt ratione, ex
      molestias quos sapiente sint voluptas nulla! Autem, suscipit debitis. Cum
      deserunt libero temporibus consectetur nemo aspernatur, esse modi voluptas
      iure id dolorum consequatur? Rerum, deleniti. Voluptatibus harum
      laboriosam iusto, quos ex maxime modi consequuntur quam exercitationem
      earum, error quidem. Assumenda exercitationem accusantium voluptas soluta
      error commodi doloremque explicabo numquam atque repellat aut distinctio
      labore quasi aliquam doloribus unde recusandae quidem sequi sed possimus,
      quam ipsa hic! Recusandae, rem alias! Excepturi ullam, cupiditate, at
      sapiente ipsa ab necessitatibus labore quisquam nemo hic eum tempora velit
      perferendis minima, nostrum asperiores illum atque accusamus totam in.
      Natus cumque pariatur eligendi commodi veniam! Molestias ratione velit
      voluptates eligendi. Perferendis non repudiandae reiciendis nisi debitis
      corrupti nam distinctio molestiae ea, in cupiditate blanditiis, ipsam sit
      totam aperiam! Praesentium quod, vero dolore accusantium impedit
      obcaecati. Nisi illum quisquam perferendis, tempore consequuntur qui eos!
      Doloribus laborum fugiat, iusto aperiam animi vero magnam rerum
      accusantium vel nihil repellendus magni ullam aut, consequatur pariatur!
      Quisquam minus facilis enim. Accusamus beatae velit fugiat quae voluptatum
      ipsam harum voluptas ad incidunt pariatur quibusdam aliquam placeat
      laborum sed, vel quo a, natus quam. Totam architecto, nemo repudiandae
      quasi vel ipsa dolorem. Iusto unde libero sapiente ut autem voluptate
      deserunt, cumque quisquam adipisci, praesentium blanditiis, ea dolore
      facere reiciendis harum illum voluptatum? Beatae officia impedit molestiae
      aperiam, placeat magni ratione voluptas magnam! Quidem, a harum
      consequatur tempore officia pariatur porro similique ipsa! Debitis dicta,
      voluptate adipisci deleniti possimus dignissimos ex quisquam id nihil
      laborum necessitatibus hic velit placeat reiciendis aperiam explicabo
      quod. Eveniet ratione non, et numquam minima doloremque omnis fugit sint
      animi aliquam optio voluptatum temporibus vitae inventore. Voluptate, ipsa
      dignissimos ipsum blanditiis labore suscipit adipisci nobis, maxime,
      deserunt facere ullam? Dicta maxime illo numquam accusamus earum quis odio
      labore. Qui eaque consequatur rerum. Mollitia laboriosam placeat,
      molestiae labore atque iste quod molestias veniam doloremque sit sed
      temporibus omnis optio quas! Nemo corporis commodi quo odit. Maiores
      excepturi quod hic ex eos blanditiis quaerat? Impedit labore voluptate
      hic. Hic voluptas quia asperiores rem perspiciatis expedita repudiandae
      illum at maxime aliquam. Unde! Expedita repellat consectetur recusandae
      esse qui dolorem possimus temporibus maiores reiciendis distinctio eos
      sapiente nulla provident, cupiditate minima vero tempora dicta
      praesentium, sunt atque fuga harum aliquam iste! Amet, iusto? Dolor,
      deserunt excepturi eius vitae sequi obcaecati. Cumque maxime reiciendis,
      rem dolorem enim id nam magnam aut hic doloremque consequuntur
      repudiandae, corporis alias quia ut quod, suscipit eum similique? Qui.
    </Container>
  );
};

export default Manufacture;
