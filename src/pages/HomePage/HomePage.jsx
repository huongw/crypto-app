import { About, Discover, Hero, Trending } from "..";
import "./HomePage.css";
import { Loader } from "../";
import { useEffect, useState, useReducer } from "react";
import axios from "axios";
import { INITIAL_STATE, postReducer } from "../../postReducer";

const Home = () => {
  const [trending, setTrending] = useState([]);
  const [coins, setCoins] = useState([]);
  const [state, dispatch] = useReducer(postReducer, INITIAL_STATE);

  useEffect(() => {
    dispatch({ type: "FETCH_START" });
    const cancelToken = axios.CancelToken.source();

    const coinsURL = axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false"
    );
    const trendingURL = axios.get(
      "https://api.coingecko.com/api/v3/search/trending"
    );

    Promise.all([coinsURL, trendingURL], {
      cancelToken: cancelToken.token,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS" });
        setCoins(res[0].data);
        setTrending(res[1].data);
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;

        dispatch({ type: "FETCH_ERROR" });
        console.log(err.message);
      });

    return () => cancelToken.cancel();
  }, []);

  if (state.isLoading) return <Loader />;

  return (
    <div className="home-page">
      <Hero />
      <About />
      {!state.error && (
        <>
          <Discover coins={coins} />
          <Trending trending={trending} />
        </>
      )}
    </div>
  );
};

export default Home;
