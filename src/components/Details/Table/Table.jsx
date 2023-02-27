import "./Table.css";
import classNames from "classnames";

const Table = ({ coin }) => {
  const percentClasses = classNames("percentage", {
    negative: coin.market_data?.price_change_percentage_1h_in_currency?.usd < 0,
  });
  const percentClasses2 = classNames("percentage", {
    negative:
      coin.market_data?.price_change_percentage_24h_in_currency?.usd < 0,
  });
  const percentClasses3 = classNames("percentage", {
    negative: coin.market_data?.price_change_percentage_7d_in_currency?.usd < 0,
  });
  const percentClasses4 = classNames("percentage", {
    negative:
      coin.market_data?.price_change_percentage_14d_in_currency?.usd < 0,
  });
  const percentClasses5 = classNames("percentage", {
    negative:
      coin.market_data?.price_change_percentage_30d_in_currency?.usd < 0,
  });
  const percentClasses6 = classNames("percentage", {
    negative: coin.market_data?.price_change_percentage_1y_in_currency?.usd < 0,
  });

  return (
    <table className="details table">
      <thead>
        <tr>
          <th>1h</th>
          <th>24h</th>
          <th>7d</th>
          <th>14d</th>
          <th>30d</th>
          <th>1yr</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className={percentClasses}>
            {coin.market_data?.price_change_percentage_1h_in_currency?.usd?.toFixed(
              2
            )}{" "}
            {coin.market_data?.price_change_percentage_1h_in_currency?.usd
              ? "%"
              : "0 %"}
          </td>
          <td className={percentClasses2}>
            {coin.market_data?.price_change_percentage_24h_in_currency?.usd?.toFixed(
              2
            )}{" "}
            {coin.market_data?.price_change_percentage_24h_in_currency?.usd
              ? "%"
              : "0 %"}
          </td>
          <td className={percentClasses3}>
            {coin.market_data?.price_change_percentage_7d_in_currency?.usd?.toFixed(
              2
            )}{" "}
            {coin.market_data?.price_change_percentage_7d_in_currency?.usd
              ? "%"
              : "0 %"}
          </td>
          <td className={percentClasses4}>
            {coin.market_data?.price_change_percentage_14d_in_currency?.usd?.toFixed(
              2
            )}{" "}
            {coin.market_data?.price_change_percentage_14d_in_currency?.usd
              ? "%"
              : "0 %"}
          </td>
          <td className={percentClasses5}>
            {coin.market_data?.price_change_percentage_30d_in_currency?.usd?.toFixed(
              2
            )}{" "}
            {coin.market_data?.price_change_percentage_30d_in_currency?.usd
              ? "%"
              : "0 %"}
          </td>
          <td className={percentClasses6}>
            {coin.market_data?.price_change_percentage_1y_in_currency?.usd?.toFixed(
              2
            )}{" "}
            {coin.market_data?.price_change_percentage_1y_in_currency?.usd
              ? "%"
              : "0 %"}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;