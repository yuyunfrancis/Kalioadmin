import React from "react";
import Chart from "react-apexcharts";

const CountryCharts = ({ series, categories, label }) => {
  // const series = data;

  const options = {
    chart: {
      height: 350,
      type: "bar",
      events: {
        click: function (chart, w, e) {
          // console.log(chart, w, e)
        },
      },
    },
    // colors: colors,
    plotOptions: {
      bar: {
        columnWidth: "45%",
        distributed: true,
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val;
      },
      offsetY: -20,
      style: {
        fontSize: "12px",
        colors: ["#304758"],
      },
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: categories,
      labels: {
        style: {
          //   colors: colors,
          fontSize: "12px",
        },
      },
    },
  };
  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg px-4 mt-6 py-5 w-1/2">
      <div className="flex justify-between items-center">
        <h4 className="text-slate-900 font-medium">{label}</h4>
      </div>
      <Chart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default CountryCharts;
