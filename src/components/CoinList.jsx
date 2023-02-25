import { useContext } from "react";
import CoinsContext from "../CoinsContext";

import CoinListItem from "./CoinListItem";
import { Link } from "react-router-dom";

const CoinList = ({ input }) => {
  const { coins } = useContext(CoinsContext);

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <>
      {filteredCoins.map((coin) => {
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
