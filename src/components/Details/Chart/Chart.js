import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const Chart = ({ coin }) => {
  const [chartData, setChartData] = useState([]);
  const params = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${params.id}/market_chart?vs_currency=usd&days=30&interval=daily`
      )
      .then((res) => setChartData(res.data.prices));
  }, [params.id]);

  const labels = chartData.map((data) => {
    const timestamp = data[0];
    const date = new Date(timestamp);
    const month = date.toLocaleString("default", { month: "long" }); // get the full month name
    const day = date.getDate(); // get the day of the month (1-31)
    const formattedDate = `${month} ${day}`; // combine the month name and day into a string
    return formattedDate;
  });

  const gradient = (context) => {
    const ctx = context.chart.ctx;
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "rgba(58,123,123,1)");
    gradient.addColorStop(1, "rgba(0,210,255,0.1)");
    return gradient;
  };

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Prices in USD (Last 30 days)",
        data: chartData.map((data) => data[1].toFixed(2)),
        backgroundColor: gradient,
        borderColor: "rgba(0,210,255,1)",
        pointBackgroundColor: "#fff",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    radius: 3.5,
    hitRadius: 30,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        ticks: {
          callback: function (value) {
            return "$ " + value.toFixed(2);
          },
        },
      },
    },
  };

  return (
    <div>
      <h2>{coin.name} Price Chart</h2>
      <Line id="canvas" data={data} options={options} />
    </div>
  );
};

export default Chart;
