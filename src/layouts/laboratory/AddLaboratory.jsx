import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { BsImageFill } from "react-icons/bs";
import Select from "react-select";

import Header from "../../components/header/Header";
import Sidebar from "../../components/Sidebar";
import { config } from "../../config/config";
import UserContext from "../../contexts/UserContext";
import usePostData from "../../hooks/usePostData";

const specialities = [
  { value: 1, label: "Plant treatment" },
  { value: 2, label: "Disease detection" },
  { value: 3, label: "Soil Examination" },
  { value: 4, label: "Soil treatment" },
  { value: 5, label: "Seed Cultivation" },
];
const AddLaboratory = () => {
  const { user } = useContext(UserContext);
  const [value, setValue] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState(null);
  // const [loading, error, experts] = usePostData(
  //   `${config.app.api_url}/agro-expert`
  // );

  const [name, setName] = useState("");
  // const [name, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [bname, setBName] = useState("");
  const [specialities, setSpecialities] = useState([]);
  const [speciality, setSpeciality] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const [logoImg, setLogoImg] = useState("");

  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);
  // const [message, setMessage] = useState("");

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });

    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("====================================");
    console.log(form);
    console.log("====================================");
  };

  const setHandle = (e) => {
    setSelectedOptions(Array.isArray(e) ? e.map((hotel) => hotel.label) : []);
  };

  const fetchData = () => {
    const speciliteUrl = `${config.app.api_url}/specialities`;
    const getSpecialities = axios.get(speciliteUrl, {
      headers: { Authorization: "Bearer " + user.token },
    });

    axios.all([getSpecialities]).then(
      axios.spread(async (...allData) => {
        const allSpecialityData = allData[0].data.data;
        let species = [];
        await allSpecialityData.forEach((item) => {
          species.push({ label: item.libelle, value: item._id });
        });
        setSpecialities(species);
      })
    );
  };

  useEffect(() => {
    fetchData();
  }, []);
  // console.log("logoImage", logoImg);

  const handleProductImageUpload = (e) => {
    const file = e.target.files[0];

    TransformFile(file);

    // console.log("Logo", file);
  };
  const TransformFile = (file) => {
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setLogoImg(reader.result);
      };
    } else {
      setLogoImg("");
    }
  };

  // const [loading, postData] = usePostData(
  //   `${config.app.api_url}/agro-expert`,
  //   "POST"
  // );

  console.log("====================================");
  console.log("specility", speciality);
  console.log("====================================");

  const [loading, postAxiosData] = usePostData(`laboratories`, "POST");

  const addLaboratory = async (e) => {
    e.preventDefault();
    const data = new FormData();
    // const prix = parseInt(price);

    data.append("name", name);
    data.append("city", city);
    data.append("country", country);
    data.append("email", email);
    data.append("phone", phone);
    data.append(
      "specialite",
      JSON.stringify(speciality.map((i) => i["value"]))
    );
    console.log(
      "speciality",
      JSON.stringify(speciality.map((i) => i["value"]))
    );
    data.append("price", price);
    data.append("description", description);
    // data.append("image", logoImg);

    // console.log("Form", [...FormData]);

    const result = await postAxiosData(data).then((res) => {
      return res;
    });

    if (result !== null && result.data) {
      setForm({});
    }
  };

  return (
    <div className="p-8">
      <div>
        <h2>Add Laboratory</h2>
      </div>
      <div className="lg:mt-8 px-8 md:col-span-2 mt-5 ">
        <div className="shadow sm:overflow-hidden sm:rounded-md p-8">
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="mb-6 w-full group">
              <label
                htmlFor="floating_first_name"
                className="block mb-2 text-sm font-medium text-slate-900 dark:text-gray-300"
              >
                Full Name
              </label>
              <input
                type="text"
                name="floating_first_name"
                id="floating_first_name"
                className="bg-gray-50 focus:outline-none border border-gray-300 text-slate-900 text-sm rounded-md focus:ring-green-700 focus:border-green-700 block w-full p-2.5"
                placeholder="First name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                // value={form.name}
                // onChange={(e) => setField("name", e.target.value)}
              />
            </div>
            <div className="mb-6 w-full group">
              <label
                htmlFor="floating_email"
                className="block mb-2 text-sm font-medium text-slate-900 dark:text-gray-300"
              >
                Email Address
              </label>
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                className="bg-gray-50 focus:outline-none border border-gray-300 text-slate-900 text-sm rounded-md focus:ring-green-700 focus:border-green-700 block w-full p-2.5"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                // value={form.email}
                // onChange={(e) => setField("email", e.target.value)}
              />
            </div>
            {/* <div className="mb-6 w-full group">
              <label
                htmlFor="floating_last_name"
                className="block mb-2 text-sm font-medium text-slate-900 dark:text-gray-300"
              >
                Last name
              </label>
              <input
                type="text"
                name="floating_last_name"
                id="floating_last_name"
                className="bg-gray-50 focus:outline-none border border-gray-300 text-slate-900 text-sm rounded-md focus:ring-green-700 focus:border-green-700 block w-full p-2.5"
                placeholder="Last name"
                value={form.name}
                onChange={(e) => setField("name", e.target.value)}
              />
            </div> */}
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="mb-6 w-full group">
              <label
                htmlFor="floating_phone"
                className="block mb-2 text-sm font-medium text-slate-900 dark:text-gray-300"
              >
                Phone Number
              </label>
              <input
                type="tel"
                name="floating_phone"
                id="floating_phone"
                // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                className="bg-gray-50 focus:outline-none border border-gray-300 text-slate-900 text-sm rounded-md focus:ring-green-700 focus:border-green-700 block w-full p-2.5"
                placeholder="Phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                // value={form.phone}
                // onChange={(e) => setField("phone", e.target.value)}
              />
            </div>
            <div className="mb-6 w-full group">
              <label
                htmlFor="country"
                className="block mb-2 text-sm font-medium text-slate-900 dark:text-gray-300"
              >
                Country
              </label>

              <input
                type="country"
                name="country"
                id="country"
                className="bg-gray-50 focus:outline-none border border-gray-300 text-slate-900 text-sm rounded-md focus:ring-green-700 focus:border-green-700 block w-full p-2.5"
                placeholder="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                // value={form.country}
                // onChange={(e) => setField("country", e.target.value)}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 mb-6 w-full group">
              <label
                htmlFor="city"
                className="block mb-2 text-sm font-medium text-slate-900 dark:text-gray-300"
              >
                City/Town
              </label>
              <input
                type="city"
                name="city"
                id="city"
                // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                className="bg-gray-50 focus:outline-none border border-gray-300 text-slate-900 text-sm rounded-md focus:ring-green-700 focus:border-green-700 block w-full p-2.5"
                placeholder="City/Town"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                // value={form.city}
                // onChange={(e) => setField("city", e.target.value)}
              />
            </div>
            <div className=" mb-6 w-full group">
              <label
                htmlFor="speciality"
                className="block mb-2 text-sm font-medium text-slate-900 dark:text-gray-300"
              >
                Speciality
              </label>
              <Select
                className="text-sm focus:ring-green-600 focus:border-green-600"
                placeholder="Select your speciality"
                name="speciality"
                options={specialities}
                value={speciality}
                onChange={(selected) => {
                  setSpeciality(selected);
                }}
                isMulti
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="mb-6 w-full group">
              <label
                htmlFor="price"
                className="block mb-2 text-sm font-medium text-slate-900 dark:text-gray-300"
              >
                Price
              </label>

              <input
                type="price"
                name="price"
                id="price"
                className="bg-gray-50 focus:outline-none border border-gray-300 text-slate-900 text-sm rounded-md focus:ring-green-700 focus:border-green-700 block w-full p-2.5"
                placeholder="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                // value={form.name}
                // onChange={(e) => setField("name", e.target.value)}
              />
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <label
                htmlFor="speciality"
                className="block mb-2 text-sm font-medium text-slate-900 dark:text-gray-300"
              >
                Speciality
              </label>
              <input
                type="speciality"
                name="speciality"
                id="speciality"
                // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                className="bg-gray-50 focus:outline-none border border-gray-300 text-slate-900 text-sm rounded-md focus:ring-green-700 focus:border-green-700 block w-full p-2.5"
                placeholder="speciality"
                // value={speciality}
                // onChange={(e) => setSpeciality(e.target.value)}
                // value={form.city}
                // onChange={(e) => setField("city", e.target.value)}
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
          <div className="mt-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-slate-900">
                logo
              </label>
              <div className="mt-1 flex items-center">
                {logoImg ? (
                  <img
                    className="w-36 h-auto rounded-lg transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                    src={logoImg}
                    alt="image description"
                  />
                ) : (
                  <span className="inline-block h-20 w-36 overflow-hidden rounded-md bg-gray-100">
                    <BsImageFill className="h-full w-full text-gray-300 " />
                  </span>
                )}

                <button
                  type="button"
                  // onClick={handleProductImageUpload}
                  className="ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2"
                >
                  Change
                </button>
              </div>
            </div>

            <div className="mt-4">
              <label
                htmlFor="image"
                className="block text-sm font-medium text-slate-900"
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
                        onChange={handleProductImageUpload}
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
          </div>
          <div className="mt-8 float-right">
            <button
              type="button"
              onClick={addLaboratory}
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

export default AddLaboratory;
