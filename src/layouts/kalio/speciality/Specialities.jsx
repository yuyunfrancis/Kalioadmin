import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StackedChart from "../../../components/charts/StackedChart";
import { config } from "../../../config/config";
import useDataFetching from "../../../hooks/UseDataFetching";

const Specialities = () => {
  const [loading, error, specialities, fetchData] = useDataFetching(
    `${config.app.api_url}/specialities`
  );

  console.log("====================================");
  console.log("specialities", specialities);
  console.log("====================================");

  const navigate = useNavigate();
  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg px-4 py-4 mt-10">
      <div className="flex justify-between items-center pb-4 bg-white pt-2">
        <div>
          <h3>Kalio Specialities List</h3>
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
      <div className="flex justify-between md:gap-6 mt-2 ">
        <StackedChart />

        <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="py-3 px-6">
                  Speciality Name
                </th>
                <th scope="col" class="py-3 px-6">
                  Describtion
                </th>

                <th scope="col" class="py-3 px-6">
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
                  {specialities.data.map((speciality, index) => (
                    <tr
                      key={index}
                      class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <th
                        scope="row"
                        class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {speciality.libelle}
                      </th>
                      <td class="py-4 px-6 text-xs">
                        {speciality.description}
                      </td>

                      <td class="py-4 px-6">
                        <div className="flex items-center">
                          <a
                            href="#"
                            class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            Edit
                          </a>
                          <a
                            href="#"
                            class="font-medium text-red-600 dark:text-red-500 ml-2 hover:underline"
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

export default Specialities;
