import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import DOMPurify from "dompurify";
import "./DetailsPage.css";
import { motion } from "framer-motion";
import { Table, Stats, Loader, Error } from "../index";
import Info from "../../components/Details/Info/Info";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const DetailsPage = () => {
  const [value, setValue] = useState({});
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  let navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${params.id}?tickers=false&community_data=false&developer_data=false&sparkline=false`
      )
      .then((res) => setValue(res.data))
      .catch((err) => {
        console.log(err.message);
        setError("Oops! Too many requests, please try again later.");
      })
      .finally(() => setIsLoading(false));
  }, [params.id]);

  const options = { year: "numeric", month: "long", day: "numeric" };
  const date = new Date(value.last_updated?.split("T")[0]);

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
      <h1 className="details details_name">{value.name}</h1>
      <Info coin={value} error={error} setError={setError} />
      <Stats coin={value} />
      <Table coin={value} />
      <div className="details details_desc-wrapper">
        <h2>What is {value.name}?</h2>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(value.description?.en),
          }}
        ></p>
      </div>
    </motion.div>
  );
};

export default DetailsPage;
