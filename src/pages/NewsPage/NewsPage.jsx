import "./NewsPage.css";
import axios from "axios";
import { useEffect, useState } from "react";
import DailyNewsItem from "../../components/DailyNews/DailyNewsItem";
import { Error, Loader } from "../";

const NewsPage = () => {
  const [topNews, setTopNews] = useState([]);
  const [nftNews, setNftNews] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();

    const topNewsURL = axios.get(
      "https://bing-news-search1.p.rapidapi.com/news/search?q=cryptocurrency&count=5",
      {
        cancelToken: cancelToken.token,
        headers: {
          "Content-Type": "application/json",
          "X-BingApis-SDK": "true",
          "X-RapidAPI-Key": process.env.REACT_APP_NEWS_API_KEY,
          "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
        },
      }
    );
    const nftNewsURL = axios.get(
      "https://bing-news-search1.p.rapidapi.com/news/search?q=nft&count=5",
      {
        cancelToken: cancelToken.token,
        headers: {
          "Content-Type": "application/json",
          "X-BingApis-SDK": "true",
          "X-RapidAPI-Key": process.env.REACT_APP_NEWS_API_KEY,
          "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
        },
      }
    );

    Promise.all([topNewsURL, nftNewsURL])
      .then((res) => {
        setTopNews(res[0].data.value);
        setNftNews(res[1].data.value);
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;

        console.log(err.message);
        setError("Oops, there was an error! Please try again later.");
      })
      .finally(() => setIsLoading(false));

    return () => cancelToken.cancel();
  }, []);

  if (isLoading) return <Loader />;

  if (error) return <Error message={error} />;

  return (
    <div className="crypto-news container">
      <div className="crypto-news-container">
        <div className="box-1 box">
          <h2>Crypto News</h2>
          <ul style={{ display: "block" }}>
            {topNews.map((item) => {
              return <DailyNewsItem item={item} key={item?.name} />;
            })}
          </ul>
        </div>

        <aside className="box-2 box">
          <h2>NFT News</h2>
          <ul style={{ display: "block" }}>
            {nftNews.map((item) => {
              return <DailyNewsItem item={item} key={item?.name} />;
            })}
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default NewsPage;
