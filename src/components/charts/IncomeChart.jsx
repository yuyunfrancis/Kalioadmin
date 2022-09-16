import React from "react";
import Chart from "react-apexcharts";

const IncomeChart = () => {
  const series = [
    {
      name: "series1",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "series2",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
    legend: {
      position: "top",
    },
  };

  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg px-4 mt-6 py-5 w-3/5">
      <div className="flex justify-between items-center">
        <h4 className="text-slate-900 font-medium">Income Statistics</h4>
      </div>
      <Chart options={options} series={series} type="area" width="550" />
    </div>
  );
};

export default IncomeChart;
