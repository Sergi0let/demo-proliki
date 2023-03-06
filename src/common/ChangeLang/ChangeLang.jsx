import { useState } from 'react';
import style from './ChangeLang.module.scss';

const ChangeLang = () => {
  const [isLang, setIsLang] = useState('UA');

  const changeLang = (e) => {
    setIsLang(e.target.textContent);
  };

  const colorUa = isLang === 'UA' ? '#d3dce9' : '#0058e9';
  const colorRU = isLang === 'RU' ? '#d3dce9' : '#0058e9';

  const disabledUA = isLang === 'UA' ? true : false;
  const disabledRU = isLang === 'RU' ? true : false;

  return (
    <ul className={style.langSwitch}>
      <button
        disabled={disabledUA}
        style={{ color: colorUa }}
        onClick={changeLang}
      >
        UA
      </button>
      <button
        disabled={disabledRU}
        style={{ color: colorRU }}
        onClick={changeLang}
      >
        RU
      </button>
    </ul>
  );
};

export default ChangeLang;
