import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import DOMPurify from "dompurify";
import { Loader } from "../index";
import "./Details.css";

const Details = ({ isLoading, setIsLoading, error, setError }) => {
  const [coinData, setCoinData] = useState({});
  const params = useParams();

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
      {!isLoading && !error && (
        <div className="details_container">
          <h1 className="details details_name">{coinData.name}</h1>
          <div className="details coin_info">
            <p className="coin_rank">Rank # {coinData.market_cap_rank}</p>
            <p className="coin_name">{coinData.name}</p>
            <p className="coin_symbol">{coinData.symbol}</p>
            <p className="coin_price">
              $ {coinData.market_data?.current_price?.cad} CAD
            </p>
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
        </div>
      )}
    </>
  );
};

export default Details;
