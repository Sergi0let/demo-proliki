import './sortMobile.scss';
import triangle from '../../img/icons/borderTriangle.svg';

const SortMobile = ({ value }) => {
  return (
    <div className="sort-mobile">
      <span className="sort-mobile__container">
        <button className="sort-mobile__up">
          <img src={triangle} alt="Button top" />
        </button>
        <button className="sort-mobile__down">
          <img src={triangle} alt="Button bottom" />
        </button>
      </span>
      <p className="sort-mobile__text">{value}</p>
    </div>
  );
};

export default SortMobile;
