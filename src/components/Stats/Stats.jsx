import React from "react";

const Stats = ({ coinData }) => {
  console.log(coinData.market_data?.low_24h?.usd)
  return <div className="details">
    <h2>{coinData.symbol?.toUpperCase()} Price Statistics</h2>
  </div>;
};

export default Stats;
