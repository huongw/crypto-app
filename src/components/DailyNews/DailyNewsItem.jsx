import { Link } from "react-router-dom";
import "./DailyNews.css";

const DailyNewsItem = ({ item }) => {
  const date = new Date(item?.datePublished);
  const hours = date.getHours();

  return (
    <li>
      <Link to={item?.url} target="_blank">
        <div className="flex-wrapper flex-provider">
          <p className="provider">{item?.provider[0]?.name}</p>
          <div className="img-wrapper">
            <img src={item?.provider[0]?.image?.thumbnail?.contentUrl} />
          </div>
        </div>
        <div className="flex-wrapper">
          {item?.image?.thumbnail?.contentUrl && (
            <img
              src={item?.image?.thumbnail?.contentUrl}
              style={{ maxWidth: "100px" }}
              alt={item?.name}
            />
          )}
          <h3>{item?.name}</h3>
        </div>
        <span className="hours">
          {hours} {hours > 1 || hours === 0 ? "hours" : "hour"} ago
        </span>
      </Link>
    </li>
  );
};

export default DailyNewsItem;
