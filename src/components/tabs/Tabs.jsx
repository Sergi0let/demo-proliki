import React, { useState } from 'react';
import classNames from 'classnames';
import './tabs.scss';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('item1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <ul className="tabs">
      <li
        className={classNames('tabs__item', {
          'tabs__item active': activeTab === 'item1',
        })}
        onClick={() => handleTabClick('item1')}
      >
        О препарате
      </li>
      <li
        className={classNames('tabs__item', {
          'tabs__item active': activeTab === 'item2',
        })}
        onClick={() => handleTabClick('item2')}
      >
        Инструкция
      </li>
      <li
        className={classNames('tabs__item', {
          'tabs__item active': activeTab === 'item3',
        })}
        onClick={() => handleTabClick('item3')}
      >
        Аналоги (16)
      </li>
      <li
        className={classNames('tabs__item', {
          'tabs__item active': activeTab === 'item4',
        })}
        onClick={() => handleTabClick('item4')}
      >
        Диагнозы
      </li>
      <li
        className={classNames('tabs__item', {
          'tabs__item active': activeTab === 'item5',
        })}
        onClick={() => handleTabClick('item5')}
      >
        Формы выпуска (3)
      </li>
    </ul>
  );
};

export default Tabs;
