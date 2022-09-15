import React from "react";
import img from "../assets/avatar.png";

const Table = ({}) => {
  return (
    <div>
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
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="p-4 w-4">
              <div className="flex items-center">
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-table-search-1" className="sr-only">
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
                alt="Jese image"
              />
              <div className="pl-3">
                <div className="text-base font-semibold">Neil Sims</div>
                <div className="font-normal text-gray-500">
                  neil.sims@flowbite.com
                </div>
              </div>
            </th>
            <td className="py-4 px-6">React Developer</td>
            <td className="py-4 px-6">React Developer</td>
            <td className="py-4 px-6">
              <div className="flex items-center">
                <div className="h-2.5 w-2.5 rounded-full bg-green-700 mr-2"></div>
                Active
              </div>
            </td>
            <td className="py-4 px-6">
              <div className="flex items-center space-x-3">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:underline"
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="font-medium text-red-600 hover:underline"
                >
                  Remove
                </a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
