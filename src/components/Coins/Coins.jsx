import { motion } from "framer-motion";
import { CoinList } from "../../pages";

const Coins = ({ input, data }) => {
  const filteredCoins = data.filter((coin) =>
    coin.name.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <CoinList filteredCoins={filteredCoins} />
    </motion.div>
  );
};

export default Coins;
