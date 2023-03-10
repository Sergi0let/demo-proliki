import Image from 'next/image';
import Link from 'next/link';

import Container from '@/src/common/Container/Container';

import styles from './DrugBlock.module.scss';
import green from '/public/img/icons/green.svg';
import yellow from '/public/img/icons/yellow.svg';
import red from '/public/img/icons/red.svg';
import { TitleMedium } from '@/src/common/Title/Title';
import BtnMore from '@/src/common/BtnMore/BtnMore';

const DrugBlock = () => {
  const item = {
    id: 1,
    name: 'Ібупрофен',
    image: {
      small: 'analogs/ibuprofen-320.jpg',
      medium: 'ibuprofen-768.jpg',
      large: 'ibuprofen-992.jpg',
    },
    link: null,

    analogs: ['Ніфуроксазід'],

    characteristics: {
      id: 1,
      producer: 'ПАО НПЦ "Борщаговский ХФЗ"',
      character: 'таблетки, вкриті плівковою оболонкою',
      registration: 'UA/3304/01/01 №84 от 14.01.2023',
      atx: {
        numbers: 'M01A E01',
        name: 'Ибупрофен',
      },
      substance: {
        en: 'Ibuprofen',
        ua: 'Ібупрофен',
      },
      release: 'Без рецепта',
      dosage: '200 мг',
      quantity: '50 шт ',
    },
  };

  const assentData = [
    {
      id: 1,
      title: 'Діабетики',
      text: 'дозволено',
    },
    {
      id: 2,
      title: 'Діти',
      text: 'p 6-ти років',
    },
    {
      id: 3,
      title: 'Boдії',
      text: 'дозволено',
    },
    {
      id: 4,
      title: 'Годуючі мами',
      text: 'заборонено',
    },
    {
      id: 5,
      title: 'Дорослі',
      text: 'дозволено',
    },
    {
      id: 6,
      title: 'Алергики',
      text: 'з обережністю',
    },
    {
      id: 7,
      title: 'Вагітні',
      text: 'заборонено',
    },
  ];

  // const showAssent = () => {
  //   return assentData.map((item) => (
  //     <li key={item.id}>
  //       <h5>{item.title}</h5>
  //       <span>
  //         {item.text === 'заборонено' ? (
  //           <Image src={red} alt="red" />
  //         ) : item.text === 'дозволено' ? (
  //           <Image src={green} alt="green" />
  //         ) : (
  //           <Image src={yellow} alt="yellow" />
  //         )}
  //         <p>{item.text}</p>
  //       </span>
  //     </li>
  //   ));
  // };

  // const showAnalogs = () => {
  //   return allDrug.map((drug) => drug.name === item.name).length;
  // };

  // if (!data || !allDrug) {
  //   return <div>H</div>;
  // }
  return (
    <Container>
      <article className={styles.item}>
        <ul className={styles.item__crumbreads}>
          <li>
            <Link href="/">Proliki</Link>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="4"
              viewBox="0 0 4 4"
              fill="none"
            >
              <rect width="4" height="4" rx="2" fill="#4D5156" />
            </svg>
          </li>
          <li>
            <Link href="#">Лікарські препарати</Link>
          </li>
        </ul>
        <h1 className={styles.item__title}>{item.name}</h1>
        <ul className={styles.item__nav}>
          <li>
            <a
              style={{
                color: '#4D5156',
                cursor: 'not-allowed',
                background: '#EAF2FA',
              }}
              href="#"
            >
              Про препарат
            </a>
          </li>
          <li>
            <a href="#">Інструкція</a>
          </li>
          <li>
            {item.analogs.length > 0 ? <a href="#">Аналоги (11)</a> : null}
          </li>
          <li>
            <a href="#">Діагнози</a>
          </li>
          <li>
            <a href="#">Форма випуску (3)</a>
          </li>
        </ul>
        <section className={styles.drug}>
          <div className={styles['drug__image-block']}>
            <div className={styles.drug__img}>
              <Image
                src={`/img/drugs/${item.image.small}`}
                width={360}
                height={360}
                alt="Ібупрофен"
              />
            </div>
            <a className={styles.drug__link} href="#">
              <svg>
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.6299 2.18193C18.4281 2.18193 17.4446 3.16383 17.4446 4.36393C17.4446 4.72767 17.5175 5.05491 17.6631 5.34583C18.0274 6.07305 18.7557 6.54586 19.6296 6.54586C20.8314 6.54586 21.8149 5.56395 21.8149 4.36386C21.8149 3.16384 20.8315 2.18187 19.6299 2.18187L19.6299 2.18193ZM15.2594 4.36367C15.2594 1.96355 17.2259 0 19.6296 0C22.0334 0 23.9999 1.96355 23.9999 4.36367C23.9999 6.76378 22.0334 8.72733 19.6296 8.72733C18.3185 8.72733 17.1533 8.14544 16.352 7.23633L8.63121 11.0909C8.70412 11.3818 8.74045 11.7091 8.74045 12C8.74045 12.2909 8.70412 12.6182 8.63121 12.9091L16.352 16.7637C17.1533 15.8546 18.3185 15.2727 19.6296 15.2727C22.0334 15.2727 23.9999 17.2362 23.9999 19.6363C23.9999 22.0365 22.0334 24 19.6296 24C17.2259 24 15.2594 22.0365 15.2594 19.6363C15.2594 19.3091 15.2957 19.0182 15.3686 18.7272L7.64781 14.8727C6.84659 15.7818 5.68131 16.3637 4.37022 16.3637C1.9665 16.3637 0 14.4001 0 12C0 9.59988 1.9665 7.63633 4.37022 7.63633C5.68131 7.63633 6.84659 8.21822 7.64781 9.12734L15.3686 5.27278C15.296 4.98208 15.2594 4.69114 15.2594 4.36367ZM4.33369 9.81833C3.13186 9.81833 2.14842 10.8002 2.14842 12.0003C2.14842 13.2004 3.1318 14.1823 4.33369 14.1823C5.17127 14.1823 5.9362 13.7095 6.30019 12.9823C6.44576 12.6913 6.51867 12.3641 6.51867 12.0004C6.51867 11.6366 6.44576 11.3094 6.30019 11.0185C5.93615 10.2913 5.20782 9.81846 4.33369 9.81846V9.81833ZM19.6297 17.4549C18.7921 17.4549 18.0272 17.9277 17.6632 18.6549C17.5176 18.9458 17.4447 19.273 17.4447 19.6368C17.4447 20.8368 18.4281 21.8188 19.63 21.8188C20.8319 21.8188 21.8153 20.8369 21.8153 19.6368C21.8148 18.4368 20.8314 17.4548 19.6298 17.4548L19.6297 17.4549Z"
                  fill="#0058E9"
                />
              </svg>
            </a>
          </div>

          <div className={styles.table}>
            <div className={styles.table__row}>
              <h4>Виробник:</h4>
              <a href="#">{item.characteristics.producer}</a>
            </div>
            <div className={styles.table__row}>
              <h4>Форма випуску:</h4>
              <p>{item.characteristics.release}</p>
            </div>
            <div className={styles.table__row}>
              <h4>Реєстраційний №:</h4>
              <p>{item.characteristics.registration}</p>
            </div>
            <div className={styles.table__row}>
              <h4>АТХ-група</h4>
              <p>
                <a href="#">{item.characteristics.atx.numbers}</a>
                {item.characteristics.atx.name}
              </p>
            </div>
            <div className={styles.table__row}>
              <h4>Активна речовина:</h4>
              <p>
                <a href="#">{item.characteristics.substance.en}</a>(
                {item.characteristics.substance.ua})
              </p>
            </div>
            <div className={styles.table__row}>
              <h4>Умови відпустки:</h4>
              <p>{item.characteristics.release}</p>
            </div>
            <div className={styles.table__row}>
              <h4>Дозування:</h4>
              <p>{item.characteristics.dosage}</p>
            </div>
            <div className={styles.table__row}>
              <h4>Кількість в упаковці:</h4>
              <p>{item.characteristics.quantity}</p>
            </div>
          </div>

          <ul>
            <button className={styles['drug__price-btn']}>
              Ціни в аптеках
            </button>
            <button className={styles['drug__analog-btn']}>
              <span>Аналоги</span>
            </button>
          </ul>
        </section>
        <ul className={styles.assent}>{}</ul>

        <section className={styles.instruction}>
          <TitleMedium
            level="2"
            name={item.name}
            title="Инструкция по применению"
          />

          <ul className={styles.instruction__list}>
            <li>
              <a href="#">Фармакологічні властивості</a>
            </li>
            <li>
              <a href="#">Показания</a>
            </li>
            <li>
              <a href="#">Застосування</a>
            </li>
            <li>
              <a href="#">Побічні ефекти</a>
            </li>
            <li>
              <a href="#">Умови зберігання</a>
            </li>
            <li>
              <a href="#">Протипоказання</a>
            </li>
            <li>
              <a href="#">Особливі вказівки</a>
            </li>
            <li>
              <a href="#">Клінічні характеристики</a>
            </li>
            <li>
              <a href="#">Передозування</a>
            </li>
          </ul>
          {/* {item.instraction.map((elem) => (
            <>
              <h3 key={elem.id} className={styles['instruction__sub-title']}>
                {elem.title}
              </h3>
              <div className={styles.instruction__info}>
                {elem.text.map((paragraph) => (
                  <p key={paragraph.id}>{paragraph}</p>
                ))}
              </div>
            </>
          ))} */}

          <h3 className={styles['instruction__sub-title']}>Склад</h3>
          <div className={styles.instruction__info}>
            <p>речовина, що діє: ібупрофен;</p>
            <p>
              1 таблетка містить 200 мг ібупрофену у перерахуванні на 100 % суху
              речовину;
            </p>
            <p>
              вспомогательные вещества: целлюлоза микрокристаллическая, натрия
              кроскармелоза, кремния диоксид коллоидный безводный, магния
              стеарат;
            </p>
            <p>
              пленочное покрытие: гипромелоза, коповедон, полиэтиленгликоли,
              каприлокапроилполиоксиглицериды, декстросодержащие вспомогательные
              вещества, титана диоксид (Е 171), специальный красный (Е 129).
            </p>
          </div>
          <h3 className={styles['instruction__sub-title']}>Лікарська форма</h3>
          <div className={styles.instruction__info}>
            <p>Таблетки, покрытые пленочной оболочкой.</p>
            <p>
              Основные физико-химические свойства: таблетки круглой формы,
              покрытые пленочной оболочкой розового цвета, с выпуклой
              поверхностью. На поперечном разломе видно ядро, окруженное слоем
              пленочной оболочки.
            </p>
          </div>
          <h3 className={styles['instruction__sub-title']}>
            Фармакологічна група
          </h3>
          <div className={styles.instruction__info}>
            <p>
              Нестероїдні протизапальні та протиревматичні засоби. Похідні
              пропіонової кислоти. Код АТХ М01А Е01.
            </p>
          </div>
          <h3 className={styles['instruction__sub-title']}>
            Фармакологічні властивості
          </h3>
          <div className={styles.instruction__info}>
            <p>Фармакодинаміка.</p>
            <p>
              Ібупрофен – похідна фенілпропіонової кислоти, має протизапальну,
              аналгетичну та жарознижувальну дію. Механізм дії пов&apos;язаний з
              неселективним пригніченням активності циклооксигенази (ЦОГ-1 та
              ЦОГ-2) – основного ферменту метаболізму арахідонової кислоти, що є
              попередником простагландинів, які відіграють головну роль у
              патогенезі запалення, болю та лихоманки. Аналгезуючу дію
              обумовлено як периферичним (опосередковано, через пригнічення
              синтезу простагландинів), так і центральним механізмом, що
              реалізується за рахунок пригнічення синтезу простагландинів у
              центральній нервовій системі (ЦНС). Ібупрофен знижує агрегацію
              тромбоцитів.
            </p>
            <p>Фармакокінетика.</p>
            <p>
              При застосуванні внутрішньо ібупрофен практично повністю
              всмоктується із травної системи. Максимальна концентрація у крові
              досягається через 1-2 години. Одночасний прийом їжі уповільнює
              швидкість поглинання травної системи. Добре зв&apos;язується із
              білками крові – 90-95 %. Препарат повільно проникає у порожнину
              суглоба, але затримується у синовіальній рідині, створюючи у ній
              більшу концентрацію, ніж у плазмі крові. Метаболізм ібупрофену
              виробляється у печінці. Період напіввиведення становить 2-3
              години. 80 % застосовуваної дози виводиться із сечею переважно у
              вигляді метаболітів (10 % – у незміненому вигляді); решта 20%
              виводяться кишечником у вигляді метаболітів.
            </p>
          </div>
          <div className={styles.instruction__contraindication}>
            <h3 className={styles['instruction__sub-title']}>
              Противопоказания
            </h3>
            <ul>
              <li>
                Підвищена чутливість до ібупрофену (або до іншого компонента
                препарату) та інших нестероїдних протизапальних засобів (НПЗЗ).
              </li>
              <li>
                Реакції гіперчутливості (наприклад, бронхіальна астма, риніт,
                ангіоневротичний набряк або кропив&apos;янка), що спостерігалися
                раніше після застосування ібупрофену, ацетилсаліцилової кислоти
                (аспірину) або інших нестероїдних протизапальних засобів.
              </li>
              <li>
                Шлунково-кишкова кровотеча або перфорація, пов&apos;язана із
                застосуванням НПЗЗ, в анамнезі.
              </li>
              <li>
                Виразкова хвороба шлунка/кровотеча в активній формі або рецидиви
                в анамнезі (два і більше чіткі епізоди загострення виразкової
                хвороби або кровотечі).
              </li>
              <li>
                Виразкова хвороба шлунка/кровотеча в активній формі або рецидиви
                в анамнезі (два і більше точні епізоди загострення виразкової
                хвороби або кровотечі).
              </li>
              <li>Цереброваскулярні чи інші кровотечі.</li>
              <li>Порушення кровотворення або згортання крові.</li>
              <li>
                Тяжке зневоднення (викликане блюванням, діареєю або недостатнім
                вживанням рідини).
              </li>
              <li>Активне запальне захворювання кишок.</li>
              <li>Останній триместр вагітності.</li>
            </ul>
          </div>
        </section>

        <section className={styles.analogs}>
          <TitleMedium level="2" title="Аналоги Ібупрофен (16)" />
          <ul>
            <li>
              <a href="#" style={{ paddingTop: '0' }}>
                <Image
                  src="/img/drugs/analogs/item-1.jpg"
                  width={136}
                  height={136}
                  alt="item-1"
                />
                <h4>Ніфуроксазід</h4>
              </a>
              <h5>
                таблетки, покриті плівковою оболонкою 200 мг блістер у пачці, №
                10, 20
              </h5>
              <p>Киевмедпрепарат</p>
              <div>
                <button className={styles.analogs__insturction}>
                  Інструкція
                </button>
              </div>
            </li>
            <li>
              <Image
                src="/img/drugs/analogs/item-2.jpg"
                width={136}
                height={136}
                alt="item-1"
              />
              <a href="#">Ніфуроксазід</a>
              <h5>таблетки, вкриті оболонкою 0,1 г блістер № 30</h5>
              <p>Юнифарма</p>
              <div>
                <button className={styles.analogs__insturction}>
                  Інструкція
                </button>
              </div>
            </li>
            <li>
              <Image
                src="/img/drugs/analogs/item-3.jpg"
                width={136}
                height={136}
                alt="item-1"
              />
              <a href="#">Ніфуроксазід</a>
              <h5>
                таблетки, покрытые пленочной оболочкой 200 мг блистер в пачке, №
                10, 20
              </h5>
              <p>Киевмедпрепарат</p>
              <div>
                <button className={styles.analogs__insturction}>
                  Інструкція
                </button>
              </div>
            </li>
            <li>
              <Image
                src="/img/drugs/analogs/item-4.jpg"
                width={136}
                height={136}
                alt="item-1"
              />
              <a href="#">Ніфуроксазід</a>
              <h5>суспензия оральная 220 мг/5 мл флакон 100 мл, № 1</h5>
              <p>Киевмедпрепарат</p>
              <div>
                <button className={styles.analogs__insturction}>
                  Інструкція
                </button>
              </div>
            </li>
            <li>
              <Image
                src="/img/drugs/analogs/item-5.jpg"
                width={136}
                height={136}
                alt="item-1"
              />
              <a href="#">Ніфуроксазід</a>
              <h5>
                суспензия оральная 220 мг/5 мл флакон полимерный 100 мл с
                дозирующей ложкой, в пачке, № 1
              </h5>
              <p>Киевмедпрепарат</p>
              <div>
                <button className={styles.analogs__insturction}>
                  Інструкція
                </button>
              </div>
            </li>
            <li>
              <Image
                src="/img/drugs/analogs/no_photo.jpg"
                width={136}
                height={136}
                alt="item-1"
              />
              <a href="#">Ніфуроксазід</a>
              <h5>капсулы 200 мг блистер, № 10, 20</h5>
              <p>ООО ДКП &quot;Фармацевтиче...</p>
              <div>
                <button className={styles.analogs__insturction}>
                  Інструкція
                </button>
              </div>
            </li>
            <li>
              <Image
                src="/img/drugs/analogs/item-6.jpg"
                width={136}
                height={136}
                alt="item-1"
              />
              <a href="#">Нифуроксазид Алкалоид</a>
              <h5>капсулы твердые 100 мг блистер, № 30</h5>
              <p>Alkaloid</p>
              <div>
                <button className={styles.analogs__insturction}>
                  Інструкція
                </button>
              </div>
            </li>
            <li>
              <Image
                src="/img/drugs/analogs/item-7.jpg"
                width={136}
                height={136}
                alt="item-1"
              />
              <a href="#">Ніфуроксазід</a>
              <h5>капсулы твердые 200 мг блистер, № 20</h5>
              <p>Alkaloid</p>
              <div>
                <button className={styles.analogs__insturction}>
                  Інструкція
                </button>
              </div>
            </li>
          </ul>
          <BtnMore />
        </section>

        <section className={styles.diagnosis}>
          <TitleMedium
            level="2"
            title="Диагнозы при которых применяют"
            name="Ибупрофен"
          />
          <ul>
            <li>
              <a className={styles.link} href="#">
                Другая вирусная пневмония
              </a>
              <span>МКБ J12.9</span>
            </li>

            <li>
              <a href="#">Другие плацентарные нарушения</a>
              <span>МКБ J12.8</span>
            </li>

            <li>
              <a href="#">Другие формы холецистита</a>
              <span>МКБ J12.0</span>
            </li>
            <li>
              <a className={styles.link} href="#">
                Нестабильная стенокардия
              </a>
              <span>МКБ J12.0</span>
            </li>
            <li>
              <a className={styles.link} href="#">
                Другая вирусная пневмония
              </a>
              <span>МКБ J12.9</span>
            </li>
            <li>
              <a href="#">Другие плацентарные нарушения</a>
              <span>МКБ J12.8</span>
            </li>
            <li>
              <a href="#">Другие формы холецистита</a>
              <span>МКБ J12.0</span>
            </li>
            <li>
              <a className={styles.link} href="#">
                Нестабильная стенокардия
              </a>
              <span>МКБ J12.0</span>
            </li>
          </ul>
        </section>

        <section className={styles.analogs}>
          <TitleMedium level="2" title="Другие формы выпуска Ибупрофен (3)" />

          <ul>
            <li>
              <Image
                src="/img/drugs/analogs/item-1.jpg"
                width={136}
                height={136}
                alt="item-1"
              />
              <a href="#">Ніфуроксазід</a>
              <h5>
                таблетки, покриті плівковою оболонкою 200 мг блістер у пачці, №
                10, 20
              </h5>
              <p>Киевмедпрепарат</p>
              <div>
                <button className={styles.analogs__insturction}>
                  Інструкція
                </button>
              </div>
            </li>
            <li>
              <Image
                src="/img/drugs/analogs/item-2.jpg"
                width={136}
                height={136}
                alt="item-1"
              />
              <a href="#">Ніфуроксазід</a>
              <h5>таблетки, вкриті оболонкою 0,1 г блістер № 30</h5>
              <p>Юнифарма</p>
              <div>
                <button className={styles.analogs__insturction}>
                  Інструкція
                </button>
              </div>
            </li>
            <li>
              <Image
                src="/img/drugs/analogs/item-3.jpg"
                width={136}
                height={136}
                alt="item-1"
              />
              <a href="#">Ніфуроксазід</a>
              <h5>
                таблетки, покрытые пленочной оболочкой 200 мг блистер в пачке, №
                10, 20
              </h5>
              <p>Киевмедпрепарат</p>
              <div>
                <button className={styles.analogs__insturction}>
                  Інструкція
                </button>
              </div>
            </li>
          </ul>
        </section>
      </article>
    </Container>
  );
};
export default DrugBlock;
