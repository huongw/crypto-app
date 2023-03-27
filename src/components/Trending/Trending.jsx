import { Error } from "../../pages";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "./Trending.css";
import useFetch from "../../hooks/useFetch";

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

const Trending = () => {
  const { data, error } = useFetch(
    "https://api.coingecko.com/api/v3/search/trending"
  );

  if (error) return <Error message={error} />;

  return (
    <div className="details trending">
      <h3>
        Top trending coins searched by users{" "}
        <span className="grey-color">
          {"("}Last 24h{")"}
        </span>
      </h3>
      <Splide options={{ ...settings }}>
        {data.coins?.map((coin) => {
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
  );
};

export default Trending;
