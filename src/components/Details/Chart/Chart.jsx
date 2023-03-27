import React, { useEffect, useState } from "react";
import { Error } from "../../../pages";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Chart.css";
import SelectButton from "./SelectButton";
import ChartLine from "./ChartLine";

const Chart = ({ coin, error, setError }) => {
  const [chartData, setChartData] = useState([]);
  const params = useParams();
  const [day, setDay] = useState(7);

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${params.id}/market_chart?vs_currency=usd&days=${day}&interval=daily`
      )
      .then((res) => setChartData(res.data.prices))
      .catch((err) => {
        console.log(err.message);
        setError("Oops! Too many requests, please try again later.");
      });
  }, [params.id, day]);

  if (error) return <Error message={error} />;

  return (
    <div className="chart">
      <div className="chart-wrapper">
        <h2>{coin.name} Price Chart</h2>
        <div className="button-container">
          <SelectButton setDays={setDay} numOfDays={7} day={day} />
          <SelectButton setDays={setDay} numOfDays={14} day={day} />
          <SelectButton setDays={setDay} numOfDays={30} day={day} />
          <SelectButton setDays={setDay} numOfDays={90} day={day} />
          <SelectButton setDays={setDay} numOfDays={365} day={day} />
        </div>
      </div>
      <ChartLine chartData={chartData} day={day} />
    </div>
  );
};

export default Chart;
