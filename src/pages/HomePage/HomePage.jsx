import { About, Discover, Hero, Trending } from "..";
import "./HomePage.css";
import { Error, Loader } from "../";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [trending, setTrending] = useState([]);
  const [coins, setCoins] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const coinsURL = axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false"
    );
    const trendingURL = axios.get(
      "https://api.coingecko.com/api/v3/search/trending"
    );

    axios
      .all([coinsURL, trendingURL], {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(
        axios.spread((...res) => {
          setCoins(res[0].data);
          setTrending(res[1].data);
        })
      )
      .catch((err) => {
        console.log(err.message);
        setError("Oops, something went wrong! Please try again later.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <Loader />;

  if (error) return <Error message={error} />;

  return (
    <div className="home-page">
      <Hero />
      <About />
      <Discover coins={coins} />
      <Trending trending={trending} />
    </div>
  );
};

export default Home;
