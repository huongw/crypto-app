import { CoinListItem } from "../../pages";
import { Link } from "react-router-dom";

const CoinList = ({ filteredCoins }) => {
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
