import './farmItem.scss';

const FarmItem = ({ children, card }) => {
  return (
    <div className="farm-item">
      <img src={card} alt={children} />
      <h3>{children}</h3>
    </div>
  );
};

export default FarmItem;
