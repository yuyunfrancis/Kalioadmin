import React, { useContext, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import img from "../../assets/avatar.png";
import { config } from "../../config/config";
import UseDataFetching from "../../hooks/UseDataFetching";
import UserContext from "../../contexts/UserContext";

const Products = () => {
  const navigate = useNavigate();
  const [load, setLoad] = useState(false);
  const { user } = useContext(UserContext);

  const [editForm, setEditForm] = useState({
    id: "",
    name: "",
    email: "",
    country: "",
    city: "",
  });

  const [open, setOpen] = React.useState(true);

  const [visible, setVisible] = useState(true);

  const showUserModal = () => {
    setVisible(!visible);
  };

  // capture user input in edit form inputs
  function handleChange(e) {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value,
    });
  }

  const [loading, error, products] = UseDataFetching(
    `${config.app.api_url}/products`
  );

  return (
    <div className="p-8">
      <div>
        <h2>All Products</h2>
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
                Price
              </th>
              <th scope="col" className="py-3 px-6">
                Category
              </th>
              <th scope="col" className="py-3 px-6">
                Shop
              </th>
              <th scope="col" className="py-3 px-6">
                City
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
                {products?.data?.length > 0 ? (
                  <>
                    {products?.data?.map((product, index) => (
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
                            src={`${config.app.api_url}/products/images/${product?.image}`}
                            alt={product?.name}
                          />
                          <div className="pl-3">
                            <div className="text-base font-semibold">
                              {product?.name}
                            </div>
                            <div className="font-normal text-gray-500">
                              {`${product?.currency?.code}${product?.price}`}
                            </div>
                          </div>
                        </th>
                        <td className="py-4 px-6">{product?.category?.name}</td>
                        <td className="py-4 px-6">{product?.store?.name}</td>

                        <td className="py-4 px-6">{product?.store?.country}</td>
                        <td className="py-4 px-6">
                          {/* <div className="flex items-center">
                            <div className="h-2.5 w-2.5 rounded-full bg-green-700 mr-2"></div> */}
                          {product?.store?.city}
                          {/* </div> */}
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-center space-x-3">
                            <button
                              // onClick={(e) => handleDelete(expert._id, e)}
                              className="font-medium text-red-600 hover:underline"
                            >
                              Deactivate
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </>
                ) : (
                  <h3>No Data Found</h3>
                )}
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
