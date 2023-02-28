import "./Table.css";

const Table = ({ coin }) => {
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
          <td
            className={
              coin.market_data?.price_change_percentage_1h_in_currency?.usd < 0
                ? "negative percentage"
                : "percentage"
            }
          >
            {coin.market_data?.price_change_percentage_1h_in_currency?.usd?.toFixed(
              1
            )}{" "}
            {coin.market_data?.price_change_percentage_1h_in_currency?.usd
              ? "%"
              : "0 %"}
          </td>
          <td
            className={
              coin.market_data?.price_change_percentage_24h_in_currency?.usd < 0
                ? "negative percentage"
                : "percentage"
            }
          >
            {coin.market_data?.price_change_percentage_24h_in_currency?.usd?.toFixed(
              1
            )}{" "}
            {coin.market_data?.price_change_percentage_24h_in_currency?.usd
              ? "%"
              : "0 %"}
          </td>
          <td
            className={
              coin.market_data?.price_change_percentage_7d_in_currency?.usd < 0
                ? "negative percentage"
                : "percentage"
            }
          >
            {coin.market_data?.price_change_percentage_7d_in_currency?.usd?.toFixed(
              1
            )}{" "}
            {coin.market_data?.price_change_percentage_7d_in_currency?.usd
              ? "%"
              : "0 %"}
          </td>
          <td
            className={
              coin.market_data?.price_change_percentage_14d_in_currency?.usd < 0
                ? "negative percentage"
                : "percentage"
            }
          >
            {coin.market_data?.price_change_percentage_14d_in_currency?.usd?.toFixed(
              1
            )}{" "}
            {coin.market_data?.price_change_percentage_14d_in_currency?.usd
              ? "%"
              : "0 %"}
          </td>
          <td
            className={
              coin.market_data?.price_change_percentage_30d_in_currency?.usd < 0
                ? "negative percentage"
                : "percentage"
            }
          >
            {coin.market_data?.price_change_percentage_30d_in_currency?.usd?.toFixed(
              1
            )}{" "}
            {coin.market_data?.price_change_percentage_30d_in_currency?.usd
              ? "%"
              : "0 %"}
          </td>
          <td
            className={
              coin.market_data?.price_change_percentage_1y_in_currency?.usd < 0
                ? "negative percentage"
                : "percentage"
            }
          >
            {coin.market_data?.price_change_percentage_1y_in_currency?.usd?.toFixed(
              1
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
