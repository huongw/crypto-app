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

const DetailsPage = () => {
  const [coin, setCoin] = useState({});
  const [chartData, setChartData] = useState([]);
  const [news, setNews] = useState([]);
  const [day, setDay] = useState(7);

  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  let navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const coinURL = axios.get(
      `https://api.coingecko.com/api/v3/coins/${params.id}?tickers=false&community_data=false&developer_data=false&sparkline=false`
    );
    const chartURL = axios.get(
      `https://api.coingecko.com/api/v3/coins/${params.id}/market_chart?vs_currency=usd&days=${day}&interval=daily`
    );
    const newsURL = axios.get(
      "https://bing-news-search1.p.rapidapi.com/news/search",
      {
        params: {
          q: "cryptocurrency, nft",
          safeSearch: "Moderate",
          textFormat: "Raw",
          freshness: "Day",
        },
        headers: {
          "X-BingApis-SDK": "true",
          "X-RapidAPI-Key":
            "bf2daa8bfbmshe079206c8249eb2p1f3700jsn9e012b9fd7e2",
          "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
        },
      }
    );
    axios
      .all([coinURL, chartURL, newsURL], {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(
        axios.spread((...res) => {
          setCoin(res[0].data);
          setChartData(res[1].data.prices);
          setNews(res[2].data.value);
        })
      )
      .catch((err) => setError("Oops, please try again later!"))
      .finally(() => {
        setIsLoading(false);
      });
  }, [params.id, day]);

  const options = { year: "numeric", month: "long", day: "numeric" };
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
      <Info coin={coin} chartData={chartData} setDay={setDay} day={day} />
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
      <News news={news} />
    </motion.div>
  );
};

export default DetailsPage;
