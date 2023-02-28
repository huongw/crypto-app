import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { gradient, options } from "./configs.js";

const ChartLine = ({ chartData, day }) => {
  const labels = chartData.map((data) => {
    const timestamp = data[0];
    const date = new Date(timestamp);
    const month = date.toLocaleString("default", { month: "long" }); // get the full month name
    const day = date.getDate(); // get the day of the month (1-31)
    const formattedDate = `${month} ${day}`; // combine the month name and day into a string
    return formattedDate;
  });

  const data = {
    labels: labels,
    datasets: [
      {
        label: `Prices in USD (Last ${day} days)`,
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
