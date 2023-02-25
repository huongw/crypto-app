import classNames from "classnames";

const CoinListItem = ({ id, name, image, percentage, price, volume, mktcap }) => {
  const percentClasses = classNames("percentage", {
    "negative": percentage < 0
  })

  return (
    <div className="coin-row" key={id}>
      <div className="img-wrapper">
        <img src={image} alt={name} />
      </div>
      <p className="coin-name">{name}</p>
      <p>$ {price}</p>
      <p className={percentClasses}>{percentage} %</p>
      <p className="hide-mobile">$ {volume}</p>
      <p className="hide-mobile">$ {mktcap}</p>
    </div>
  );
};

export default CoinListItem;
