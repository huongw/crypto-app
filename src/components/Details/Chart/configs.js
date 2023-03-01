export const gradient = (context) => {
  const ctx = context.chart.ctx;
  const gradient = ctx.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, "rgba(58,123,123,1)");
  gradient.addColorStop(1, "rgba(0,210,255,0.1)");
  return gradient;
};

export const options = {
  responsive: true,
  radius: 2,
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
