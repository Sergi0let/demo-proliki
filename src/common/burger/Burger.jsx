import React from 'react';
import './burger.scss';

const Burger = () => {
  const [burger, setBurger] = React.useState(false);

  const handleBurger = () => {
    setBurger(!burger);
  };

  const burgerClass = burger ? 'burger active' : 'burger';

  return (
    <button className={burgerClass} onClick={handleBurger}>
      <div className="burger__block ">
        <div className="burger__line"></div>
        <div className="burger__line"></div>
        <div className="burger__line"></div>
      </div>
    </button>
  );
};

export default Burger;
