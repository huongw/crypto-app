import { useState } from "react";
import { Coins, SearchBar, Header, Error, Loader } from "../index";
import "./CoinsPage.css";
import useFetch from "../../hooks/useFetch";

const CoinsPage = () => {
  const [input, setInput] = useState("");
  const { data, isLoading, error } = useFetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false"
  );

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  if (isLoading) return <Loader />;

  if (error) return <Error />;

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
      <Coins input={input} data={data} />
    </div>
  );
};

export default CoinsPage;
