import styles from './MenuSort.module.scss';

const MenuSort = ({
  openSort,
  handleOpenSort,
  handleDrugsSort,

  drugsSort,
}) => {
  const sortCheck = (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.33398 10.2615L8.04803 14.9755L17.4761 5.54743"
        stroke="#4D5156"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
  return (
    <div
      style={openSort ? { display: 'block' } : { display: 'none' }}
      className={styles['menu-sort']}
    >
      <div onClick={handleOpenSort} className={styles['menu-sort__bg']}></div>
      <div className={styles['menu-sort__list']}>
        <ul>
          {['По популярности', 'А-я', 'Я-а'].map((item, index) => (
            <li
              key={index}
              onClick={() => {
                handleDrugsSort(item);
                handleOpenSort();
              }}
              className={styles['menu-sort__item']}
            >
              <a
                href="#"
                style={drugsSort === item ? { color: '#4D5156' } : null}
              >
                {item}
              </a>
              {drugsSort === item && sortCheck}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MenuSort;
