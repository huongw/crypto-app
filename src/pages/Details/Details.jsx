import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import axios from "axios";
import DOMPurify from "dompurify";
import { Loader } from "../index";
import "./Details.css";
import { motion } from "framer-motion";

const Details = ({ isLoading, setIsLoading, error, setError }) => {
  const [coinData, setCoinData] = useState({});
  const params = useParams();
  let navigate = useNavigate();

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
          <h1 className="details details_name">{coinData.name}</h1>
          <div className="details coin_info">
            <p className="coin_rank">Rank #{coinData.market_cap_rank}</p>
            <div className="coin-wrapper">
              <div className="wrapper">
                <img src={coinData.image?.small} alt="" />
                <p className="coin_name">{coinData.name}</p>
                <p className="coin_symbol">
                  ({coinData.symbol?.toUpperCase()}/USD)
                </p>
              </div>
              <p className="coin_price">
                $ {coinData.market_data?.current_price?.usd.toLocaleString()}
              </p>
            </div>
          </div>
          <div className="details details_desc-wrapper">
            <h2>About {coinData.name}</h2>
            <p
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  coinData.description && coinData.description.en
                ),
              }}
            ></p>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Details;
