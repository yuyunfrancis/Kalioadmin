import React, { useContext, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import img from "../../assets/avatar.png";
import { config } from "../../config/config";
import UseDataFetching from "../../hooks/UseDataFetching";
import UserContext from "../../contexts/UserContext";

const AgroExperts = () => {
  const navigate = useNavigate();
  const [load, setLoad] = useState(false);
  const { user } = useContext(UserContext);

  const [open, setOpen] = React.useState(true);
  const [loading, error, experts] = UseDataFetching(
    `${config.app.api_url}/agro-expert`
  );

  const [displayConfirmationModal, setDisplayConfirmationModal] =
    useState(false);
  const [deleteMessage, setDeleteMessage] = useState(null);

  console.log("====================================");
  console.log("Experts", experts);
  console.log("====================================");

  const handleDelete = async (id, e) => {
    e.preventDefault();
    setLoad(true);
    await axios
      .delete(`${config.app.api_url}/agro-expert/${id}`, {
        headers: {
          Authorization: "Bearer " + user.token,
        },
      })
      .then((res) => {
        setLoad(false);
        console.log("====================================");
        console.log("Deleted", res.data);
        console.log("====================================");
      });
  };

  return (
    <div className="p-8">
      <div>
        <h2>Agro Experts</h2>
      </div>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg px-4 mt-6 py-5">
        <div className="flex justify-between items-center pb-4 bg-white pt-2">
          <div>
            <button className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5">
              <span className="sr-only">Action button</span> Action
              <BsChevronDown className="ml-2 w-3 h-3" />
            </button>
            <div
              id="dropdownAction"
              className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
            >
              <ul
                className="py-1 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownActionButton"
              >
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Reward
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Promote
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Activate account
                  </a>
                </li>
              </ul>
              <div className="py-1">
                <a
                  href="#"
                  className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Delete User
                </a>
              </div>
            </div>
          </div>

          {/* <label htmlFor="table-search" classNamw="sr-only">
            Search
          </label> */}
          <div className="relative">
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
              placeholder="Search htmlFor export"
            />
          </div>
          <div>
            <button
              onClick={() => navigate("/add-expert")}
              type="button"
              className="text-white bg-green-700 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
            >
              Add AgroExpert
            </button>
          </div>
        </div>

        {/* Table */}

        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 pt-2">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="py-3 px-6">
                Name
              </th>
              <th scope="col" className="py-3 px-6">
                Country
              </th>
              <th scope="col" className="py-3 px-6">
                City
              </th>
              <th scope="col" className="py-3 px-6">
                Speciality
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
                {experts.data.map((expert, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="p-4 w-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-1"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="checkbox-table-search-1"
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <img
                        className="w-10 h-10 rounded-full"
                        src={img}
                        alt={expert.name}
                      />
                      <div className="pl-3">
                        <div className="text-base font-semibold">
                          {expert.name}
                        </div>
                        <div className="font-normal text-gray-500">
                          {expert.email}
                        </div>
                      </div>
                    </th>
                    <td className="py-4 px-6">{expert.country}</td>
                    <td className="py-4 px-6">{expert.city}</td>

                    <td className="py-4 px-6">Soil Fertility</td>
                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        <div className="h-2.5 w-2.5 rounded-full bg-green-700 mr-2"></div>
                        Active
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-3">
                        <button
                          href="#"
                          className="font-medium text-blue-600 hover:underline"
                        >
                          Edit
                        </button>
                        <button
                          onClick={(e) => handleDelete(expert._id, e)}
                          className="font-medium text-red-600 hover:underline"
                        >
                          Remove
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>

      {/* Dailog */}

      {/* <div
        id="popup-modal"
        tabindex="-1"
        className={`${
          open && "hidden"
        } overflow-y-auto overflow-x-hidden fixed top-0 right-40 left-0 z-50 md:inset-0 h-modal md:h-full`}
      >
        <div className="relative p-4 w-full max-w-md h-full md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              data-modal-toggle="popup-modal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="p-6 text-center">
              <svg
                aria-hidden="true"
                className="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Are you sure you want to delete this product?
              </h3>
              <button
                data-modal-toggle="popup-modal"
                type="button"
                onClick={handleDelete}
                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
              >
                Yes, I'm sure
              </button>
              <button
                data-modal-toggle="popup-modal"
                type="button"
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                onClick={() => setOpen(true)}
              >
                No, cancel
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default AgroExperts;
