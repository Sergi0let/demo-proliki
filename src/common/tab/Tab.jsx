import './tab.scss';

const Tab = ({ value, checked }) => {
  return (
    <div className={`tab ${checked ? 'checked' : ''}`} onClick={() => {}}>
      {value}
    </div>
  );
};
export default Tab;
