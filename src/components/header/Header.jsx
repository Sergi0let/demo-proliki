import './header.scss';
import logo from '../../img/logo/logo-bg.svg';
import Container from '../../layouts/container/Container';
import SearchInput from '../../common/searchInput/SearchInput';
import ChangeLang from '../../common/changeLang/ChangeLang';
import ButtonSee from '../../common/buttonSee/ButtonSee';
import Burger from '../../common/burger/Burger';

const Header = () => {
  return (
    <header className="header">
      <Container>
        <nav className="header__nav">
          <div className="header__search-top">
            <div className="header__logo">
              <img
                className="header__logo-img"
                src={logo}
                alt="Proliki - медичний довідник"
              />
            </div>

            <div className="header__desktop-search">
              <SearchInput />
            </div>
            <ButtonSee />
            <ChangeLang />
            <Burger />
          </div>
          <div className="header__mobile-search">
            <SearchInput />
          </div>

          <ul className="header__menu">
            <li className="header__menu-item">
              <a href="" alt="ATХ классификация">
                ATХ классификация
              </a>
            </li>
            <li className="header__menu-item active">
              <a href="" alt="Активные вещества">
                Активные вещества
              </a>
            </li>
            <li className="header__menu-item">
              <a href="" alt="Аналоги">
                Алфавитный указатель
              </a>
            </li>
            <li className="header__menu-item">
              <a href="" alt="Бренды">
                Новости
              </a>
            </li>
            <li className="header__menu-item">
              <a href="" alt="Виды">
                О нас
              </a>
            </li>
            <li className="header__menu-item">
              <a href="" alt="Группы">
                Контакты
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;

/*
<header>
<nav>
<img src=”logo.svg” width=”” height=”” alt=”Proliki - медичний довідник”>

Поиск

<a alt=”Для слабовидящих”>Для слабовидящих</a>

UA/RU

<ul>
<li><a href=”” alt=”ATХ классификация”>ATХ классификация</a></li>
<li><a href=”” alt=”Активные вещества”>Активные вещества</a></li>
....
</ul>

</nav></header>
*/
