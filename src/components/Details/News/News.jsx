import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";

import "./News.css";
import NewsListItem from "./NewsListItem";

const newsImg =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

const News = ({ news }) => {
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
                <NewsListItem item={item} newsImg={newsImg}/>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default News;
