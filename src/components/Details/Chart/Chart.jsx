import "./Chart.css";
import SelectButton from "./SelectButton";
import ChartLine from "./ChartLine";

const Chart = ({ coin, chartData, setDay, day }) => {
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
