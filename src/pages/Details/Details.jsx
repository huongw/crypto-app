import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import axios from "axios";
import DOMPurify from "dompurify";
import { Loader } from "../index";
import "./Details.css";
import { motion } from "framer-motion";
import Trending from "../../components/Trending/Trending";
import Table from "../../components/Table/Table";
import Stats from "../../components/Stats/Stats";

const Details = ({ isLoading, setIsLoading, error, setError }) => {
  const [coinData, setCoinData] = useState({});
  const params = useParams();
  let navigate = useNavigate();

  const options = { year: "numeric", month: "long", day: "numeric" };
  const date = new Date(coinData.last_updated?.split("T")[0]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${params.id}/`)
      .then((res) => setCoinData(res.data))
      .catch((err) => {
        console.log(err.message);
        setError("Oops, please try again later!");
      })
      .finally(() => setIsLoading(false));
  }, [params.id]);

  return (
    <>
      {isLoading && <Loader />}
      {error && (
        <p className="error">
          <strong>{error}</strong>
        </p>
      )}
      {!isLoading && !error && (
        <motion.div
          className="details_container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button onClick={() => navigate(-1)}>
            <BiArrowBack />
            Back
          </button>
          <p className="last_updated">
            Last updated: {date.toLocaleDateString("en-US", options)}
          </p>
          <h1 className="details details_name">{coinData.name}</h1>
          <div className="details coin_info">
            <p className="coin_rank">Rank #{coinData.market_cap_rank}</p>
            <div className="coin-wrapper">
              <div className="wrapper">
                <div className="img-wrapper">
                  <img src={coinData.image?.small} alt={coinData.name} />
                </div>
                <p className="coin_name">{coinData.name}</p>
                <p className="coin_symbol">
                  {"["}
                  {coinData.symbol?.toUpperCase()}/USD{"]"}
                </p>
              </div>
              <div className="coin_price-wrapper">
                <span className="coin_price-title">{coinData.name} Price</span>
                <p className="coin_price">
                  ${coinData.market_data?.current_price?.usd?.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
          <Stats coinData={coinData} />
          <Table coinData={coinData} />
          <div className="details details_desc-wrapper">
            <h2>What is {coinData.name}?</h2>
            <p
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(coinData.description?.en),
              }}
            ></p>
          </div>
          <div className="details trending">
            <h3>
              Top trending coins searched by users{" "}
              <span className="grey-color">
                {"("}Last 24h{")"}
              </span>
            </h3>
            <Trending error={error} setError={setError}/>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Details;
