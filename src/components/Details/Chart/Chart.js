import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Chart.css";
import SelectButton from "./SelectButton";
import ChartLine from "./ChartLine";

const Chart = ({ coin }) => {
  const [chartData, setChartData] = useState([]);
  const params = useParams();
  const [day, setDay] = useState(7);
  const [active, setActive] = useState();

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${params.id}/market_chart?vs_currency=usd&days=${day}&interval=daily`
      )
      .then((res) => setChartData(res.data.prices));
  }, [params.id, day]);

  return (
    <div className="chart">
      <div className="chart-wrapper">
        <h2>{coin.name} Price Chart</h2>
        <div className="button-container">
          <SelectButton setDays={setDay} numOfDays={7} day={day} />
          <SelectButton setDays={setDay} numOfDays={14} day={day} />
          <SelectButton setDays={setDay} numOfDays={30} day={day} />
        </div>
      </div>
      <ChartLine chartData={chartData} day={day} />
    </div>
  );
};

export default Chart;
