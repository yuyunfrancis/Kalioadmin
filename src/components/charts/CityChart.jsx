import React from "react";
import Chart from "react-apexcharts";

const CityChart = ({ series, labels, title }) => {
  const options = {
    chart: {
      width: 380,
      type: "pie",
    },
    labels: labels,
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };
  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg px-4 mt-6 py-5">
      <div className="flex justify-between items-center">
        <h4 className="text-slate-900 font-medium">{title}</h4>
      </div>
      <Chart
        options={options}
        series={series}
        type="pie"
        width={400}
        height="550"
      />
    </div>
  );
};

export default CityChart;
