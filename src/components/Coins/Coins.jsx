import { motion } from "framer-motion";
import { CoinList, Loader, Error } from "../../pages";
import { useState, useEffect } from "react";
import axios from "axios";

const Coins = ({ input, isLoading, setIsLoading, error, setError }) => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false"
      )
      .then((res) => {
        setIsLoading(true);
        setCoins(res.data);
      })
      .catch((err) => {
        console.log(err.message);
        setError("Oops! Too many requests, please try again later.");
      })
      .finally(() => setIsLoading(false));
  }, []);

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(input.toLowerCase())
  );

  if (isLoading) return <Loader />;

  if (error) return <Error message={error} />;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <CoinList
        filteredCoins={filteredCoins}
        isLoading={isLoading}
        err={error}
      />
    </motion.div>
  );
};

export default Coins;
