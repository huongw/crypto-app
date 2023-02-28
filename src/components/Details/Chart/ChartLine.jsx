import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { gradient, options } from "./configs.js";
import formatDate from "../../../helpers/formatDate";

const ChartLine = ({ chartData, day }) => {
  const data = {
    labels: chartData.map((data) => formatDate(data[1])),
    datasets: [
      {
        label: `Currency in USD (Last ${day} days)`,
        data: chartData.map((data) => data[1].toFixed(2)),
        backgroundColor: gradient,
        borderColor: "rgba(0,210,255,1)",
        pointBackgroundColor: "#fff",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  return <Line data={data} options={options} />;
};

export default ChartLine;
