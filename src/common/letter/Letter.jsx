import './letter.scss';

const Letter = ({ value, checked }) => {
  return <div className={`letter ${checked ? 'checked ' : ''}`}>{value}</div>;
};

export default Letter;
