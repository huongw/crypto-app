import { motion } from "framer-motion";
import { CoinList, Loader } from "../../pages";
import { useState, useEffect } from "react";
import axios from "axios";

const Coins = ({ input, isLoading, setIsLoading, error, setError }) => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=200&page=1&sparkline=false"
      )
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
        <p className="error">
          <strong>{error}</strong>
        </p>
      )}
      {!isLoading && !error && (
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
      )}
    </>
  );
};

export default Coins;
