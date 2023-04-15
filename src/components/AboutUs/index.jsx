import Image from 'next/image';
import Container from '@/src/common/Container/Container';
import { H1Title } from '@/src/common/Title/Title';

import about_1 from '@/public/img/about-us/about-1.png';
import about_2 from '@/public/img/about-us/about-2.png';
import about_3 from '@/public/img/about-us/about-3.png';
import check from '@/public/img/icons/check.svg';
import facebook from '@/public/img/about-us/facebook-icon.png';
import star from '@/public/img/about-us/star-about.svg';
import photoUser from '@/public/img/about-us/user-photo.png';
import aboutImg from '@/public/img/about-us/about-img.png';
import styles from './index.module.scss';
import { useState } from 'react';

export default function AboutUs() {
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [email, setEmail] = useState('');

  return (
    <>
      <Container>
        <div className={styles['about-us']}>
          <div className={styles['about-us__content']}>
            <H1Title title="Допомагаємо знайти всю необхідну інформацію про ліки" />
            <p className={styles['about-us__text-content']}>
              Ми створили цей сервіс для того, щоб зробити Ваше життя трохи
              простішим та зменшити ризик неправильного використання ліків
            </p>
            <div className={styles['about-us__form']}>
              <input
                maxLength="30"
                type="text"
                value={email}
                placeholder="Електронна пошта"
                onChange={(e) => {
                  setEmail(e.target.value);
                  setIsEmailValid(e.target.value.includes('@'));
                }}
              />

              {isEmailValid && (
                <div className={styles['about-us__form-thanks']}>
                  <Image src={check} alt="valid email" />
                  <p>Дякуємо за підписку!</p>
                </div>
              )}

              {isEmailValid && (
                <div className={styles['about-us__form-check']}>
                  <Image src={check} alt="check" />
                </div>
              )}
              <button>Підписатися</button>
            </div>

            <div className={styles['about-us__user']}>
              <div className={styles['about-us__user-photo']}>
                <Image src={photoUser} width={100} alt="photo user" />
              </div>
              <div className={styles['about-us__user-content']}>
                <div className={styles['about-us__stars-row']}>
                  <Image src={star} alt="star" width={24} />
                  <Image src={star} alt="star" width={24} />
                  <Image src={star} alt="star" width={24} />
                  <Image src={star} alt="star" width={24} />
                  <Image src={star} alt="star" width={24} />
                </div>
                <p className={styles['about-us__user-text']}>
                  Proliki - мій новий улюблений довідник . Все, що мені
                  потрібно, знаходиться тут, і все дуже зручно організовано.
                </p>
                <div className={styles['about-us__user-link']}>
                  <p className={styles['about-us__user-name']}>Ben Pickleton</p>
                  <a
                    className={styles['about-us__user-social']}
                    href="https://www.facebook.com/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <Image src={facebook} width={20} alt="facebook icon" />

                    <span>Facebook</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles['about-us__img-wrapper']}>
            <Image
              src={aboutImg}
              width={552}
              alt="about us image"
              title="about us image"
            />
          </div>
        </div>
        <div className={styles['features-about']}>
          <div className={styles['features-about__item']}>
            <div className={styles['features-about__item-img']}>
              <Image
                src={about_1}
                width={'auto'}
                height="auto"
                alt="about us image"
              />
            </div>
            <div className={styles['features-about__item-content']}>
              <p className={styles['features-about__number']}>1</p>
              <p className={styles['features-about__item-title']}>
                Повна та достовірна інформація про ліки
              </p>
              <p className={styles['features-about__item-text']}>
                Опис препаратів містить такі важливі характеристики, як склад,
                показання для застосування, дозування, протипоказання, побічні
                ефекти, взаємодії з іншими ліками, термін придатності та інші
                важливі дані.
              </p>
            </div>
          </div>
          <div className={styles['features-about__item']}>
            <div className={styles['features-about__item-img']}>
              <Image
                src={about_2}
                width={'auto'}
                height="auto"
                alt="about us image"
              />
            </div>
            <div className={styles['features-about__item-content']}>
              <p className={styles['features-about__number']}>2</p>
              <p className={styles['features-about__item-title']}>
                Зручність використання
              </p>
              <p className={styles['features-about__item-text']}>
                Простий та зручний у використанні онлайн довідник, який дозволяє
                знайти інформацію про ліки всього за кілька кліків.
              </p>

              <p className={styles['features-about__item-text']}>
                Інформація про ліки організована логічно та структуровано, що
                зробить пошук більш зручним та ефективним.
              </p>
            </div>
          </div>
          <div className={styles['features-about__item']}>
            <div className={styles['features-about__item-img']}>
              <Image
                src={about_3}
                width={'auto'}
                height="auto"
                alt="about us image"
              />
            </div>
            <div className={styles['features-about__item-content']}>
              <p className={styles['features-about__number']}>3</p>
              <p className={styles['features-about__item-title']}>
                Актуальність інформації
              </p>
              <p className={styles['features-about__item-text']}>
                Proliki постійно оновлюється та містить найсвіжішу інформацію
                про ліки.
              </p>
              <p className={styles['features-about__item-text']}>
                Дані про нові ліки, зміни в інструкції з застосування та інші
                важливі оновлення доступні для користувачів негайно.
              </p>
            </div>
          </div>
        </div>
        <div className={styles['meta-about']}>
          <p className={styles['meta-about__label']}>Мета Proliki</p>
          <div className={styles['meta-about__content']}>
            <p>
              Хочемо зробити процес використання ліків більш зрозумілим та
              безпечним для кожного.
            </p>
            <p>
              Нам важливо, щоб Ви мали доступ до надійної та актуальної
              інформації про ліки, щоб знизити ризик неправильного використання
              та запобігти можливим ускладненням.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}
