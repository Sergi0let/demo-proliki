import styles from './Footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/pages/common/Container/Container';
import { TitleSmall } from '@/pages/common/Title/Title';
import SocialIcon from '@/pages/common/SocialIcon/SocialIcon';

const facebookLink = (
  <svg
    width="13"
    height="25"
    viewBox="0 0 13 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.868 12H8.5V25H3.5V12H0.5V8H3.5V5.59C3.502 2.082 4.959 0 9.092 0H12.5V4H10.213C8.604 4 8.5 4.6 8.5 5.723V8H12.5L11.868 12Z"
      fill="white"
    />
  </svg>
);
const linkedInLink = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.91095 6.16669H2.94128C4.56878 6.16669 5.58203 5.00002 5.58203 3.54169C5.5517 2.05127 4.56878 0.916687 2.9722 0.916687C1.37561 0.916687 0.332031 2.05127 0.332031 3.54169C0.332031 5.00002 1.3447 6.16669 2.91095 6.16669ZM0.332031 7.91669H5.58203V23.0834H0.332031V7.91669ZM23.6654 13.4584C23.6654 10.3976 21.1845 7.91669 18.1237 7.91669C16.3428 7.91669 14.7625 8.76019 13.7487 10.0657V7.91669H8.4987V23.0834H13.7487V14.3334C13.7487 13.0448 14.7934 12 16.082 12C17.3706 12 18.4154 13.0448 18.4154 14.3334V23.0834H23.6654C23.6654 23.0834 23.6654 14.3071 23.6654 13.4584Z"
      fill="white"
    />
  </svg>
);
const twitterLink = (
  <svg
    width="22"
    height="18"
    viewBox="0 0 22 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.5017 2.25025C20.73 2.59208 19.8999 2.82017 19.0243 2.92808C19.9145 2.39958 20.5993 1.55667 20.9207 0.560917C20.0877 1.04917 19.1649 1.40792 18.1832 1.59692C17.3992 0.765667 16.2809 0.25 15.0419 0.25C12.6619 0.25 10.7328 2.16217 10.7328 4.52C10.7328 4.85367 10.7719 5.17858 10.8454 5.49417C7.26492 5.3145 4.08925 3.61233 1.96475 1.02933C1.59142 1.6605 1.38142 2.39958 1.38142 3.1795C1.38142 4.66175 2.14033 5.96667 3.29767 6.7355C2.59125 6.71392 1.92625 6.51733 1.34408 6.20233C1.34408 6.21517 1.34408 6.23442 1.34408 6.2525C1.34408 8.32392 2.82983 10.0488 4.79917 10.4414C4.43925 10.54 4.05892 10.5948 3.66692 10.5948C3.38867 10.5948 3.11742 10.5633 2.85492 10.5161C3.40325 12.2089 4.994 13.4462 6.87875 13.4829C5.40408 14.6262 3.54675 15.3111 1.52725 15.3111C1.17842 15.3111 0.837167 15.2912 0.5 15.2504C2.40808 16.4585 4.67375 17.1667 7.10567 17.1667C15.0302 17.1667 19.3656 10.659 19.3656 5.0135C19.3656 4.82858 19.3597 4.64425 19.351 4.46225C20.1968 3.86492 20.926 3.11125 21.5017 2.25025Z"
      fill="white"
    />
  </svg>
);
const telegramLink = (
  <svg
    width="24"
    height="21"
    viewBox="0 0 24 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23.95 1L20.204 20.126C20.204 20.126 20.043 21 18.959 21C18.383 21 18.086 20.726 18.086 20.726L9.972 13.993L6.002 11.992L0.907 10.637C0.907 10.637 0 10.375 0 9.625C0 9 0.933 8.702 0.933 8.702L22.249 0.234003C22.249 0.234003 22.9 -0.000996804 23.375 3.19601e-06C23.667 3.19601e-06 24 0.125003 24 0.500003C24 0.750003 23.95 1 23.95 1Z"
      fill="white"
    />
  </svg>
);

const links = [
  {
    link: 'https://uk-ua.facebook.com/',
    type: facebookLink,
    bgColor: '#3F51B5',
  },
  {
    link: 'https://twitter.com/',
    type: twitterLink,
    bgColor: '#03A9F4',
  },
  {
    link: 'https://www.linkedin.com/',
    type: linkedInLink,
    bgColor: '#0288D1',
  },
  {
    link: 'https://t.me/',
    type: telegramLink,
    bgColor: '#29B6F6',
  },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.sections}>
          <section
            className={(styles.sections__section, styles.sections__section_1)}
          >
            <TitleSmall title={'ProLiki'} />
            <p className={styles.section__text}>
              Спеціалізоване медичне інтернет-видання для лікарів, провізорів,
              фармацевтів, студентів медичних та фармацевтичних вузів
            </p>
          </section>
          <section
            className={(styles.sections__section, styles.sections__section_2)}
          >
            <TitleSmall title={'Розділи'} />
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
            <TitleSmall title={'Користувачеві'} />

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
                <a href="#" className={styles.sections__link}>
                  Cоглашение
                </a>
              </li>
              <li className={styles.sections__item}>
                <a href="#" className={styles.sections__link}>
                  Конфиденциальность
                </a>
              </li>
              <li className={styles.sections__item}>
                <a href="#" className={styles.sections__link}>
                  Обработка cookie
                </a>
              </li>
            </ul>
          </section>
          <section
            className={(styles.sections__section, styles.sections__section_4)}
          >
            <TitleSmall title={'Соціальні мережі'} />

            <p className={styles.section__text}>
              Підпишіться на соцмережі proliki.com.ua, щоб отримувати останні
              новини про ліки, попередження та оновлення.
            </p>
            <div className={styles.socials}>
              {links.map(({ link, type, bgColor }) => (
                <SocialIcon
                  key={bgColor}
                  link={link}
                  type={type}
                  bgColor={bgColor}
                />
              ))}
            </div>
          </section>
        </div>
        <div>
          <p className={styles.bottom}>
            © 2022 ProLiki. Уся інформація щодо медичних препаратів, наведена на
            веб-ресурсах «ProLiki», розміщена з метою загального інформування.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
