import React from "react";

const Header = () => {
  return (
    <div className="header">
      <p>#</p>
      <p>Coin</p>
      <p>Price</p>
      <p>24h</p>
      <p className="hide-mobile">Volume</p>
      <p className="hide-mobile">Mkt Cap</p>
    </div>
  );
};

export default Header;
