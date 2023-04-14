import Container from '@/src/common/Container/Container';
import Crumbreads from '@/src/common/Crumbreads/Crumbreads';

import { H1Title, H2Title } from '@/src/common/Title/Title';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './ServiceAgreement.module.scss';

const PrivacyPolicy = () => {
  const { pathname } = useRouter();

  const arrayPathname = pathname.split('/');
  const idPathname = arrayPathname[arrayPathname.length - 1];

  const styleActive = {
    color: '#202227',
    borderLeft: '4px solid #202227',
    paddingLeft: '26px',
  };

  return (
    <Container>
      <div className={styles.agreement}>
        <main>
          <Crumbreads />

          <H1Title title="Обробка cookie" />
          <div className={styles['agreement__block-text']}>
            <p>Політика використання cookie-файлів на сайті proliki.com.ua</p>
          </div>

          <H2Title title="1. Вступні положення" />
          <div className={styles['agreement__block-text']}>
            <p>
              1.1. Дана Політика визначає порядок використання cookie-файлів на
              сайті proliki.com.ua (далі - Сайт).
            </p>
            <p>
              1.2. Використовуючи Сайт, Користувач погоджується з умовами даної
              Політики.
            </p>
          </div>
          <H2Title title="2. Що таке cookie-файли та як ми їх використовуємо" />
          <div className={styles['agreement__block-text']}>
            <p>
              2.1. Cookie-файли - це невеликі текові файли, які зберігаються на
              комп&lsquo;ютері Користувача під час відвідування Сайту.
            </p>
            <p>
              2.2. Ми використовуємо cookie-файли для поліпшення
              функціональності Сайту та збору статистичних даних про
              користування Сайтом.
            </p>
            <p>
              2.3. Ми використовуємо як сесійні, так і постійні cookie-файли.
              Сесійні cookie-файли зберігаються тимчасово і видаляються з
              комп&lsquo;ютера Користувача після закриття браузера. Постійні
              cookie-файли зберігаються на комп&lsquo;ютері Користувача до тих
              пір, поки вони не будуть видалені вручну або до закінчення їх
              терміну дії.
            </p>
            <p>
              2.4. Ми використовуємо наступні типи cookie-файлів:
              <ul className={styles['agreement__block-list']}>
                <li>
                  необхідні cookie-файли - необхідні для коректної роботи Сайту
                  та надання послуг Користувачам;
                </li>
                <li>
                  функціональні cookie-файли - використовуються для
                  запам&lsquo;товування виборів Користувача на Сайті;
                </li>
                <li>
                  аналітичні cookie-файли - використовуються для збору
                  статистичних даних про користування Сайтом.
                </li>
              </ul>
            </p>
          </div>
          <H2Title title="3. Як відключити використання cookie-файлів" />
          <div className={styles['agreement__block-text']}>
            <p>
              3.1. Користувач може відключити використання cookie-файлів у
              налаштуваннях свого браузера. Проте це може призвести до обмеження
              функціональності Сайту та зниження якості користування Сайтом.
            </p>
            <p>
              3.2. Якщо Користувач відключив використання cookie-файлів, це не
              вплине на можливість використання Сайту, але деякі функції Сайту
              можуть бути обмежені.
            </p>
          </div>
          <H2Title title="4. Зберігання та передача cookie-файлів третім особам" />
          <div className={styles['agreement__block-text']}>
            <p>
              4.1. Ми не передаємо отримані в результаті використання
              cookie-файлів дані третім особам.
            </p>
            <p>
              4.2. Ми можемо передавати отримані в результаті використання
              cookie-файлів дані у випадках, передбачених законодавством
              України.
            </p>
          </div>
          <H2Title title="5. Зміни у Політиці використання cookie-файлів" />
          <div className={styles['agreement__block-text']}>
            <p>5. Зміни у Політиці використання cookie-файлів</p>
            <p>
              5.2. Зміни у Політиці використання cookie-файлів набувають
              чинності з моменту їх публікації на Сайті.
            </p>
          </div>
          <H2Title title="5.2. Зміни у Політиці використання cookie-файлів набувають чинності з моменту їх публікації на Сайті." />
          <div className={styles['agreement__block-text']}>
            <p>
              6.1. Якщо у вас виникли питання щодо Політики використання
              cookie-файлів, будь ласка, зв&lsquo;яжіться з нами через контактну
              форму на Сайті або за адресою електронної пошти:
              <a href="mailto:info@proliki.com.ua."> info@proliki.com.ua.</a>
              info@proliki.com.ua.
            </p>
          </div>
        </main>
        <aside>
          <ul className={styles.agreement__aside}>
            <li style={idPathname === 'agreement' ? styleActive : null}>
              <Link href="/service_page/agreement">Угода користувача</Link>
            </li>
            <li style={idPathname === 'confidentiality' ? styleActive : null}>
              <Link href="/service_page/confidentiality">
                Політика конфіденційності
              </Link>
            </li>
            <li style={idPathname === 'cookie' ? styleActive : null}>
              <Link href="/service_page/cookie">Обробка cookie</Link>
            </li>
          </ul>
        </aside>
      </div>
    </Container>
  );
};

export default PrivacyPolicy;
