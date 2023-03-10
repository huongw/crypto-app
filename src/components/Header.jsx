import React from "react";

const Header = () => {
  return (
    <div className="header">
      <p className="rank">#</p>
      <p className="coin-name">Coin</p>
      <p className="coin-price">Price</p>
      <p className="home percentage coin-percentage">24h</p>
      <p className="hide-mobile volume">Volume</p>
      <p className="hide-mobile cap">Mkt Cap</p>
    </div>
  );
};

export default Header;
