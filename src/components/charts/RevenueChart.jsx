import React from "react";
import Chart from "react-apexcharts";

const RevenueChart = ({ series, label, title }) => {
  const options = {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
    },
    yaxis: {
      title: {
        text: label,
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + "Experts";
        },
      },
    },
  };
  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg px-4 mt-6 py-5 w-1/2">
      <div className="flex justify-between items-center">
        <h4 className="text-slate-900 font-medium">{title}</h4>
      </div>
      <Chart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default RevenueChart;
