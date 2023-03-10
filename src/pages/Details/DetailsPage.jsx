import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import axios from "axios";
import DOMPurify from "dompurify";
import "./DetailsPage.css";
import { motion } from "framer-motion";
import { Table, Stats, Trending, Loader, Error } from "../index";
import Info from "../../components/Details/Info/Info";

const DetailsPage = ({
  isLoading,
  setIsLoading,
  error,
  setError,
  currency,
}) => {
  const [coin, setCoin] = useState({});
  const params = useParams();
  let navigate = useNavigate();

  const options = { year: "numeric", month: "long", day: "numeric" };
  const date = new Date(coin.last_updated?.split("T")[0]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${params.id}?tickers=false&community_data=false&developer_data=false&sparkline=false`
      )
      .then((res) => setCoin(res.data))
      .catch((err) => {
        console.log(err.message);
        setError("Oops! Too many requests, please try again later.");
      })
      .finally(() => setIsLoading(false));
  }, [params.id]);

  if (isLoading) return <Loader />;

  if (error) return <Error message={error} />;

  return (
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
      <p className="coin_date">
        Last updated: {date.toLocaleDateString("en-US", options)}
      </p>
      <h1 className="details details_name">{coin.name}</h1>
      <Info coin={coin} error={error} setError={setError} currency={currency} />
      <Stats coin={coin} currency={currency} />
      <Table coin={coin} currency={currency} />
      <div className="details details_desc-wrapper">
        <h2>What is {coin.name}?</h2>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(coin.description?.en),
          }}
        ></p>
      </div>
      <Trending error={error} setError={setError} />
    </motion.div>
  );
};

export default DetailsPage;
