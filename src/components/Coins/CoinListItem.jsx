import classNames from "classnames";

const CoinListItem = ({
  id,
  name,
  image,
  percentage,
  price,
  volume,
  mktcap,
}) => {
  const percentClasses = classNames("percentage", {
    negative: percentage < 0,
  });

  return (
    <div className="coin-row" key={id}>
      <div className="coin-name">
        <div className="img-wrapper">
          <img src={image} alt={name} />
        </div>
        <p>{name}</p>
      </div>
      <p>$ {price?.toLocaleString()}</p>
      <p className={percentClasses}>{percentage?.toFixed(2)} %</p>
      <p className="hide-mobile">$ {volume?.toLocaleString()}</p>
      <p className="hide-mobile">$ {mktcap?.toLocaleString()}</p>
    </div>
  );
};

export default CoinListItem;
