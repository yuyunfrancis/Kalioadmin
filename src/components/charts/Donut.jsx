import React from "react";
import Chart from "react-apexcharts";

const Donut = () => {
  const series = [44, 55, 41, 17, 15];
  const options = {
    chart: {
      type: "donut",
    },
    labels: ["Daimond", "Gold", "Basic", "Platinum", "Silver"],
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
        <h4 className="text-slate-900 font-medium">Packs Stats</h4>
      </div>
      <Chart options={options} series={series} type="donut" />
    </div>
  );
};

export default Donut;
