import Image from 'next/image';
import Link from 'next/link';

import Container from '@/src/common/Container/Container';

import styles from './DrugBlock.module.scss';
import green from '/public/img/icons/green.svg';
import yellow from '/public/img/icons/yellow.svg';
import red from '/public/img/icons/red.svg';
import { TitleMedium } from '@/src/common/Title/Title';

const DrugBlock = ({ data, allDrug }) => {
  const item = data[0];

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

  const showAssent = () => {
    return assentData.map((item) => (
      <li key={item.id}>
        <h5>{item.title}</h5>
        <span>
          {item.text === 'заборонено' ? (
            <Image src={red} alt="red" />
          ) : item.text === 'дозволено' ? (
            <Image src={green} alt="green" />
          ) : (
            <Image src={yellow} alt="yellow" />
          )}
          <p>{item.text}</p>
        </span>
      </li>
    ));
  };

  const showAnalogs = () => {
    return allDrug.map((drug) => drug.name === item.name).length;
  };

  console.log('data', allDrug);

  if (!data || !allDrug) {
    return <div>H</div>;
  }
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
            {item.analogs.length > 0 ? (
              <a href="#">Аналоги ({showAnalogs()})</a>
            ) : null}
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
        <ul className={styles.assent}>{showAssent()}</ul>

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
          <button className={styles.analogs__more}>
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.8307 2.7325C14.8307 2.7325 15.0316 2.84398 15.3758 3.0115C15.72 3.23466 16.2077 3.51346 16.7816 4.01561C17.3552 4.48976 17.9864 5.15924 18.5315 6.02385C19.0766 6.88846 19.5928 7.97625 19.8223 9.23135C19.937 9.84498 20.0232 10.5145 19.9944 11.2118C19.9944 11.3791 19.9944 11.5464 19.9658 11.7137C19.9658 11.8811 19.9084 12.0764 19.9084 12.2438C19.8797 12.4111 19.8797 12.6064 19.8223 12.7738C19.7937 12.9411 19.7363 13.1364 19.7077 13.3038C19.6502 13.6664 19.4781 14.0011 19.3635 14.3637C19.306 14.559 19.22 14.6983 19.134 14.8937C19.0479 15.061 18.9905 15.2564 18.8758 15.4237C18.6749 15.7584 18.5028 16.121 18.2447 16.4278C18.13 16.5951 18.0152 16.7625 17.8717 16.902C17.7282 17.0415 17.6136 17.2088 17.4701 17.3483C17.4127 17.4319 17.3266 17.5156 17.2692 17.5714L17.0397 17.7946C16.8962 17.9341 16.7241 18.0736 16.5806 18.2129C16.2365 18.4639 15.9209 18.7429 15.5479 18.9381C14.8307 19.4122 14.0275 19.7468 13.1955 20.0259C12.7653 20.1373 12.3348 20.2768 11.9046 20.3327C11.6751 20.3605 11.4744 20.4163 11.2449 20.4442L10.5851 20.5H10.3844H10.327H9.89676C9.66724 20.5 9.46654 20.5 9.23701 20.4722C8.77798 20.4163 8.31893 20.3607 7.86009 20.249C6.08155 19.8585 4.4463 18.9659 3.12685 17.7666C1.83599 16.5393 0.889269 15.0052 0.430226 13.3597C0.372796 13.1643 0.315566 12.9413 0.258136 12.746C0.229521 12.5507 0.172091 12.3277 0.143475 12.1324L0.0860448 11.8256L0.0574299 11.5188C0.0288152 11.3234 0.0288155 11.1004 0 10.9051V10.7936V10.7378V10.2915C0 10.0961 1.92361e-07 9.92882 0.0286149 9.73369C0.0572296 9.53835 0.0860453 9.31538 0.11466 9.12006L0.143275 8.81324C0.171889 8.70175 0.200705 8.6179 0.200705 8.53423C0.544887 7.00012 1.23343 5.63355 2.06525 4.54576C2.92591 3.45796 3.9298 2.62115 4.90531 2.03556C5.88062 1.44973 6.85592 1.05924 7.65936 0.86409C7.86027 0.808251 8.06097 0.752606 8.23305 0.724589C8.40514 0.696768 8.57723 0.66875 8.74931 0.640928C8.9214 0.613106 9.06488 0.585089 9.20835 0.557266C9.35182 0.557266 9.46648 0.529444 9.58134 0.529444C10.0972 0.529055 10.3267 0.501233 10.3267 0.501233C10.9579 0.473411 11.503 0.919536 11.5602 1.53319C11.5888 2.14682 11.13 2.67682 10.4988 2.73246H10.4702L10.3267 2.73265C10.3267 2.73265 10.1258 2.73265 9.78162 2.76047H9.49466C9.38 2.76047 9.26514 2.78829 9.15048 2.81631C9.03582 2.84413 8.89235 2.84413 8.74887 2.87215C8.6054 2.89997 8.46192 2.92799 8.28984 2.95581C7.63009 3.0673 6.88413 3.34629 6.05226 3.79263C5.24902 4.23895 4.38841 4.85258 3.67124 5.74503C2.92543 6.60963 2.32296 7.69743 1.97876 8.95253C1.95015 9.03619 1.92133 9.11985 1.92133 9.17569L1.89272 9.39885C1.8641 9.56617 1.83529 9.70568 1.80667 9.87299C1.77806 10.0403 1.77806 10.2357 1.74924 10.403L1.72063 10.682V10.8493V10.8215V10.9052C1.72063 11.0725 1.72063 11.2398 1.74924 11.4352V11.6861L1.77786 11.9371C1.80647 12.1045 1.83529 12.2998 1.83529 12.4671C1.8639 12.6345 1.92133 12.8018 1.94995 12.9971C2.26551 14.3917 3.0401 15.7305 4.10147 16.8463C5.19162 17.9341 6.59718 18.7987 8.14638 19.1892C8.54799 19.3007 8.92098 19.3565 9.29375 19.4402C9.49466 19.468 9.72397 19.468 9.92486 19.496L10.2404 19.5238H10.3551H10.5272L11.1297 19.496C11.3306 19.496 11.5313 19.4402 11.7322 19.4402C12.1338 19.4123 12.5068 19.3007 12.9085 19.217C13.6831 18.9938 14.4289 18.7151 15.0886 18.2966C15.4328 18.1292 15.7484 17.8783 16.0639 17.6551C16.2074 17.5436 16.3509 17.4041 16.4941 17.2924L16.7237 17.0971L16.9246 16.9018C17.068 16.7623 17.1827 16.6228 17.3262 16.4835C17.4408 16.344 17.5557 16.2045 17.6704 16.0371C17.9285 15.7581 18.1006 15.4235 18.3015 15.1167C18.4161 14.9772 18.4736 14.8099 18.5596 14.6426C18.6456 14.4752 18.7317 14.3357 18.7891 14.1684C18.9038 13.8338 19.0761 13.5269 19.1621 13.1643C19.2195 12.997 19.2482 12.8297 19.3056 12.6623C19.363 12.495 19.363 12.3277 19.3916 12.1604C19.4203 11.9931 19.4491 11.8257 19.4777 11.6584C19.4777 11.4911 19.5063 11.3238 19.5063 11.1565C19.5637 10.515 19.5349 9.87332 19.4203 9.25989C19.2482 8.03259 18.7891 6.97264 18.3015 6.10803C17.7852 5.24342 17.1827 4.57391 16.6662 4.07195C16.1211 3.56999 15.6335 3.23514 15.3179 3.012C15.0314 2.84429 14.8307 2.73281 14.8307 2.73281L14.8307 2.7325Z"
                fill="#0058E9"
              />
            </svg>
            <span>Показати ще</span>
          </button>
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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aliquam porro dolore rerum. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Asperiores velit repudiandae
                quaerat, laudantium distinctio vitae nisi rem doloribus ipsum
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
