import './footer.scss';
import facebook from '../../img/link-social/facebook.png';
import instagram from '../../img/link-social/instagram.png';
import Container from '../../layouts/container/Container';

// eslint-disable-next-line no-lone-blocks
{
  /* <footer>
  <section>ProLiki</section>
  <section>Разделы</section>
  <section>Пользователю</section>
  <section>Социальные сети</section>
</footer>; */
}

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__sections sections-footer">
          <section className="sections-footer__items">
            <h2 className="sections-footer__title">ProLiki</h2>
            <p className="sections-footer__text-block">
              Cпециализированное медицинское интернет-издание для врачей,
              провизоров, фармацевтов, студентов медицинских и фармацевтических
              вузов
            </p>
          </section>
          <section className="sections-footer__items">
            <h2 className="sections-footer__title">Разделы</h2>
            <ul className="sections-footer__list">
              <li className="sections-footer__link">
                <a href="#" className="sections-footer__item">
                  ATХ классификация
                </a>
              </li>
              <li className="sections-footer__link">
                <a href="#" className="sections-footer__item">
                  Активные вещества
                </a>
              </li>
              <li className="sections-footer__link">
                <a href="#" className="sections-footer__item">
                  Алфавитный указатель
                </a>
              </li>
              <li className="sections-footer__link">
                <a href="#" className="sections-footer__item">
                  Производители
                </a>
              </li>
              <li className="sections-footer__link">
                <a href="#" className="sections-footer__item">
                  Новости
                </a>
              </li>
            </ul>
          </section>
          <section className="sections-footer__items">
            <h2 className="sections-footer__title">Пользователю</h2>
            <ul>
              <li className="sections-footer__link">
                <a href="#" className="sections-footer__item">
                  Контакты
                </a>
              </li>
              <li className="sections-footer__link">
                <a href="#" className="sections-footer__item">
                  О нас
                </a>
              </li>
              <li className="sections-footer__link">
                <a href="#" className="sections-footer__item">
                  Cоглашение
                </a>
              </li>
              <li className="sections-footer__link">
                <a href="#" className="sections-footer__item">
                  Конфиденциальность
                </a>
              </li>
              <li className="sections-footer__link">
                <a href="#" className="sections-footer__item">
                  Обработка cookie
                </a>
              </li>
            </ul>
          </section>
          <section className="sections-footer__items">
            <h2 className="sections-footer__title">Пользователю</h2>
            <p className="sections-footer__text-block">
              Подпишитесь на соцсети proliki.com.ua, чтобы получать последние
              новости о лекарствах, предупреждения и обновления.
            </p>
            <div className="sections-footer__social-links">
              <a href="#">
                <img
                  className="sections-footer__social-link"
                  src={instagram}
                  alt="Instagram link"
                />
              </a>
              <a href="#">
                <img
                  className="sections-footer__social-link"
                  src={facebook}
                  alt="Facebook link"
                />
              </a>
            </div>
          </section>
        </div>
        <div className="footer__info info-footer">
          <p className="info-footer__text-block">
            © 2022 ProLiki. Уся інформація щодо медичних препаратів, наведена на
            веб-ресурсах «ProLiki», розміщена з метою загального інформування.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
