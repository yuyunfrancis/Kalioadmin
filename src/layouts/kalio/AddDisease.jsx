import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import Select from "react-select";
import { config } from "../../config/config";
import UserContext from "../../contexts/UserContext";

function AddDisease() {
  const [details, setDetails] = useState({
    plant: "",
    name: "",
    image: "",
    description: "",
    precaution: "",
  });
  const [plant, setPlant] = useState([]);
  const [file, setFile] = useState("");
  const { user } = useContext(UserContext);
  const [load, setLoad] = useState(false);

  const handleInputChange = (e) => {
    setFile(e.target.files[0]);
  };

  console.log("====================================");
  console.log(details);
  console.log("====================================");

  const fetchData = () => {
    const mainUrl = `${config.app.api_url}/plant-type`;

    const getPlants = axios.get(mainUrl, {
      headers: { Authorization: "Bearer " + user.token },
    });
    axios.all([getPlants]).then(
      axios.spread(async (...allData) => {
        const allPlants = allData[0].data;
        let plants = [];
        await allPlants.data.forEach((item) => {
          plants.push({ label: item.label, value: item.value });
        });
        setPlant(plants);
      })
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  //   const [loading, postData] = usePostData(`category`, "POST");
  const addDisease = (e) => {
    e.preventDefault();
    setLoad(true);
    const diseaseInfo = {
      name: details.name,
      description: details.description,
      precaution: details.precaution,
      file: details.image,
      plantType: details.plant["value"],
    };
    axios
      .post(`${config.app.api_url}/plant-disease`, diseaseInfo, {
        headers: {
          Authorization: "Bearer " + user.token,
        },
      })
      .then((response) => {
        console.log("success", response);
        alert("Disease successfully created created");
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
        <h2>Add Disease</h2>
      </div>
      <div className="lg:mt-8 px-8 md:col-span-2 mt-5 ">
        <div className="shadow sm:overflow-hidden sm:rounded-md p-8">
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className=" mb-6 w-full group">
              <label
                htmlFor="speciality"
                className="block mb-2 text-sm font-medium text-slate-900 dark:text-gray-300"
              >
                Select Plant
              </label>
              <Select
                className="text-sm focus:ring-green-600 focus:border-green-600"
                placeholder="Select plant"
                name="speciality"
                options={plant}
                value={details.plant}
                onChange={(selected) => {
                  setDetails({ ...details, plant: selected });
                }}
              />
            </div>
            <div className="mb-6 w-full group">
              <label
                htmlFor="speciality"
                className="block mb-2 text-sm font-medium text-slate-900 dark:text-gray-300"
              >
                Name of Disease
              </label>
              <input
                type="text"
                name="speciality"
                id="speciality"
                className="bg-gray-50 focus:outline-none border border-gray-300 text-slate-900 text-sm rounded-md focus:ring-green-700 focus:border-green-700 block w-full p-2.5"
                placeholder="Enter disease name"
                value={details.name}
                onChange={(e) =>
                  setDetails({ ...details, name: e.target.value })
                }
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6 items-center">
            <div className=" mb-6 w-full group">
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
            <div className="flex justify-center">
              <div className="mb-3 w-96">
                <label
                  htmlFor="formFile"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Choose Plant Image
                </label>
                <input
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-700 focus:outline-none"
                  type="file"
                  id="formFile"
                  onChange={(e) =>
                    setDetails({ ...details, image: e.target.files[0] })
                  }
                />
              </div>
            </div>
          </div>
          <div className=" mb-6 w-full group">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Precaution
            </label>
            <textarea
              id="message"
              rows="4"
              className="bg-gray-50 focus:outline-none border border-gray-300 text-slate-900 text-sm rounded-md focus:ring-green-700 focus:border-green-700 block w-full p-2.5"
              placeholder="Description"
              value={details.precaution}
              onChange={(e) =>
                setDetails({ ...details, precaution: e.target.value })
              }
              // value={form.name}
              // onChange={(e) => setField("name", e.target.value)}
            ></textarea>
          </div>
          <div className="mt-8 float-right">
            <button
              type="button"
              onClick={addDisease}
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

export default AddDisease;
