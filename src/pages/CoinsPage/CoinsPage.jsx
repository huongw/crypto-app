import { useState } from "react";
import { Coins, SearchBar, Header } from "../index";
import "./CoinsPage.css";

const CoinsPage = () => {
  const [input, setInput] = useState("");

  const onInputChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="container">
      <div className="coins-title">
        <h2>
          <span className="logo-color">Crypto</span>currency Prices by Market
          Cap
        </h2>
        <p>
          Our platform is your go-to destination for real-time and accurate data
          on the dynamic cryptocurrency market.
        </p>
      </div>
      <SearchBar onInputChange={onInputChange} />
      <Header />
      <Coins input={input} />
    </div>
  );
};

export default CoinsPage;
