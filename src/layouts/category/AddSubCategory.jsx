import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { BsImageFill } from "react-icons/bs";
import Select from "react-select";

import { config } from "../../config/config";
import UserContext from "../../contexts/UserContext";
import usePostData from "../../hooks/usePostData";

function AddSubCategory() {
  const { user } = useContext(UserContext);
  const [subCategories, setSubCategories] = useState([]);
  const [sub, setSub] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [cycle, setCycle] = useState("");
  const [pyield, setPYield] = useState("");
  const [place, setPlace] = useState("");

  console.log("Profile", sub);

  const fetchData = () => {
    const mainUrl = `${config.app.api_url}/main-category`;

    const getMainCat = axios.get(mainUrl, {
      headers: { Authorization: "Bearer " + user.token },
    });
    axios.all([getMainCat]).then(
      axios.spread(async (...allData) => {
        const allSubCat = allData[0].data;
        let subCat = [];
        await allSubCat.data.forEach((item) => {
          subCat.push({ label: item.name, value: item._id });
        });
        setSubCategories(subCat);
      })
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [loading, postData] = usePostData(`category`, "POST");
  const addSubCategory = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", name);
    data.append("maincategory", sub["value"]);
    data.append("description", description);
    data.append("userId", user._id);

    const result = await postData(data).then((res) => {
      return res;
    });

    if (result !== null && result.data) {
      setName("");
      setSub("");
      setDescription("");
    }
  };

  return (
    <div className="p-8">
      <div>
        <h2>Add Sub Category</h2>
      </div>
      <div className="px-32 pt-10">
        <div className=" mb-6 w-full group">
          <label
            htmlFor="speciality"
            className="block mb-2 text-sm font-medium text-slate-900 dark:text-gray-300"
          >
            Select Main Category
          </label>
          <Select
            className="text-sm focus:ring-green-600 focus:border-green-600"
            placeholder="Select your speciality"
            name="speciality"
            options={subCategories}
            value={sub}
            onChange={(selected) => {
              setSub(selected);
            }}
          />
        </div>
        <div className="mb-6 w-full group">
          <label
            htmlFor="category"
            className="block mb-2 text-sm font-medium text-slate-900 dark:text-gray-300"
          >
            Enter Category Name
          </label>
          <input
            type="text"
            name="category"
            id="category"
            className="bg-gray-50 focus:outline-none border border-gray-300 text-slate-900 text-sm rounded-md focus:ring-green-700 focus:border-green-700 block w-full p-2.5"
            placeholder="First name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            // value={form.name}
            // onChange={(e) => setField("name", e.target.value)}
          />
        </div>
        <div className="grid md:grid-cols-3 md:gap-6">
          <div className="mb-6 w-full group">
            <label
              htmlFor="floating_first_name"
              className="block mb-2 text-sm font-medium text-slate-900 dark:text-gray-300"
            >
              Cycle
            </label>
            <input
              type="text"
              name="Cycle"
              id="Cycle"
              className="bg-gray-50 focus:outline-none border border-gray-300 text-slate-900 text-sm rounded-md focus:ring-green-700 focus:border-green-700 block w-full p-2.5"
              placeholder="Cycle"
              value={cycle}
              onChange={(e) => setCycle(e.target.value)}
              // value={form.name}
              // onChange={(e) => setField("name", e.target.value)}
            />
          </div>
          <div className="mb-6 w-full group">
            <label
              htmlFor="yield"
              className="block mb-2 text-sm font-medium text-slate-900 dark:text-gray-300"
            >
              Yield
            </label>
            <input
              type="yield"
              name="yield"
              id="yield"
              className="bg-gray-50 focus:outline-none border border-gray-300 text-slate-900 text-sm rounded-md focus:ring-green-700 focus:border-green-700 block w-full p-2.5"
              placeholder="yield"
              value={pyield}
              onChange={(e) => setPYield(e.target.value)}
              // value={form.email}
              // onChange={(e) => setField("email", e.target.value)}
            />
          </div>
          <div className="mb-6 w-full group">
            <label
              htmlFor="place"
              className="block mb-2 text-sm font-medium text-slate-900 dark:text-gray-300"
            >
              Place
            </label>
            <input
              type="place"
              name="place"
              id="place"
              className="bg-gray-50 focus:outline-none border border-gray-300 text-slate-900 text-sm rounded-md focus:ring-green-700 focus:border-green-700 block w-full p-2.5"
              placeholder="Last name"
              value={place}
              onChange={(e) => setPlace(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Description
          </label>
          <textarea
            id="message"
            rows="4"
            className="bg-gray-50 focus:outline-none border border-gray-300 text-slate-900 text-sm rounded-md focus:ring-green-700 focus:border-green-700 block w-full p-2.5"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            // value={form.name}
            // onChange={(e) => setField("name", e.target.value)}
          ></textarea>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6 mt-6">
          <div className="mb-6 w-full group">
            <label
              htmlFor="image"
              className="mb-4 block text-sm font-medium text-slate-900"
            >
              Choose Image
            </label>
            <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      // value={logoImg}
                      // onChange={handleProductImageUpload}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">
                  PNG, JPG, GIF up to 10MB
                  <span></span>
                </p>
              </div>
            </div>
          </div>
          <div className="mb-6 ml-14 w-full group">
            <label className="mb-4 block text-sm font-medium text-slate-900">
              Uploaded Image
            </label>
            <div className="mt-1 flex items-center">
              <span className="inline-block h-20 w-36 overflow-hidden rounded-md bg-gray-100">
                <BsImageFill className="h-full w-full text-gray-300 " />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 float-right">
        <button
          type="button"
          onClick={addSubCategory}
          className="text-white bg-green-700 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
        >
          Save Information
        </button>
      </div>
    </div>
  );
}

export default AddSubCategory;
