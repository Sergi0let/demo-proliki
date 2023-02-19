import styles from './Footer.module.scss';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.sections}>
        <section className={styles.sectionsFooter}>
          <h2 className={styles.title}>ProLiki</h2>
          <p className={styles.textBlock}>
            Cпециализированное медицинское интернет-издание для врачей,
            провизоров, фармацевтов, студентов медицинских и фармацевтических
            вузов
          </p>
        </section>
        <section className={styles.sectionsFooter}>
          <h2 className={styles.title}>Разделы</h2>
          <ul>
            <li className={styles.link}>
              <a href="#" className={styles.item}>
                ATХ классификация
              </a>
            </li>
            <li className={styles.link}>
              <a href="#" className={styles.item}>
                Активные вещества
              </a>
            </li>
            <li className={styles.link}>
              <a href="#" className={styles.item}>
                Алфавитный указатель
              </a>
            </li>
            <li className={styles.link}>
              <a href="#" className={styles.item}>
                Производители
              </a>
            </li>
            <li className={styles.link}>
              <a href="#" className={styles.item}>
                Новости
              </a>
            </li>
          </ul>
        </section>
        <section className={styles.sectionsFooter}>
          <h2 className={styles.title}>Пользователю</h2>
          <ul>
            <li className={styles.link}>
              <a href="#" className={styles.item}>
                Контакты
              </a>
            </li>
            <li className={styles.link}>
              <a href="#" className={styles.item}>
                О нас
              </a>
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
          <h2 className={styles.title}>Пользователю</h2>
          <p className={styles.textBlock}>
            Подпишитесь на соцсети proliki.com.ua, чтобы получать последние
            новости о лекарствах, предупреждения и обновления.
          </p>
          <div className={styles.socialLinks}>
            <a href="#">
              <Image
                className={styles.socialLink}
                src="/img/link-social/instagram.png"
                alt="Instagram link"
                width={32}
                height={32}
              />
            </a>
            <a href="#">
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
