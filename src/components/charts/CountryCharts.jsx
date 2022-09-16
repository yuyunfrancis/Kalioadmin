import React from "react";
import Chart from "react-apexcharts";

const CountryCharts = () => {
  const series = [
    {
      data: [21, 22, 10, 28, 16, 21, 13, 30, 50, 40],
    },
  ];

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
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: [
        "Cameroon",
        "Ghana",
        "Nigeria",
        "USA",
        "Togo",
        "Congo",
        "France",
        "Kenya",
        "Germany",
        "South Africa",
      ],
      labels: {
        style: {
          //   colors: colors,
          fontSize: "12px",
        },
      },
    },
  };
  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg px-4 mt-6 py-5 w-3/5">
      <div className="flex justify-between items-center">
        <h4 className="text-slate-900 font-medium">Country Statistics</h4>
      </div>
      <Chart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default CountryCharts;
