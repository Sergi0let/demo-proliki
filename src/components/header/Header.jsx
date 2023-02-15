import './header.scss';
import logo from '../../img/logo/logo-bg.svg';
import Container from '../../layouts/container/Container';
import SearchInput from '../../common/searchInput/SearchInput';
import ChangeLang from '../../common/changeLang/ChangeLang';
import ButtonSee from '../../common/buttonSee/ButtonSee';
import Burger from '../../common/burger/Burger';
import React from 'react';

const Header = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  const closeSideBar = () => {
    setOpen(false);
  };

  const openClass = open ? 'header__menu open' : 'header__menu';

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
            <div className="header__burger">
              <Burger onOpen={handleOpen} onClose={closeSideBar} />
            </div>
          </div>
        </nav>
        <div className="header__mobile-search">
          <SearchInput />
        </div>
        <ul className={openClass}>
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
