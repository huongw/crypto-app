import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import ErrorContext from "../context/ErrorContext";
import LoadingContext from "../context/LoadingContext";

const useCoins = () => {
  const [coins, setCoins] = useState([]);
  const { setIsLoading } = useContext(LoadingContext);
  const { setError } = useContext(ErrorContext);

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

  return { coins };
};

export default useCoins;
