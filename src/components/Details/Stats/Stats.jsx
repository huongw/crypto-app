import "./Stats.css";
import formatNumber from "../../../helpers/formatNumber";
import Hover from "./Hover";

const Stats = ({ coin }) => {
  function formatDate(timestamp) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(timestamp?.split("T")[0]);

    return date.toLocaleDateString("en-US", options);
  }

  return (
    <div className="details">
      <h2>{coin.symbol?.toUpperCase()} Price Statistics</h2>
      <div>
        <div className="stats stats_lh">
          <h4>24h Low / 24h High</h4>$
          {coin.market_data?.low_24h?.usd?.toLocaleString()} / $
          {coin.market_data?.high_24h?.usd?.toLocaleString()}
        </div>
        <hr />
        <div className="stats stats_mc">
          <h4>
            Market Cap
            <Hover
              text={`Market Cap = Current Price x Circulating Supply
              
              Refers to the total market value of a cryptocurrency's circulating supply. 
              It is similar to the stock market's measurement of multiplying price per share by shares readily available in the market (not held & locked by insiders, governments)`}
            />
          </h4>
          ${coin.market_data?.market_cap?.usd?.toLocaleString()}
        </div>
        <hr />
        <div className="stats stats_mc">
          <h4>
            Circulating Supply
            <Hover
              text={`The amount of coins that are circulating in the market and are tradeable by the public. It is comparable to looking at shares readily available in the market (not held & locked by insiders, governments).`}
            />
          </h4>
          ${coin.market_data?.circulating_supply?.toLocaleString()}
        </div>
        <hr />
        <div className="stats stats_mc">
          <h4>
            Total Supply
            <Hover
              text={`The amount of coins that have already been created, minus any coins that have been burned (removed from circulation). It is comparable to outstanding shares in the stock market.

              Total Supply = Onchain supply - burned tokens`}
            />
          </h4>
          ${coin.market_data?.total_supply?.toLocaleString()}
        </div>
        <hr />
        <div className="stats stats_mc">
          <h4>
            Max Supply
            <Hover
              text={`The maximum number of coins coded to exist in the lifetime of the cryptocurrency. It is comparable to the maximum number of issuable shares in the stock market.

              Max Supply = Theoretical maximum as coded`}
            />
          </h4>
          ${coin.market_data?.max_supply?.toLocaleString()}
        </div>
        <hr />
        <div className="stats stats_atlh">
          <h4>All-Time High</h4>
          <div>
            <p>
              ${coin.market_data?.ath?.usd?.toLocaleString()}{" "}
              <span
                className={
                  coin.market_data?.ath_change_percentage?.usd < 0
                    ? "negative percentage atp"
                    : "percentage atp"
                }
              >
                {formatNumber(coin.market_data?.ath_change_percentage?.usd)}%
              </span>
            </p>
            <p className="coin_date stats">
              {formatDate(coin.market_data?.ath_date?.usd)}
            </p>
          </div>
        </div>
        <hr />
        <div className="stats stats_atlh">
          <h4>All-Time Low</h4>
          <div>
            <p>
              ${coin.market_data?.atl?.usd?.toLocaleString()}{" "}
              <span
                className={
                  coin.market_data?.atl_change_percentage?.usd < 0
                    ? "negative percentage atp"
                    : "percentage atp"
                }
              >
                {formatNumber(coin.market_data?.atl_change_percentage?.usd)}%
              </span>
            </p>
            <p className="coin_date stats">
              {formatDate(coin.market_data?.atl_date?.usd)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
