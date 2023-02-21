import styles from './Footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.sections}>
        <section className={styles.sectionsFooter}>
          <h2 className={styles.title}>ProLiki</h2>
          <p className={styles.textBlock}>
            Спеціалізоване медичне інтернет-видання для лікарів, провізорів,
            фармацевтів, студентів медичних та фармацевтичних вузів
          </p>
        </section>
        <section className={styles.sectionsFooter}>
          <h2 className={styles.title}>Розділи</h2>
          <ul>
            <li className={styles.link}>
              <Link
                href="/atx_classification"
                alt="ATХ класифікація"
                className={styles.item}
              >
                ATХ класифікація
              </Link>
            </li>
            <li className={styles.link}>
              <Link
                href="/active_substances"
                alt="Активні речовини"
                className={styles.item}
              >
                Активні речовини
              </Link>
            </li>
            <li className={styles.link}>
              <Link
                href="/alphabet"
                alt="Алфавітний покажчик"
                className={styles.item}
              >
                Алфавітний покажчик
              </Link>
            </li>
            <li className={styles.link}>
              <Link
                href="/manufacturers"
                alt="Виробники"
                className={styles.item}
              >
                Виробники
              </Link>
            </li>
            <li className={styles.link}>
              <Link href="/news" alt="Новини" className={styles.item}>
                Новини
              </Link>
            </li>
          </ul>
        </section>
        <section className={styles.sectionsFooter}>
          <h2 className={styles.title}>Користувачеві</h2>
          <ul>
            <li className={styles.link}>
              <Link href="/contacts" alt="Контакти" className={styles.item}>
                Контакти
              </Link>
            </li>
            <li className={styles.link}>
              <Link href="/about" alt="Про нас" className={styles.item}>
                Про нас
              </Link>
            </li>
            <li className={styles.link}>
              <a href="#" className={styles.item}>
                Cоглашение
              </a>
            </li>
            <li className={styles.link}>
              <a href="#" className={styles.item}>
                Конфиденциальность
              </a>
            </li>
            <li className={styles.link}>
              <a href="#" className={styles.item}>
                Обработка cookie
              </a>
            </li>
          </ul>
        </section>
        <section className={styles.sectionsFooter}>
          <h2 className={styles.title}>Соціальні мережі</h2>
          <p className={styles.textBlock}>
            Підпишіться на соцмережі proliki.com.ua, щоб отримувати останні
            новини про ліки, попередження та оновлення.
          </p>
          <div className={styles.socialLinks}>
            <a href="https://www.instagram.com/">
              <Image
                className={styles.socialLink}
                src="/img/link-social/instagram.png"
                alt="Instagram link"
                width={32}
                height={32}
              />
            </a>
            <a href="https://uk-ua.facebook.com/">
              <Image
                className={styles.socialLink}
                src="/img/link-social/facebook.png"
                alt="Facebook link"
                width={32}
                height={32}
              />
            </a>
          </div>
        </section>
      </div>
      <div className={styles.infoFooter}>
        <p className={styles.textBlock}>
          © 2022 ProLiki. Уся інформація щодо медичних препаратів, наведена на
          веб-ресурсах «ProLiki», розміщена з метою загального інформування.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
