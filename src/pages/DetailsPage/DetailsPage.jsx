import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import DOMPurify from "dompurify";
import "./DetailsPage.css";
import { motion } from "framer-motion";
import { Table, Stats, Loader, Error } from "../index";
import Info from "../../components/Details/Info/Info";
import { useContext } from "react";
import ErrorContext from "../../context/ErrorContext";
import LoadingContext from "../../context/LoadingContext";
import useFetchDetails from "../../hooks/useFetchDetails";

const DetailsPage = () => {
  let navigate = useNavigate();
  const { coin } = useFetchDetails();

  const options = { year: "numeric", month: "long", day: "numeric" };
  const date = new Date(coin.last_updated?.split("T")[0]);
  const { setError, error } = useContext(ErrorContext);
  const { isLoading } = useContext(LoadingContext);

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
      <Info coin={coin} error={error} setError={setError} />
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
      {/* <Trending error={error} setError={setError} /> */}
    </motion.div>
  );
};

export default DetailsPage;
