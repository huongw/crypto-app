import React from "react";

const NewsListItem = ({ item, newsImg }) => {
  const date = new Date(item?.datePublished);
  const hours = date.getHours();
  return (
    <>
      <div className="flex-wrapper flex-provider">
        <p className="provider">{item?.provider[0]?.name}</p>
        <div className="img-wrapper">
          <img src={item?.provider[0]?.image?.thumbnail?.contentUrl} />
        </div>
      </div>
      <div className="flex-wrapper">
        <img src={item?.image?.thumbnail?.contentUrl || newsImg} alt="" />
        <h3>{item?.name}</h3>
      </div>
      <p className="desc">{item?.description}</p>
      <span className="hours">
        {hours} {hours > 1 || hours === 0 ? "hours" : "hour"} ago
      </span>
    </>
  );
};

export default NewsListItem;
