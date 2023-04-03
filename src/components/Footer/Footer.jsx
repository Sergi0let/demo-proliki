import Link from 'next/link';
import { H5Title } from '@/src/common/Title/Title';

import facebook from '/public/img/icons/facebook.png';
import twitter from '/public/img/icons/twitter.png';
import linkedIn from '/public/img/icons/linkedin.png';
import telegram from '/public/img/icons/telegram.png';

import styles from './Footer.module.scss';
import Image from 'next/image';
import links_data from '@/src/data/links_data';
import logo from '@/public/img/logo/logo.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.sections}>
          <section
            className={(styles.sections__section, styles.sections__section_1)}
          >
            <div className={styles.sections__title}>
              <Image src={logo} alt="" width={24} height={24} />
              <H5Title title="ProLiki" />
            </div>
            <p className={styles.sections__text}>
              Онлайн-довідник про ліки, дозволяє користувачам знайти детальну
              інформацію про будь-який лікарський засіб.
            </p>
          </section>
          <section
            className={(styles.sections__section, styles.sections__section_2)}
          >
            <H5Title title="Розділи" />
            <ul>
              <li className={styles.sections__item}>
                <Link
                  href="/atx_classification"
                  alt="ATХ класифікація"
                  className={styles.sections__link}
                >
                  ATХ класифікація
                </Link>
              </li>
              <li className={styles.sections__item}>
                <Link
                  href="/active_substances"
                  alt="Активні речовини"
                  className={styles.sections__link}
                >
                  Активні речовини
                </Link>
              </li>
              <li className={styles.sections__item}>
                <Link
                  href="/alphabet"
                  alt="Алфавітний покажчик"
                  className={styles.sections__link}
                >
                  Алфавітний покажчик
                </Link>
              </li>
              <li className={styles.sections__item}>
                <Link
                  href="/manufacturers"
                  alt="Виробники"
                  className={styles.sections__link}
                >
                  Виробники
                </Link>
              </li>
              <li className={styles.sections__item}>
                <Link
                  href="/news"
                  alt="Новини"
                  className={styles.sections__link}
                >
                  Новини
                </Link>
              </li>
            </ul>
          </section>
          <section
            className={(styles.sections__section, styles.sections__section_3)}
          >
            <H5Title title="Користувачеві" />

            <ul>
              <li className={styles.sections__item}>
                <Link
                  href="/contacts"
                  alt="Контакти"
                  className={styles.sections__link}
                >
                  Контакти
                </Link>
              </li>
              <li className={styles.sections__item}>
                <Link
                  href="/about"
                  alt="Про нас"
                  className={styles.sections__link}
                >
                  Про нас
                </Link>
              </li>
              <li className={styles.sections__item}>
                <Link
                  href="/service_page/agreement"
                  className={styles.sections__link}
                >
                  Cоглашение
                </Link>
              </li>
              <li className={styles.sections__item}>
                <Link
                  href="/service_page/confidentiality"
                  className={styles.sections__link}
                >
                  Конфиденциальность
                </Link>
              </li>
              <li className={styles.sections__item}>
                <Link
                  href="/service_page/cookie"
                  className={styles.sections__link}
                >
                  Обработка cookie
                </Link>
              </li>
            </ul>
          </section>
          <section
            className={(styles.sections__section, styles.sections__section_4)}
          >
            <H5Title title="Соціальні мережі" />

            <p className={styles.sections__text}>
              Приєднуйтесь до нашої спільноти в соціальних мережах та
              дізнавайтесь першими про оновлення та нові можливості сервісу
              Proliki!
            </p>
            <ul className={styles.socials}>
              <li>
                <Link target={'_blank'} href={links_data.facebook}>
                  <Image src={facebook} alt="Посилання facebook" />
                </Link>
              </li>
              <li>
                <Link target={'_blank'} href={links_data.twitter}>
                  <Image src={twitter} alt="Посилання twitter" />
                </Link>
              </li>
              <li>
                <Link target={'_blank'} href={links_data.linkedIn}>
                  <Image src={linkedIn} alt="Посилання linkedIn" />
                </Link>
              </li>
              <li>
                <Link target={'_blank'} href={links_data.telegram}>
                  <Image src={telegram} alt="Посилання telegram" />
                </Link>
              </li>
            </ul>
          </section>
        </div>
        <div>
          <p className={styles.bottom}>
            © 2022 ProLiki. Уся інформація щодо медичних препаратів, наведена на
            веб-ресурсах «ProLiki», розміщена з метою загального інформування.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
