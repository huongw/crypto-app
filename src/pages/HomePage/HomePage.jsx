import { Link } from "react-router-dom";
import { Trending } from "..";
import "./HomePage.css";
import { Error, Loader } from "../";
import { BsArrowUpRight, BsArrowDownLeft } from "react-icons/bs";
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
    <div>
      <div className="hero-section">
        <h1>
          Welcome to <span className="logo-color">Crypto</span> Hive!
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
          repudiandae ullam voluptatibus ad incidunt quo magni tempore illo
          beatae officia inventore ducimus sapiente numquam, ex eveniet harum
          amet. Asperiores, harum?
        </p>
      </div>
      <div className="about-section">about</div>
      <div className="about-coins-section">
        <div className="about-coins-wrapper">
          <h2>
            Explore Top Crypto-currencies like: <br />{" "}
            <span className="bitcoin">Bitcoin</span>,{" "}
            <span className="ethereum">Ethereum</span>, and{" "}
            <span className="tether">Tether</span>
          </h2>
          <Link to={"/coins"}>See More Coins</Link>
        </div>
        <div className="coin-wrapper">
          {coins.map((coin) => (
            <div className="coin-row" key={coin.id}>
              <div className="img-wrapper">
                <img src={coin.image} alt={coin.name} />
              </div>
              <h4>{coin.name}</h4>
              <p>${coin.current_price?.toLocaleString()}</p>
              <p
                className={
                  coin.market_cap_change_percentage_24h < 0
                    ? "negative percentage coin"
                    : "percentage coin"
                }
              >
                {coin.market_cap_change_percentage_24h < 0 ? (
                  <BsArrowDownLeft />
                ) : (
                  <BsArrowUpRight />
                )}{" "}
                {coin.market_cap_change_percentage_24h?.toFixed(1)}%
              </p>
            </div>
          ))}
        </div>
      </div>
      <Trending trending={trending} />
    </div>
  );
};

export default Home;
