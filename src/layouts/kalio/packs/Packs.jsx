import React from "react";
import { useNavigate } from "react-router-dom";
import Donut from "../../../components/charts/Donut";
import IncomeChart from "../../../components/charts/IncomeChart";
import { config } from "../../../config/config";
import useDataFetching from "../../../hooks/UseDataFetching";

const Packs = () => {
  const [loading, error, packs, fetchData] = useDataFetching(
    `${config.app.api_url}/packs`
  );

  // const series = [
  //   {
  //     name: "series1",
  //     data: [31, 40, 28, 51, 42, 109, 100],
  //   },
  //   {
  //     name: "series2",
  //     data: [11, 32, 45, 32, 34, 52, 41],
  //   },
  // ];

  // const category = [
  //   "2018-09-19T00:00:00.000Z",
  //   "2018-09-19T01:30:00.000Z",
  //   "2018-09-19T02:30:00.000Z",
  //   "2018-09-19T03:30:00.000Z",
  //   "2018-09-19T04:30:00.000Z",
  //   "2018-09-19T05:30:00.000Z",
  //   "2018-09-19T06:30:00.000Z",
  // ];

  const navigate = useNavigate();
  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg px-4 py-4">
      <div className="flex justify-between items-center pb-4 bg-white pt-2">
        <div>
          <h3>Kalio Packs Statistics</h3>
        </div>
        <div className="flex items-center justify-between">
          <div className="relative mr-10">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="table-search-users"
              className="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 focus:outline-none border border-gray-300 rounded-md focus:ring-green-700 focus:border-green-700"
              placeholder="Search Pack"
            />
          </div>
          <div>
            <button
              onClick={() => navigate("/add-packs")}
              type="button"
              className="text-white bg-green-700 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
            >
              Add Pack
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between md:gap-6 mt-2 ">
        <IncomeChart />
        <Donut />
      </div>
      <div className="pt-4 mt-5">
        <div className="flex items-center pb-8 ml-4">
          <h3>Packs Table</h3>
        </div>
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Pack Name
                </th>
                <th scope="col" className="py-3 px-6">
                  Credits
                </th>
                <th scope="col" className="py-3 px-6">
                  Period
                </th>
                <th scope="col" className="py-3 px-6">
                  Duration
                </th>
                <th scope="col" className="py-3 px-6">
                  Price
                </th>
                <th scope="col" className="py-3 px-6">
                  Status
                </th>
                <th scope="col" className="py-3 px-6">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {loading || error ? (
                <>
                  <tr className="flex justify-center items-center p-8 w-full">
                    <td>Loading...</td>
                  </tr>
                </>
              ) : (
                <>
                  {packs.data.map((pack, index) => (
                    <tr
                      className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                      key={index}
                    >
                      <th
                        scope="row"
                        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {pack.libelle}
                      </th>
                      <td className="py-4 px-6">{pack.credit}</td>
                      <td className="py-4 px-6">{pack.period}</td>
                      <td className="py-4 px-6">{pack.numberPeriod}</td>
                      <td className="py-4 px-6">{`XAF${pack.price}`}</td>
                      <td
                        className={`py-4 px-6 ${
                          pack.status === 1
                            ? "text-green-700 "
                            : "text-yellow-600"
                        }`}
                      >
                        {pack.status === 1 ? "active" : "unactive"}
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center justify-between">
                          <a
                            href="#"
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            Edit
                          </a>
                          <a
                            href="#"
                            className="font-medium text-red-700 dark:text-red-600 hover:underline"
                          >
                            Delete
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Packs;
