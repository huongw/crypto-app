import React, { useEffect, useState } from "react";
import axios from "axios";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "./Trending.css";

const settings = {
  perPage: 3,
  arrows: true,
  pagination: false,
  drag: "free",
  gap: "1em",
  breakpoints: {
    800: {
      perPage: 2,
    },
    400: {
      perPage: 1,
    },
  },
};

const Trending = ({ error, setError }) => {
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/search/trending")
      .then((res) => setTrendingCoins(res.data.coins))
      .catch((err) => {
        console.log(err.message);
        setError("Oops! Too many requests, please try again later.");
      });
  }, []);

  return (
    <>
      {error && (
        <p className="error">
          <strong>{error}</strong>
        </p>
      )}
      {!error && (
        <div className="details trending">
          <h3>
            Top trending coins searched by users{" "}
            <span className="grey-color">
              {"("}Last 24h{")"}
            </span>
          </h3>
          <Splide options={{ ...settings }}>
            {trendingCoins.map((coin) => {
              const coinItem = coin.item;

              return (
                <SplideSlide key={coinItem?.id}>
                  <p>
                    {coinItem?.name}{" "}
                    <span>
                      {"["}
                      {coinItem?.symbol}
                      {"]"}
                    </span>
                  </p>

                  <div className="img-wrapper trending">
                    <img src={coinItem?.large} alt={coinItem?.name} />
                  </div>
                  <p className="coin_rank trending">
                    Rank #{coinItem?.market_cap_rank}
                  </p>
                </SplideSlide>
              );
            })}
          </Splide>
        </div>
      )}
    </>
  );
};

export default Trending;
