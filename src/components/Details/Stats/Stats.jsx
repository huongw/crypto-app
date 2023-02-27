import "./Stats.css";
import classNames from "classnames";

const Stats = ({ coin }) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const date = new Date(coin.market_data?.atl_date?.usd?.split("T")[0]);
  const date2 = new Date(coin.market_data?.ath_date?.usd?.split("T")[0]);

  const percentClasses = classNames("percentage atp", {
    negative: coin.market_data?.atl_change_percentage?.usd < 0,
  });
  const percentClasses2 = classNames("percentage atp", {
    negative: coin.market_data?.ath_change_percentage?.usd < 0,
  });
  return (
    <div className="details">
      <h2>{coin.symbol?.toUpperCase()} Price Statistics</h2>
      <div>
        <div className="stats stats_lh">
          <h4>24h Low / 24h High</h4>${" "}
          {coin.market_data?.low_24h?.usd?.toLocaleString()} / ${" "}
          {coin.market_data?.high_24h?.usd?.toLocaleString()}
        </div>
        <hr />
        <div className="stats stats_mc">
          <h4>Market Cap</h4>${" "}
          {coin.market_data?.market_cap?.usd?.toLocaleString()}
        </div>
        <hr />
        <div className="stats stats_mc">
          <h4>Total Volume</h4>${" "}
          {coin.market_data?.total_volume?.usd?.toLocaleString()}
        </div>
        <hr />
        <div className="stats stats_atlh">
          <h4>All-Time Low</h4>
          <div>
            <p>
              $ {coin.market_data?.atl?.usd?.toLocaleString()}{" "}
              <span className={percentClasses}>
                {coin.market_data?.atl_change_percentage?.usd?.toFixed(2)} %
              </span>
            </p>
            <p className="coin_date stats">
              {date.toLocaleDateString("en-US", options)}
            </p>
          </div>
        </div>
        <hr />
        <div className="stats stats_atlh">
          <h4>All-Time High</h4>
          <div>
            <p>
              $ {coin.market_data?.ath?.usd?.toLocaleString()}{" "}
              <span className={percentClasses2}>
                {coin.market_data?.ath_change_percentage?.usd?.toFixed(2)} %
              </span>
            </p>
            <p className="coin_date stats">
              {date2.toLocaleDateString("en-US", options)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
