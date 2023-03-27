import { Link } from "react-router-dom";
import { Trending } from "..";
import "./HomePage.css";
import useFetch from "../../hooks/useFetch";
import { Error, Loader } from "../";
import { RxTriangleUp, RxTriangleDown } from "react-icons/rx";

const Home = () => {
  const { data, isLoading, error } = useFetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false"
  );

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
          {data.map((coin) => (
            <div className="coin-row" key={coin.id}>
              <div className="img-wrapper">
                <img src={coin.image} alt={coin.name} />
              </div>
              <h3>{coin.name}</h3>
              <p>
                ${coin.current_price?.toLocaleString()}
              </p>
              <p
                className={
                  coin.market_cap_change_percentage_24h < 0
                    ? "negative percentage coin"
                    : "percentage coin"
                }
              >
                {coin.market_cap_change_percentage_24h < 0 ? (
                  <RxTriangleDown />
                ) : (
                  <RxTriangleUp />
                )}{" "}
                {coin.market_cap_change_percentage_24h?.toFixed(1)}%
              </p>
            </div>
          ))}
        </div>
      </div>
      <Trending />
    </div>
  );
};

export default Home;
