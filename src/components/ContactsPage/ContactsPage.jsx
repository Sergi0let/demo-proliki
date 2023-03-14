import Container from '@/src/common/Container/Container';
import Title, { TitleBig, TittleIntermidiate } from '@/src/common/Title/Title';
import Image from 'next/image';
import Link from 'next/link';
import FormBlock from '../FormBlock/FormBlock';
import styles from './ContactsPage.module.scss';

import call from '/public/img/link-social/call.svg';
import mail from '/public/img/link-social/mail.svg';
import telegram from '/public/img/link-social/telegram.png';
import viber from '/public/img/link-social/viber.png';

const ContactsPage = () => {
  return (
    <Container>
      <div className={styles.contacts}>
        <ul className={styles.contacts__crumbreads}>
          <li>
            <Link href="/">Proliki</Link>
          </li>
        </ul>
        <div className={styles.contacts__title}>
          <TitleBig title="Контакти" />
        </div>

        <div className={styles.contacts__block}>
          <div className={styles.contacts__content}>
            <TittleIntermidiate title="Ми будемо раді почути Вас і відповісти на будь-які запитання або пропозиції." />
            <p className={styles.contacts__info}>
              Надішліть нам повідомлення через форму зворотного зв&apos;язку на
              цій сторінці або скористайтеся одним із наших зазначених способів
              звязку.
            </p>
            <ul className={styles['contacts__socials-list']}>
              <li className={styles['contacts__socials-items']}>
                <div className={styles.contacts__social}>
                  <Image src={mail} width={28} height={20} alt="mail" />
                </div>
                <div>
                  <h5>Електронна пошта</h5>
                  <a href="mailto:info@proliki.ua">info@proliki.ua</a>
                </div>
              </li>
              <li className={styles['contacts__socials-items']}>
                <div className={styles.contacts__social}>
                  <Image src={call} width={28} height={20} alt="call" />
                </div>
                <div>
                  <h5>Телефон</h5>
                  <a href="tel:+380960171727">+380(96) 017-17-27</a>
                </div>
              </li>
              <li className={styles['contacts__socials-items']}>
                <div className={styles.contacts__social}>
                  <Image src={telegram} width={28} height={20} alt="telegram" />
                </div>
                <div>
                  <h5>Telegram</h5>
                  <a href="https://t.me/@proliki">@proliki</a>
                </div>
              </li>
              <li className={styles['contacts__socials-items']}>
                <div className={styles.contacts__social}>
                  <Image src={viber} width={28} height={20} alt="viber" />
                </div>
                <div>
                  <h5>Viber</h5>
                  <a href="viber://add?number=+380960241010">
                    +380(96) 024-10-10
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <aside className={styles.contacts__aside}>
            <FormBlock />
          </aside>
        </div>
      </div>
    </Container>
  );
};

export default ContactsPage;
