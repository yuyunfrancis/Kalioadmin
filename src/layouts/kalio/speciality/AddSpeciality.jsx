import axios from "axios";
import React, { useContext, useState } from "react";
import { config } from "../../../config/config";
import UserContext from "../../../contexts/UserContext";
import usePostData from "../../../hooks/usePostData";

function AddSpeciality() {
  const [load, setLoad] = useState(false);
  const [details, setDetails] = useState({ libelle: "", description: "" });
  const { user } = useContext(UserContext);

  const [loading, postAxiosData] = usePostData(`specialities`, "POST");

  const addSpeciality = (e) => {
    e.preventDefault();
    setLoad(true);
    const plantData = {
      libelle: details.libelle,
      description: details.description,
    };
    axios
      .post(`${config.app.api_url}/specialities`, plantData, {
        headers: {
          Authorization: "Bearer " + user.token,
        },
      })
      .then((response) => {
        console.log("success", response);
        alert("Speciality created");
        setLoad(false);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log("server responded");
        } else if (error.request) {
          console.log("network error");
        } else {
          console.log(error);
        }
      });
  };

  return (
    <div className="p-8">
      <div>
        <h2>Add Speciality</h2>
      </div>
      <div className="lg:mt-8 px-8 md:col-span-2 mt-5 ">
        <div className="shadow sm:overflow-hidden sm:rounded-md p-8">
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="mb-6 w-full group">
              <label
                htmlFor="speciality"
                className="block mb-2 text-sm font-medium text-slate-900 dark:text-gray-300"
              >
                Speciality
              </label>
              <input
                type="text"
                name="speciality"
                id="speciality"
                className="bg-gray-50 focus:outline-none border border-gray-300 text-slate-900 text-sm rounded-md focus:ring-green-700 focus:border-green-700 block w-full p-2.5"
                placeholder="Enter speciality name"
                value={details.libelle}
                onChange={(e) =>
                  setDetails({ ...details, libelle: e.target.value })
                }
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
              value={details.description}
              onChange={(e) =>
                setDetails({ ...details, description: e.target.value })
              }
              // value={form.name}
              // onChange={(e) => setField("name", e.target.value)}
            ></textarea>
          </div>
          <div className="mt-8 float-right">
            <button
              type="button"
              onClick={addSpeciality}
              className="text-white bg-green-700 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
            >
              Save Information
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddSpeciality;
