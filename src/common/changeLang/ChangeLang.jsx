import { useState } from 'react';
import './changeLang.scss';

const ChangeLang = () => {
  const [lang, setLang] = useState('ua');

  console.log('lang', lang);

  const changeLang = (e) => {
    const lang = e.target.classList[1].split('-')[1];
    setLang(lang);
  };

  const classBtnUa =
    lang === 'ua'
      ? 'change-lang__btn btn-ua active'
      : 'change-lang__btn btn-ua';

  const classBtnRu =
    lang === 'ru'
      ? 'change-lang__btn btn-ru active'
      : 'change-lang__btn btn-ru';

  return (
    <div className="change-lang">
      <button onClick={changeLang} className={classBtnUa}>
        UA
      </button>
      <button onClick={changeLang} className={classBtnRu}>
        RU
      </button>
    </div>
  );
};

export default ChangeLang;
