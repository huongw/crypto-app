import React from "react";

const Select = ({ onCurrencyChange, currency }) => {
  return (
    <select value={currency} onChange={onCurrencyChange}>
      <option value="usd">USD</option>
      <option value="cad">CAD</option>
      <option value="eur">EUR</option>
      <option value="gbp">GBP</option>
      <option value="hkd">HKD</option>
      <option value="aud">AUD</option>
      <option value="brl">BRL</option>
    </select>
  );
};

export default Select;
