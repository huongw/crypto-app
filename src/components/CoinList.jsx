import { useEffect, useState } from "react";
import axios from "axios";
import { Loader, CoinListItem } from "../pages";
import { Link } from "react-router-dom";

const CoinList = ({ input, isLoading, setIsLoading, error, setError }) => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=100&page=1&sparkline=false")
      .then((res) => {
        setIsLoading(true);
        setCoins(res.data);
      })
      .catch((err) => {
        console.log(err.message);
        setError("Oops, please try again later!");
      })
      .finally(() => setIsLoading(false));
  }, []);

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <>
      {isLoading && <Loader />}
      {error && (
        <p>
          <strong>{error}</strong>
        </p>
      )}
      {!isLoading &&
        !error &&
        filteredCoins.map((coin) => {
          return (
            <Link key={coin.id} to={`/details/${coin.id}`}>
              <CoinListItem
                name={coin.name}
                image={coin.image}
                percentage={coin.market_cap_change_percentage_24h}
                price={coin.current_price}
                volume={coin.total_volume}
                mktcap={coin.market_cap}
              />
            </Link>
          );
        })}
    </>
  );
};

export default CoinList;
