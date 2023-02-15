import './App.scss';
import Footer from './components/footer/Footer';
import Checkbox from './common/checkbox/Checkbox';
import Logo from './common/logo/Logo';
import RadioBtn from './common/radioBtn/RadioBtn';
import Letter from './common/letter/Letter';
import Tab from './common/tab/Tab';
import Pagination, { PaginationArrow } from './common/pagination/Pagination';
import Sort from './common/sort/Sort';
import SortMobile from './common/sort/SortMobile';
import {
  BigButton,
  SecondaryButton,
  SmallButton,
} from './common/Button/Button';
import Container from './layouts/container/Container';
import Tabs from './components/tabs/Tabs';
import EmailInput from './common/emailInput/EmailInput';
import NewsItem from './components/NewsItem/NewsItem';
import Header from './components/header/Header';
import BgMain from './components/bgMain/BgMain';
import React from 'react';

// import images
import image from './img/news/news-1.jpg';

function App() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  const closeSideBar = () => {
    setOpen(false);
  };

  const openClass = open ? 'header__menu open' : 'header__menu';

  return (
    <div className="App">
      <Container>
        <Header
          onOpen={handleOpen}
          onClose={closeSideBar}
          openClass={openClass}
          open={open}
        />

        <div onClick={closeSideBar} style={{ opacity: open ? '0.2' : '' }}>
          <BgMain />

          <Logo />
          <div style={{ marginTop: '40px' }}>
            <span className="regular">Golos Regular</span>
            <span className="medium">Golos Medium</span>
            <span className="bold">Golos Bold</span>
          </div>
          <div>
            <p>radiobutton</p>
            <RadioBtn label={'ABC'} name="radio" />
            <RadioBtn label={'ABC'} name="radio" />
            <RadioBtn label={'ABC'} name="radio" />
          </div>
          <div>
            <p>Checkbox</p>
            <Checkbox label="Checkbox" />
            <Checkbox label="Checkbox" />
            <Checkbox label="Checkbox" checked />
          </div>
          <div>
            <p>Letter</p>
            <Letter value={'A'} />
            <Letter value={'A'} checked />
            <Letter value={'A'} />
          </div>
          <div>
            <p>Tab</p>
            <Tab value={'Препараты'} checked />
            <Tab value={'Производители'} />
            <Tab value={'Активные вещества'} />
          </div>
          <div className="pagination-row">
            <p>Pagination</p>
            <PaginationArrow />
            <Pagination value={'1'} checked />
            <Pagination value={'2'} />
            <Pagination value={'...'} />
            <Pagination value={'12'} />
            <PaginationArrow value={'endBtn'} />
          </div>
          <div>
            <p>Sort</p>
            <Sort value={'По популярности'} className="checked" />
            <Sort value={'А-я'} />
            <Sort value={'Я-а'} />
          </div>
          <div>
            <p>Sort_mobile</p>
            <SortMobile value={'По популярности'} />
          </div>
          <div>
            <p>BigButton</p>
            <BigButton>Цены в аптеках</BigButton>
            <BigButton>Цены в аптеках</BigButton>
            <BigButton className="active">Цены в аптеках</BigButton>
          </div>
          <div>
            <p>BigButtonIcon</p>
            <BigButton icon={true} className="icon">
              Цены в аптеках
            </BigButton>
            <BigButton icon={true} className="icon">
              Цены в аптеках
            </BigButton>
            <BigButton icon={true} className="active">
              Цены в аптеках
            </BigButton>
          </div>
          <div>
            <p>BigButtonIcon</p>
            <SecondaryButton className="icon">Аналоги</SecondaryButton>
            <SecondaryButton className="icon active">Аналоги</SecondaryButton>
            <SecondaryButton icon={true} className=" icon">
              Показать еще
            </SecondaryButton>
            <SecondaryButton icon={true} className="active icon">
              Показать еще
            </SecondaryButton>
          </div>
          <div>
            <p>Small button</p>
            <SmallButton>Инструкция</SmallButton>
            <SmallButton>Инструкция</SmallButton>
            <SmallButton className="active">Инструкция</SmallButton>
          </div>

          <Tabs />

          <EmailInput placeholder="Ваш e-mail" type="email" />

          <NewsItem
            image={image}
            category="Категорія"
            date="2 марта 2021"
            alt="рекомендации по составу вакцин против гриппа"
          >
            ЕМА опубликовало рекомендации по составу вакцин против гриппа на
            2021г.
          </NewsItem>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
