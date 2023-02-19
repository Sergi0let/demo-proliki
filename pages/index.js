import { useState } from 'react';

import Head from 'next/head';
import styles from '@/styles/Home.module.scss';

import Footer from './components/Footer/Footer';
import Banner from './components/Banner/Banner';
import FarmGroups from './components/farmGroups/FarmGroups';
import HeaderFixed from './components/HeaderFixed/HeaderFixed';

export default function Home() {
  const [openBurger, setOpenBurger] = useState(false);

  const handleBurger = () => {
    setOpenBurger(!openBurger);
  };

  const handleCloseBurger = () => {
    setOpenBurger(false);
  };

  return (
    <>
      <Head>
        <title>Proliki Next</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <HeaderFixed
          openBurger={openBurger}
          onBurger={handleBurger}
          onClose={handleCloseBurger}
        />
        <Banner />
        <FarmGroups />

        <div>
          voluptatem numquam et earum qui doloribus magni perferendis voluptas.
          Suscipit inventore beatae explicabo dicta ab reiciendis sequi eaque
          placeat deserunt totam doloremque molestias tempore nihil porro vero
          corrupti quidem optio libero, aliquam velit incidunt illo doloribus
          adipisci. Recusandae, natus! Ex necessitatibus corrupti, magni
          consequatur doloribus, quibusdam esse eius vero, neque odio sint optio
          beatae est eligendi eaque vel in accusamus architecto? Suscipit
          assumenda dolor deleniti porro repellendus tempore distinctio. Magnam
          nesciunt placeat. Enim, voluptatibus earum obcaecati ad itaque
          possimus impedit omnis voluptates ipsa doloremque excepturi quod
          officiis, molestiae iure quaerat veniam recusandae amet suscipit animi
          exercitationem est vitae veritatis fugit ab! Amet! Voluptatibus vitae
          rem iusto vero harum itaque nobis illo sunt officia ipsum ullam
          ratione error debitis, eius doloremque amet voluptatum sit perferendis
          quam quasi adipisci dolores saepe. Numquam, iure obcaecati. Voluptatum
          ducimus tempora dolor eos. Iste corrupti sint sequi harum ut, error at
          dolorum. Libero, voluptatibus beatae! Recusandae ex cumque saepe
          quisquam fugit maxime accusantium aspernatur repellat. Laudantium, nam
          similique! Sed odio qui dignissimos. Veritatis, ratione nostrum
          officiis, qui atque, illo quaerat vero ab inventore laborum aperiam
          corporis non sed? Porro quae provident cumque voluptatibus quis et
          ratione illum quia. Ducimus nemo laborum quaerat animi libero corporis
          doloremque neque facilis. Maxime aliquam, blanditiis architecto libero
          tenetur officia natus praesentium quo minima cumque nostrum? Ad
          dolores architecto est voluptate cupiditate maiores! Vero rerum
          delectus, error nisi praesentium atque illo itaque excepturi quibusdam
          dolorum nostrum odio officiis, vel, commodi sapiente ducimus maxime
          porro consequuntur distinctio cupiditate maiores veritatis quis.
          Excepturi, quae repellendus? Iste tempora possimus, assumenda eum
          facilis rerum delectus quia nesciunt ea aliquid quam rem, cumque in,
          impedit eveniet numquam non debitis. Quam saepe explicabo, laboriosam
          ullam reiciendis maxime incidunt sequi! Repudiandae minus repellendus
          similique, magni neque veniam repellat cum unde soluta quidem? Eaque
          temporibus, assumenda ea repellat reiciendis distinctio nesciunt
          aperiam, eos fugiat, rerum labore? Pariatur sed laudantium dicta
          doloribus. Officia quibusdam modi in accusantium quaerat neque, iusto
          dolore quas hic eligendi magnam illo tempora error eius totam? Dolores
          enim voluptatem minus quasi necessitatibus ea nemo mollitia distinctio
          consequatur ad. Minima quisquam necessitatibus repudiandae molestias
          libero labore fuga neque ut, excepturi culpa voluptates architecto
          mollitia pariatur recusandae rerum. Ex magni officia voluptatum odio
          molestias ratione libero cum sint sunt sed? Inventore odit ipsa eos
          nisi nobis, placeat dolorem unde dolorum qui! Consequatur itaque,
          aliquam tempore reprehenderit ea dolorum, dicta obcaecati labore error
          eius iusto laudantium deserunt magni tenetur mollitia adipisci!
          Dolores quam repudiandae vel delectus iure, dolorem reiciendis animi
          sequi odio cum optio, maiores exercitationem vero iusto quaerat
          explicabo inventore nam alias? Ipsum odit dolorum sapiente, blanditiis
          ut laboriosam suscipit! Aliquam eligendi, eum suscipit nobis
          perferendis dolorum optio reprehenderit libero explicabo, quod
          architecto iusto delectus excepturi ut cumque id voluptate. Quas
          nostrum minus culpa reiciendis earum quia quam vitae quidem? Dolore,
          itaque recusandae, esse incidunt unde, quia sit fugiat beatae maiores
          in inventore! Ratione nemo eius, aperiam ad quo distinctio facere
          officia commodi officiis. Dolore totam ipsam cupiditate quaerat
          consequuntur. Eius minima mollitia omnis porro. Unde illo voluptas
          laborum ratione deserunt, quidem cupiditate fugiat libero quae magnam
          maiores tenetur sunt recusandae, nam sapiente sint doloremque
          perspiciatis reiciendis necessitatibus, nobis consequuntur. Earum et
          est, ex sed eos fugit ullam a vel ipsam iste non eius nemo iusto rerum
          facere maxime, quae omnis sapiente exercitationem ratione libero
          voluptatem recusandae minima quod expedita blanditiis voluptatibus
          porro aperiam cumque? Reprehenderit, rem fuga quibusdam saepe officiis
          perspiciatis temporibus! Saepe alias commodi, sit eos quo minima rerum
          voluptate praesentium ea ullam voluptatibus ipsa, nobis ducimus itaque
          veniam suscipit aliquam voluptatum repellat ut iure. Nisi quibusdam
          alias atque modi necessitatibus. Accusantium quod debitis rem. Ratione
          aspernatur, illo, iusto aperiam at quisquam nisi voluptatum nulla,
          officia exercitationem veniam magnam. Rem veniam sit saepe nobis iusto
          tempora labore molestias nisi accusantium vel! Libero ut eius
          inventore tempore repellat molestiae quia odio harum? Eligendi unde
          rem inventore dolorem, magni similique alias itaque, ipsum asperiores
          minus cumque saepe explicabo quae deserunt fugiat velit voluptas!
          Repudiandae voluptates delectus aliquid quas ducimus tempore, mollitia
          rerum fuga ullam soluta! Eius dolorum in delectus a ex! Non
          voluptatibus velit, sed debitis fuga perferendis quia accusantium
          optio quibusdam a? Earum doloribus adipisci, nam perspiciatis pariatur
          distinctio minima quibusdam animi corporis dolorem, excepturi laborum
          officia sint! Voluptates, adipisci illo. Explicabo neque quod sed
          ipsum perferendis recusandae doloribus voluptate autem numquam!
          Aliquam nam incidunt ad. Harum, nemo ab sequi ut delectus rerum
          eveniet illum. Quis necessitatibus perspiciatis assumenda delectus,
          quam nihil quibusdam et quo facilis, corporis, doloremque tempora
          maxime velit beatae? Officiis placeat cupiditate perferendis nostrum
          vitae sapiente eos, repudiandae fugiat porro quibusdam quas quam
          debitis minus harum quod quis? Suscipit, incidunt? Nobis iste repellat
        </div>
        <Footer />
      </main>
    </>
  );
}