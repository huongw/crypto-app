import { About, Discover, Hero, Trending } from "..";
import "./HomePage.css";
import { Loader } from "../";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [trending, setTrending] = useState([]);
  const [coins, setCoins] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
        setCoins(res[0].data);
        setTrending(res[1].data);
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;

        console.log(err.message);
        setError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });

    return () => cancelToken.cancel();
  }, []);

  if (isLoading) return <Loader />;

  return (
    <div className="home-page">
      <Hero />
      <About />
      {!error && (
        <>
          <Discover coins={coins} />
          <Trending trending={trending} />
        </>
      )}
    </div>
  );
};

export default Home;
