import { motion } from "framer-motion";
import { CoinList, Loader, Error } from "../../pages";
import useFetchCoins from "../../hooks/useFetchCoins";
import { useContext } from "react";
import ErrorContext from "../../context/ErrorContext";
import LoadingContext from "../../context/LoadingContext";

const Coins = ({ input }) => {
  const { coins } = useFetchCoins();
  const { isLoading } = useContext(LoadingContext);
  const { error } = useContext(ErrorContext);

  const filteredCoins = coins.filter((coin) =>
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
        isLoading={isLoading}
        err={error}
      />
    </motion.div>
  );
};

export default Coins;
