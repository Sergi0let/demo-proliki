import Container from '@/src/common/Container/Container';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import DrugsControler from '../DrugsControler/DrugsControler';
import DrugsTagle from '../DrugsTable/DrugsTagle';
import styles from './DrugsList.module.scss';

const DrugsList = () => {
  return (
    <Container>
      <div className={styles.list}>
        <ul className={styles.list__crumbreads}>
          <li>
            <Link href="/">Proliki</Link>
          </li>
        </ul>
        <div className={styles.list__header}>
          <h1 className={styles.list__title}>
            Результаты поиска “Нифуроксазид”
          </h1>
          <p>14 препаратов, 1 активное вещество</p>
        </div>
        <DrugsControler />
        <DrugsTagle />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa facere
        dolorem delectus facilis aliquid ipsum minus officiis, nesciunt quam ut,
        esse impedit doloremque culpa excepturi cupiditate, error adipisci
        itaque laborum. Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Laborum inventore iste non consectetur laboriosam, atque, dolorum
        a nostrum ratione sint provident ullam voluptatum architecto odio?
        Assumenda veritatis est odio ea! Beatae, deserunt tempore temporibus
        laudantium aliquam nesciunt id sint rem maiores corrupti, at blanditiis
        excepturi, debitis tempora eius esse cumque ex sequi ea ad nulla illum
        quas? Et, amet asperiores. Ut rerum similique, esse adipisci, id
        voluptatum accusantium inventore doloribus unde sit ea ipsa quia hic
        optio nostrum est. Autem veniam exercitationem expedita blanditiis.
        Ipsam dicta soluta laborum et repudiandae. Velit repudiandae tenetur,
        animi nostrum nobis mollitia ad consequuntur voluptate a quas distinctio
        reiciendis voluptatum ea quibusdam nam repellendus dolore fugiat,
        explicabo, ut ab debitis iure voluptates iusto. Dolorum, quia.
        Accusantium corrupti eos facere atque. Reiciendis nihil, laboriosam ex
        modi voluptatibus neque expedita voluptates iste, esse error saepe
        consequuntur iusto quas? Itaque, mollitia! Veniam delectus assumenda
        nisi qui. Possimus, aut. Numquam saepe laborum at ad accusantium odio
        similique consequuntur aperiam nobis, sunt sint! Ipsam iusto aspernatur
        voluptatum? Placeat, iure quas quisquam labore consectetur repellendus
        alias quam ipsam sint perspiciatis qui! Doloribus placeat aliquid in
        accusamus error ducimus maiores voluptates sit velit, aspernatur animi
        nemo ad! Sit laboriosam incidunt, nesciunt, tenetur vel nam aliquid
        deserunt iusto illo cumque maiores animi excepturi? Consequatur officia,
        pariatur velit cum voluptatibus numquam quasi nesciunt commodi
        asperiores explicabo ad recusandae, tenetur enim libero cumque vel
        labore iure ex excepturi, aspernatur odio. Excepturi molestiae eius modi
        quo? Dicta hic corrupti quis dolore, provident perferendis ab esse
        similique accusamus ducimus quam autem numquam perspiciatis odio tempore
        quisquam quos iure! Dolore, provident incidunt voluptas alias repellat
        nisi tenetur? Quidem! Quia rem cumque explicabo suscipit earum,
        veritatis in asperiores! Quibusdam, repellat iure atque provident
        quaerat similique saepe soluta dolore a nobis, amet sunt impedit magni
        ad repudiandae. Id, eaque consequatur. Reprehenderit molestiae inventore
        non consequuntur magnam perspiciatis esse sunt, libero rem iure vero
        dolor. Fugit perferendis saepe quas dolorem? Deleniti quo vitae quasi id
        mollitia porro cupiditate ea eum exercitationem. Eos cum, quod
        praesentium recusandae soluta nisi rerum amet sapiente dolores? Aut
        laboriosam hic architecto velit excepturi rerum iste. Maxime ipsum
        assumenda quisquam amet corrupti architecto eius cupiditate, porro
        perspiciatis! Nemo asperiores minus dolor incidunt atque error
        reiciendis necessitatibus officia corporis pariatur voluptate, autem
        dicta iure repellendus et, perferendis aperiam voluptatibus? Nihil sunt
        culpa alias! Quia ut maxime facilis natus! Similique, ullam quasi? Illo
        perspiciatis asperiores odio quia minus dolore sapiente vel voluptatum
        vitae quos, ipsa molestias quidem blanditiis quam facere, earum adipisci
        atque enim itaque. Esse provident enim earum! Facilis, corrupti
        reiciendis sunt sequi harum similique earum rerum! Minus soluta omnis
        debitis voluptatibus dolorem, explicabo nulla assumenda quidem magnam
        qui aut minima ab sed rerum ea! Maiores, cum molestiae! Beatae ad
        explicabo dolor necessitatibus corporis, amet maiores, tenetur est
        molestias doloremque, in laborum aperiam ab eaque adipisci repellendus
        et provident tempora inventore perspiciatis incidunt rerum numquam. Sit,
        soluta optio! Placeat ab facere itaque molestiae porro. Quibusdam sequi
        rerum culpa nulla cumque, asperiores voluptatum, sunt amet minus saepe
        ipsa dolores temporibus similique dolorem ex corrupti cum. At nobis
        nihil id. Harum consequuntur cumque nostrum dignissimos quidem nesciunt
        doloremque aperiam corrupti rem. Aliquid atque omnis, tenetur facilis
        fugit dolore iste eos nulla fuga aperiam perferendis odit sed odio
        molestias asperiores error. Dolorum vel quia fuga rem quibusdam rerum.
        Tempora nesciunt modi consequuntur hic sequi at eum quaerat,
        exercitationem perferendis optio velit fugiat sunt autem, deserunt quasi
        reprehenderit. Perferendis aut eius itaque! Quia explicabo laborum
        voluptatem, eum quam iste dolores aut inventore placeat assumenda
        corporis maxime voluptas, omnis qui officiis aliquid quis. Doloremque
        sequi et labore molestiae reprehenderit quas quaerat debitis iste.
      </div>
    </Container>
  );
};

export default DrugsList;
