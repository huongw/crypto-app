import { Link } from "react-router-dom";
import { BsArrowUpRight, BsArrowDownLeft } from "react-icons/bs";
import "./Discover.css";

const Discover = ({ coins }) => {
  return (
    <div className="about-coins-section">
      <div className="about-coins-wrapper">
        <h2>
          Explore Top Crypto-currencies like: <br />{" "}
          <span className="bitcoin">Bitcoin</span>,{" "}
          <span className="ethereum">Ethereum</span>, and{" "}
          <span className="tether">Tether</span>
        </h2>
        <Link to={"/coins"}>Discover More</Link>
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
  );
};

export default Discover;
