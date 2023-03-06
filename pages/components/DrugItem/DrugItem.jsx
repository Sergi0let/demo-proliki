import styles from './DrugItem.module.scss';

const DrugItem = (props) => {
  return (
    <article>
      <ul>
        <a href="#">Proliki</a>
        <a href="#">Лікарські препарати</a>
      </ul>
      <h1>Ібупрофен</h1>
      <ul>
        <li>
          <a href="#">Про препарат</a>
        </li>
        <li>
          <a href="#">Інструкція</a>
        </li>
        <li>
          <a href="#">Аналоги</a>
        </li>
        <li>
          <a href="#">Форма випуску</a>
        </li>
      </ul>
      <section>
        <picture>
          <source
            srcset="../../../public/img/drugs/ibuprofen/ibuprofen-768.jpg"
            media="(min-width: 768px)"
          />
          <source
            srcset="../../../public/img/drugs/ibuprofen/ibuprofen-992.jpg"
            media="(min-width: 1024px)"
          />
          <source
            srcset="../../../public/img/drugs/ibuprofen/ibuprofen-992.jpg"
            media="(min-width: 1024px)"
          />
          <img
            src="../../../public/img/drugs/ibuprofen/ibuprofen-320.jpg"
            alt="Ібупрофен"
          />
        </picture>
      </section>
    </article>
  );
};
