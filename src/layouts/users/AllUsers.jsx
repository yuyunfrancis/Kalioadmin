import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Selector from "../../components/Selector";
import Select from "react-select";

// import { Select, Option } from "@material-tailwind/react";
const AllUsers = () => {
  const navigate = useNavigate();

  const [visible, setVisible] = useState(true);

  const showUserModal = () => {
    setVisible(!visible);
  };

  const options = [
    { value: "admin", label: "Admin" },
    { value: "user", label: "User" },
    { value: "editor", label: "Editor" },
  ];

  return (
    <div className="p-8">
      <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
        <div class="flex justify-between items-center py-4 bg-white px-8">
          <div class="col-span-6 sm:col-span-3 w-72">
            <Select
              className="text-sm focus:ring-green-600 focus:border-green-600"
              placeholder="Change user role"
              name="role"
              options={options}
            />
          </div>
          <label for="table-search" class="sr-only">
            Search
          </label>
          <div class="relative">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="table-search-users"
              class="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-green-700 focus:border-green-700"
              placeholder="Search for users"
            />
          </div>
          <div>
            <button
              onClick={() => navigate("/add-user")}
              type="button"
              className="text-white bg-green-700 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
            >
              Add User
            </button>
          </div>
        </div>
        <table class="w-full text-sm text-left text-gray-500Y px-8">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" class="p-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-all-search" class="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" class="py-3 px-6">
                Name
              </th>
              <th scope="col" class="py-3 px-6">
                Position
              </th>
              <th scope="col" class="py-3 px-6">
                Status
              </th>
              <th scope="col" class="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b">
              <td class="p-4 w-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    class="w-4 h-4 text-green-700 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-search-1" class="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                class="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white"
              >
                <img
                  class="w-10 h-10 rounded-full"
                  src="/docs/images/people/profile-picture-1.jpg"
                  alt="Jese image"
                />
                <div class="pl-3">
                  <div class="text-base font-semibold">Neil Sims</div>
                  <div class="font-normal text-gray-500">
                    neil.sims@flowbite.com
                  </div>
                </div>
              </th>
              <td class="py-4 px-6">React Developer</td>
              <td class="py-4 px-6">
                <div class="flex items-center">
                  <div class="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>{" "}
                  Online
                </div>
              </td>
              <td class="py-4 px-6">
                {/* <a
                  href="#"
                  type="button"
                  data-modal-toggle="editUserModal"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit user
                </a> */}
                <button
                  onClick={showUserModal}
                  className="font-medium text-blue-600 hover:underline"
                >
                  Edit user
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <div
          id="editUserModal"
          tabindex="-1"
          aria-hidden="true"
          class={`${
            visible && "hidden justify-center self-center "
          }overflow-y-auto inline-block align-baseline overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center p-4 w-full md:inset-0 h-modal md:h-full`}
        >
          <div class="relative w-full max-w-2xl h-full md:h-auto">
            <form
              action="#"
              class="relative bg-white rounded-lg shadow dark:bg-gray-700"
            >
              <div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                  Edit user
                </h3>
                <button
                  type="button"
                  class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={showUserModal}
                >
                  <svg
                    class="w-5 h-5"
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
                </button>
              </div>

              <div class="p-6 space-y-6">
                <div class="grid grid-cols-6 gap-6">
                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="first-name"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Bonnie"
                      required=""
                    />
                  </div>
                  <div class="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="floating_phone"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="floating_phone"
                      id="floating_phone"
                      class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Phone number"
                    />
                  </div>
                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="email"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="example@company.com"
                      required=""
                    />
                  </div>
                  <div class="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="country"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Country
                    </label>
                    <input
                      type="country"
                      name="country"
                      id="country"
                      class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Country"
                    />
                  </div>
                  <div class="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="city"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      City/Town
                    </label>
                    <input
                      type="city"
                      name="city"
                      id="city"
                      class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Development"
                      required=""
                    />
                  </div>
                  <div class="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="role"
                      className="block mb-2 text-sm font-medium text-slate-900 dark:text-gray-300"
                    >
                      User Role
                    </label>
                    <Select
                      className="text-sm focus:ring-green-600 focus:border-green-600"
                      placeholder="Change user role"
                      name="role"
                      options={options}
                      // value={speciality}
                      // onChange={(selected) => {
                      //   setSpeciality(selected);
                      // }}
                    />
                  </div>
                </div>
              </div>

              <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                <button
                  type="submit"
                  class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  Update Info
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
