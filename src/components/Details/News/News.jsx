import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";

import "./News.css";

const newsImg =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

const News = ({ news }) => {
  console.log(news);
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
                <div className="flex-wrapper flex-provider">
                  <p className="provider">{item?.provider[0]?.name}</p>
                  <div className="img-wrapper">
                    <img
                      src={item?.provider[0]?.image?.thumbnail?.contentUrl}
                    />
                  </div>
                </div>
                <div className="flex-wrapper">
                  <img
                    src={item?.image?.thumbnail?.contentUrl || newsImg}
                    alt=""
                  />
                  <h3>{item?.name}</h3>
                </div>
                <p className="desc">{item?.description}</p>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default News;
