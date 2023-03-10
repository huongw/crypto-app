import "./Info.css";
import Chart from "../Chart/Chart";

const Info = ({ coin, error, setError, currency }) => {
  return (
    <div className="details coin_info">
      <p className="coin_rank">Rank #{coin.market_cap_rank}</p>
      <div className="coin-wrapper">
        <div className="wrapper">
          <div className="img-wrapper">
            <img src={coin.image?.small} alt={coin.name} />
          </div>
          <p className="coin_symbol">
            {"["}
            {coin.symbol?.toUpperCase()}/{currency?.toUpperCase()}
            {"]"}
          </p>
        </div>
        <div className="coin_price-wrapper">
          <span className="coin_price-title">Current Price</span>
          <p className="coin_price">
            ${coin.market_data?.current_price?.[`${currency}`]?.toLocaleString()}
          </p>
        </div>
      </div>
      <hr />
      <Chart
        coin={coin}
        error={error}
        setError={setError}
        currency={currency}
      />
    </div>
  );
};

export default Info;
