import React from "react";
import Chart from "react-apexcharts";

const CityChart = () => {
  const series = [44, 55, 13, 43, 22, 40, 35, 20, 60, 10];

  const options = {
    chart: {
      width: 380,
      type: "pie",
    },
    labels: [
      "Yaound",
      "Bertoua",
      "Abuja",
      "Kigali",
      "Douala",
      "Buea",
      "Edea",
      "Lum",
      "Bamenda",
      "Adamawa",
    ],
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
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg px-4 mt-6 py-5 w-1/2">
      <div className="flex justify-between items-center">
        <h4 className="text-slate-900 font-medium">Cities</h4>
      </div>
      <Chart options={options} series={series} type="pie" width={380} />
    </div>
  );
};

export default CityChart;
