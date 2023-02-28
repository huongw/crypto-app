import { RxTriangleUp, RxTriangleDown } from "react-icons/rx";

const CoinListItem = ({
  id,
  name,
  image,
  percentage,
  price,
  volume,
  mktcap,
}) => {
  return (
    <div className="coin-row" key={id}>
      <div className="coin-name">
        <div className="img-wrapper">
          <img src={image} alt={name} />
        </div>
        <p>{name}</p>
      </div>
      <p>$ {price?.toLocaleString()}</p>
      <p
        className={
          percentage < 0 ? "negative percentage home" : "percentage home"
        }
      >
        {percentage < 0 ? <RxTriangleDown /> : <RxTriangleUp />}
        {percentage?.toFixed(1)} %
      </p>
      <p className="hide-mobile">$ {volume?.toLocaleString()}</p>
      <p className="hide-mobile">$ {mktcap?.toLocaleString()}</p>
    </div>
  );
};

export default CoinListItem;
