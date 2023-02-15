import React from 'react';
import './burger.scss';

const Burger = ({ onOpen, open }) => {
  const handleBurger = () => {
    onOpen(!open);
  };

  const burgerClass = open ? 'burger active' : 'burger';

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
