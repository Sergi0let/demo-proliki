import './pagination.scss';

import arrow from '../../img/icons/arrow.svg';

export const PaginationArrow = ({ value }) => {
  return (
    <button className={`pagination-tab ${value === 'endBtn' ? 'endBtn' : ''}`}>
      <img src={arrow} alt="Button previous" />
    </button>
  );
};

export const Pagination = ({ checked, value }) => {
  return (
    <button className={`pagination-tab ${checked ? 'checked ' : ''}`}>
      {value}
    </button>
  );
};

export default Pagination;
