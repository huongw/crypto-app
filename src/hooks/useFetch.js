import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);

  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();

    axios
      .get(url, { cancelToken: cancelToken.token })
      .then((res) => {
        setIsLoading(true);
        setData(res.data);
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;
        console.log(err.message);
        setError("Oops! Too many requests, please try again later.");
      })
      .finally(() => setIsLoading(false));

    return () => cancelToken.cancel();
  }, []);

  return { data, error, isLoading };
};

export default useFetch;
