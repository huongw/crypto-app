import { useEffect, useState, useReducer } from "react";
import axios from "axios";
import { INITIAL_STATE, postReducer } from "../postReducer";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [state, dispatch] = useReducer(postReducer, INITIAL_STATE);

  useEffect(() => {
    dispatch({ type: "FETCH_START" });
    const cancelToken = axios.CancelToken.source();

    axios
      .get(url, { cancelToken: cancelToken.token })
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS" });
        setData(res.data);
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;

        dispatch({ type: "FETCH_ERROR" });
        console.log(err.message);
      });

    return () => cancelToken.cancel();
  }, [url]);

  return { data, error: state.error, isLoading: state.isLoading };
};

export default useFetch;
