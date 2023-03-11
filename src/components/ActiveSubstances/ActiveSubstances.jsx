import Container from '@/src/common/Container/Container';
import Letter from '@/src/common/Letter/Letter';
import RadioButton from '@/src/common/RadioButton/RadioButton';
import { TitleBig } from '@/src/common/Title/Title';
import Link from 'next/link';
import { useState } from 'react';

import styles from './ActiveSubstances.module.scss';

const ActiveSubstances = () => {
  const [currentLetter, setCurrentLetter] = useState('А');
  console.log('currentLetter', currentLetter);
  const [currentTab, setCurrentTab] = useState('1');
  const [checked, setChecked] = useState({
    абв: true,
    abc: false,
  });

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
                      ? { color: 'white', background: '#4D5156' }
                      : {}
                  }
                  key={i}
                >
                  {elem}
                </Letter>
              ))}
          </div>
        </div>
      </div>
      <div>ActiveSubstances</div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia maxime id
      nemo error, eligendi voluptatibus! Placeat aspernatur molestias nemo neque
      delectus. Sunt incidunt voluptatibus quos nam accusamus neque esse nobis?
      Velit doloribus obcaecati recusandae, consectetur possimus quia sit,
      accusamus rem quas necessitatibus nobis minus impedit incidunt quod
      tenetur itaque libero maxime ad est porro. Modi laboriosam est laborum
      sunt odio! Ut laborum iusto sint? Neque laboriosam vero recusandae
      molestias quaerat quod facere sunt doloremque voluptatem dolores? Maiores
      placeat labore corporis illum amet dolore nihil dicta distinctio,
      assumenda autem vero ea. Suscipit molestias delectus ipsum beatae et,
      voluptatem temporibus sed labore, assumenda cumque quo odit veritatis
      mollitia quia tenetur, exercitationem dolorem. Nihil cum optio obcaecati,
      nemo est ea quam nesciunt amet! Cum animi blanditiis, non asperiores quae
      debitis consectetur quis repudiandae, ea rerum nemo, praesentium dolorum
      itaque ipsum dicta vel? Molestias exercitationem, dolor quam dicta
      officiis consequuntur aliquam iure perferendis ad. Placeat quisquam
      incidunt vitae culpa provident ut molestias, iusto, veniam nam
      perspiciatis deleniti laboriosam deserunt nemo tempora eaque iste. Harum
      quisquam reprehenderit quidem dignissimos ullam reiciendis ipsa natus
      voluptatem culpa? Recusandae mollitia atque fuga delectus cumque dicta at
      quod quisquam consectetur provident excepturi laboriosam, magnam nesciunt
      sunt perferendis voluptate ratione voluptates. Commodi facilis officiis
      laborum porro optio. Iure, iste commodi! Officiis suscipit veniam quod
      quos nulla rerum voluptatem beatae fugiat dolore obcaecati? Sunt porro
      quisquam, iure aspernatur enim nam ratione, magni praesentium voluptates
      facilis repudiandae aut, voluptatum excepturi autem temporibus. Suscipit
      laborum voluptates rem, debitis, consequuntur odit adipisci accusamus
      velit fugit ratione qui laudantium, officia nisi neque porro? Recusandae
      harum quas provident similique ullam nisi aut reprehenderit deserunt
      voluptatibus officiis! Mollitia voluptates animi quod laborum tenetur iste
      magni illum ipsam, aperiam saepe iusto atque suscipit est, sunt nesciunt,
      tempore officiis veritatis optio nobis voluptatum adipisci eligendi
      blanditiis. Perferendis, suscipit magnam? Assumenda commodi eveniet modi
      voluptate deserunt a officia non earum id, doloremque ipsum hic natus at
      est. Commodi dolorum consequuntur quae porro soluta. Praesentium fugiat
      aspernatur delectus, iste itaque quod? Nesciunt eum accusantium vel omnis
      voluptatum nemo reprehenderit harum. Quod ea enim expedita corrupti qui
      error, repellendus numquam omnis sapiente tempora perferendis consequuntur
      accusamus, quo cupiditate at nemo quis. Commodi! Atque magni eos
      exercitationem fuga voluptatem, accusamus provident minus, consequatur
      corporis ea possimus doloribus asperiores eligendi architecto, omnis
      voluptatibus accusantium? Deleniti quae libero consequuntur aspernatur
      dolorem, corporis accusamus sint quas! Cupiditate dolore quaerat
      assumenda? Reprehenderit corporis illo impedit recusandae modi dolores,
      itaque inventore nam, nulla alias ex. Aut, minima illo vel itaque iure
      eligendi quidem omnis, in corrupti, praesentium necessitatibus. Distinctio
      placeat vero quam ullam quod aut totam est harum voluptas modi eius illum
      magni ut fuga corporis error quo alias fugit obcaecati officiis, dolores
      neque. Error blanditiis placeat dolor? Suscipit ducimus qui amet culpa
      omnis provident impedit nemo enim quas rem nisi ipsa quasi aliquid ex
      pariatur reiciendis perferendis reprehenderit eligendi nobis, nostrum et
      in? Repellat quas sit voluptas! Odit atque cum iusto accusantium
      distinctio, ratione dolore optio exercitationem reiciendis nemo delectus
      dolorem facere, qui numquam autem. Aperiam ratione adipisci numquam
      repudiandae iste itaque rerum sunt, molestias quas quasi! Hic rerum
      praesentium voluptas sint, quod magni ea explicabo sit dolor ratione
      corporis saepe dolorum corrupti alias mollitia. Iure harum quia facere.
      Maxime ratione aut nisi ab dignissimos ut in? Quaerat ipsa atque
      voluptatem ex accusamus animi cum sapiente eum ea blanditiis dolores,
      magni in exercitationem eveniet at commodi tempora sequi vero eius
      laboriosam saepe. Tempore blanditiis quos corporis tempora. Dolor deserunt
      expedita soluta sequi quia vitae eum beatae quas nostrum. Consectetur sed
      vitae reprehenderit consequuntur, reiciendis ut voluptates officia ipsa
      alias expedita corrupti a mollitia aperiam nisi suscipit consequatur.
    </Container>
  );
};

export default ActiveSubstances;
