import './letter.scss';

const Letter = ({ value, checked, disabled }) => {
  return (
    <div
      className={`letter ${
        checked ? 'checked' : disabled ? 'disabled checked' : ''
      }`}
    >
      {value}
    </div>
  );
};

export default Letter;
