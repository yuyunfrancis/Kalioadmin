import axios from "axios";
import React, { useContext, useState } from "react";
import { BsImageFill } from "react-icons/bs";
import Select from "react-select";
import { config } from "../config/config";
import UserContext from "../contexts/UserContext";

const period = [];

const AddPacks = () => {
  const [day, setDay] = useState([
    { value: "day", label: "Day" },
    { value: "month", label: "Month" },
    { value: "year", label: "Year" },
  ]);

  const [libelle, setLibelle] = useState("");
  const [credits, setCredits] = useState(0);
  const [time, setTime] = useState(0);
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  const [load, setLoad] = useState(false);
  const { user } = useContext(UserContext);

  const [details, setDetails] = useState({
    libelle: "",
    numberPeriod: 0,
    credit: 10,
    period: "",
    price: 0,
  });

  const addPack = (e) => {
    e.preventDefault();
    setLoad(true);
    const packData = {
      libelle: details.libelle,
      numberPeriod: parseInt(details.numberPeriod),
      credit: parseInt(details.credit),
      period: details.period["value"],
      price: parseInt(details.price),
      description: details.description,
    };
    axios
      .post(`${config.app.api_url}/packs`, packData, {
        headers: {
          Authorization: "Bearer " + user.token,
        },
      })
      .then((response) => {
        console.log("success", response);
        alert("Pack successfully created created");
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
        <h2>Add a new pack</h2>
      </div>
      <div className="lg:mt-8 px-8 md:col-span-2 mt-5 ">
        <div className="shadow sm:overflow-hidden sm:rounded-md p-8">
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="mb-6 w-full group">
              <label
                htmlFor="floating_first_name"
                className="block mb-2 text-sm font-medium text-slate-900 dark:text-gray-300"
              >
                Pack name
              </label>
              <input
                type="text"
                name="floating_first_name"
                id="floating_first_name"
                className="bg-gray-50 focus:outline-none border border-gray-300 text-slate-900 text-sm rounded-md focus:ring-green-700 focus:border-green-700 block w-full p-2.5"
                placeholder="First name"
                value={details.libelle}
                onChange={(e) =>
                  setDetails({ ...details, libelle: e.target.value })
                }
                // onChange={(e) => setName(e.target.value)}
                // value={form.name}
                // onChange={(e) => setField("name", e.target.value)}
              />
            </div>
            <div className="mb-6 w-full group">
              <label
                htmlFor="credit"
                className="block mb-2 text-sm font-medium text-slate-900 dark:text-gray-300"
              >
                Credits
              </label>
              <input
                type="number"
                name="credit"
                id="credit"
                min="10"
                className="bg-gray-50 focus:outline-none border border-gray-300 text-slate-900 text-sm rounded-md focus:ring-green-700 focus:border-green-700 block w-full p-2.5"
                placeholder="Credits"
                value={details.credit}
                onChange={(e) =>
                  setDetails({ ...details, credit: e.target.value })
                }
                // value={form.email}
                // onChange={(e) => setField("email", e.target.value)}
              />
            </div>
          </div>
          <div className="grid md:grid-cols-3 md:gap-6">
            <div className="mb-6 w-full group">
              <label
                htmlFor="period"
                className="block mb-2 text-sm font-medium text-slate-900 dark:text-gray-300"
              >
                Period
              </label>

              <Select
                className="text-sm focus:ring-green-600 focus:border-green-600"
                placeholder="Select your speciality"
                name="speciality"
                options={day}
                value={details.period}
                onChange={(selected) =>
                  setDetails({ ...details, period: selected })
                }
              />
            </div>
            <div className="mb-6 w-full group">
              <label
                htmlFor="speciality"
                className="block mb-2 text-sm font-medium text-slate-900 dark:text-gray-300"
              >
                Number Period
              </label>
              <input
                type="number"
                name="period"
                id="period"
                min="0"
                className="bg-gray-50 focus:outline-none border border-gray-300 text-slate-900 text-sm rounded-md focus:ring-green-700 focus:border-green-700 block w-full p-2.5"
                placeholder="Country"
                value={details.numberPeriod}
                onChange={(e) =>
                  setDetails({ ...details, numberPeriod: e.target.value })
                }
                // value={form.country}
                // onChange={(e) => setField("country", e.target.value)}
              />
            </div>
            <div className="mb-6 w-full group">
              <label
                htmlFor="period"
                className="block mb-2 text-sm font-medium text-slate-900 dark:text-gray-300"
              >
                Price
              </label>

              <input
                type="number"
                name="period"
                id="period"
                min="0"
                className="bg-gray-50 focus:outline-none border border-gray-300 text-slate-900 text-sm rounded-md focus:ring-green-700 focus:border-green-700 block w-full p-2.5"
                placeholder="Country"
                value={details.price}
                onChange={(e) =>
                  setDetails({ ...details, price: e.target.value })
                }
                // onChange={(e) => setCountry(e.target.value)}
                // value={form.country}
                // onChange={(e) => setField("country", e.target.value)}
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
              onClick={addPack}
              className="text-white bg-green-700 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
            >
              Save Information
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPacks;
