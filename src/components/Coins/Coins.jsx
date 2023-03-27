import { motion } from "framer-motion";
import { CoinList, Loader, Error } from "../../pages";
import useFetch from "../../hooks/useFetch";

const Coins = ({ input }) => {
  const { data, isLoading, error } = useFetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false"
  );

  const filteredCoins = data.filter((coin) =>
    coin.name.toLowerCase().includes(input.toLowerCase())
  );

  if (isLoading) return <Loader />;

  if (error) return <Error message={error.message} />;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <CoinList
        filteredCoins={filteredCoins}
      />
    </motion.div>
  );
};

export default Coins;
