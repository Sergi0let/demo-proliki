import './sort.scss';

const Sort = ({ value, className }) => {
  return <button className={`sort ${className}`}>{value}</button>;
};

export default Sort;
