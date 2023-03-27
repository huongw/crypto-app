import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);

  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then((res) => {
        setIsLoading(true);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err.message);
        setError("Oops! Too many requests, please try again later.");
      })
      .finally(() => setIsLoading(false));
  }, []);

  

  return { data, error, isLoading };
};

export default useFetch;
