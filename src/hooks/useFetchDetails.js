import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import ErrorContext from "../context/ErrorContext";
import LoadingContext from "../context/LoadingContext";

const useFetchDetails = () => {
  const [coin, setCoin] = useState({});
  const params = useParams();
  const { setError } = useContext(ErrorContext);
  const { setIsLoading } = useContext(LoadingContext);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${params.id}?tickers=false&community_data=false&developer_data=false&sparkline=false`
      )
      .then((res) => setCoin(res.data))
      .catch((err) => {
        console.log(err.message);
        setError("Oops! Too many requests, please try again later.");
      })
      .finally(() => setIsLoading(false));
  }, [params.id]);

  return { coin };
};

export default useFetchDetails;
