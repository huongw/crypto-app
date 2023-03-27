import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import DOMPurify from "dompurify";
import "./DetailsPage.css";
import { motion } from "framer-motion";
import { Table, Stats, Loader, Error, News } from "../index";
import Info from "../../components/Details/Info/Info";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const options = { year: "numeric", month: "long", day: "numeric" };

const DetailsPage = () => {
  const [coin, setCoin] = useState({});

  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  let navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();

    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${params.id}?tickers=false&community_data=false&developer_data=false&sparkline=false`,
        {
          cancelToken: cancelToken.token,
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setCoin(res.data);
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;

        console.log(err.message);
        setError("Oops, please try again later!");
      })
      .finally(() => setIsLoading(false));

    return () => cancelToken.cancel();
  }, [params.id]);

  const date = new Date(coin.last_updated?.split("T")[0]);

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
      <Info coin={coin} />
      <Stats coin={coin} />
      <Table coin={coin} />
      <div className="details details_desc-wrapper">
        <h2>What is {coin.name}?</h2>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(coin.description?.en),
          }}
        ></p>
      </div>
      <News />
    </motion.div>
  );
};

export default DetailsPage;
