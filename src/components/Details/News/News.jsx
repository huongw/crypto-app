import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import axios from "axios";

import "./News.css";
import NewsListItem from "./NewsListItem";
import { useEffect, useState } from "react";

const newsImg =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://bing-news-search1.p.rapidapi.com/news/search?q=cryptocurrency+nft&safeSearch=Moderate&textFormat=Raw&freshness=Day",
        {
          headers: {
            "X-BingApis-SDK": "true",
            "X-RapidAPI-Key": process.env.REACT_APP_NEWS_API_KEY,
            "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
          },
        }
      )
      .then((res) => setNews(res.data.value))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className="details news-container">
      <h2>Latest Crypto News</h2>
      <Swiper
        slidesPerView="3"
        spaceBetween={15}
        freeMode
        centeredSlides
        centeredSlidesBounds
        modules={[FreeMode]}
      >
        {news.map((item) => (
          <SwiperSlide key={item?.name}>
            <div className="news">
              <Link to={item?.url}>
                <NewsListItem item={item} newsImg={newsImg} />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default News;
