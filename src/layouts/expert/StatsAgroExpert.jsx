import axios from "axios";
import React, { useContext, useState, useEffect } from "react";

import { FaMoneyCheckAlt, FaUserSecret } from "react-icons/fa";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineAttachMoney, MdOutlineMonetizationOn } from "react-icons/md";

import Card from "../../components/cards/Card";
import CityChart from "../../components/charts/CityChart";
import CountryCharts from "../../components/charts/CountryCharts";
import RevenueChart from "../../components/charts/RevenueChart";
import { config } from "../../config/config";
import UserContext from "../../contexts/UserContext";

const data = {
  title: "Experts",
  total: 40,
  value: "experts",
  bgColor: "bg-purple-200",
  icon: (
    <FaUserSecret className="text-purple-500 h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
  ),
  rate: 12,
  time: "Last Month",
};
const revenue = {
  title: "Icome from Experts",
  total: 50000,
  value: "XAF",
  bgColor: "bg-purple-200",
  icon: (
    <MdOutlineAttachMoney className="text-purple-500 h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
  ),
  rate: 25,
  time: "Last Month",
};
const paid = {
  title: "Paid",
  total: 4000,
  value: "XAF",
  bgColor: "bg-purple-200",
  icon: (
    <MdOutlineMonetizationOn className="text-purple-500 h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
  ),
  rate: 20,
  time: "Last Month",
};
const sales = {
  title: "Sales from Experts",
  total: 500000,
  value: "XAF",
  bgColor: "bg-purple-200",
  icon: (
    <FaMoneyCheckAlt className="text-purple-500 h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
  ),
  rate: 20,
  time: "Last Month",
};

const label = "Specialities";

const StatsAgroExpert = () => {
  const { user } = useContext(UserContext);
  // const [categories, setCategories] = useState([]);

  const categories = ["Soil Fertility", "Water Specialits", "Lab Expert"];

  // const fetchData = () => {
  //   const speciliteUrl = `${config.app.api_url}/specialities`;
  //   const getSpecialities = axios.get(speciliteUrl, {
  //     headers: { Authorization: "Bearer " + user.token },
  //   });

  //   axios.all([getSpecialities]).then(
  //     axios.spread(async (...allData) => {
  //       const allSpecialityData = allData[0].data.data;
  //       console.log("sdjsjdjd", allSpecialityData);
  //       let species = [];
  //       await allSpecialityData.forEach((item) => {
  //         species.push({ label: item.libelle, value: item._id });
  //       });
  //       setCategories(species);
  //     })
  //   );
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const series = [
    {
      data: [21, 22, 10],
    },
  ];

  const series1 = [44, 55, 13, 43, 22];
  const services = [
    "Cahier de charge",
    "Farm monitor",
    "Disease Treatment",
    "Seed Picker",
    "Farm Checker",
  ];
  const cities = ["Yaounde", "Douala", "Buea", "Kumba", "Maroua"];

  const countries = ["Cameroon", "Nigeria", "Congo", "Chad", "Ghana"];
  const countryData = [{ data: [50, 45, 35, 20, 10] }];

  return (
    <div className="container items-center px-4 pb-8 pt-2 m-auto mt-5">
      <div className="flex justify-between items-center pb-4 bg-white pt-2"></div>
      <div className="px-4">
        <div className="flex flex-wrap items-center justify-between">
          <Card
            title={data.title}
            bgColor={data.bgColor}
            icon={data.icon}
            total={data.total}
            value={data.value}
            rate={`${data.rate}%`}
            statsIcon={
              data.rate >= 20 ? <IoMdArrowDropup /> : <IoMdArrowDropdown />
            }
            iconColor={data.rate >= 20 ? "text-green-500" : "text-red-500"}
            time={`Vs ${data.time}`}
          />
          <Card
            title={revenue.title}
            bgColor={revenue.bgColor}
            icon={revenue.icon}
            total={revenue.total}
            rate={`${revenue.rate}%`}
            value={revenue.value}
            statsIcon={
              revenue.rate >= 10 ? <IoMdArrowDropup /> : <IoMdArrowDropdown />
            }
            iconColor={revenue.rate >= 10 ? "text-green-500" : "text-red-500"}
            time={`Vs ${revenue.time}`}
          />
          <Card
            title={paid.title}
            bgColor={paid.bgColor}
            icon={paid.icon}
            total={paid.total}
            value={paid.value}
            rate={`${paid.rate}%`}
            statsIcon={
              paid.rate >= 20 ? <IoMdArrowDropup /> : <IoMdArrowDropdown />
            }
            iconColor={paid.rate >= 20 ? "text-green-500" : "text-red-500"}
            time={`Vs ${paid.time}`}
          />
          <Card
            title={sales.title}
            bgColor={sales.bgColor}
            icon={sales.icon}
            total={sales.total}
            rate={`${sales.rate}%`}
            value={sales.value}
            statsIcon={
              sales.rate >= 10 ? <IoMdArrowDropup /> : <IoMdArrowDropdown />
            }
            iconColor={sales.rate >= 10 ? "text-green-500" : "text-red-500"}
            time={`Vs ${sales.time}`}
          />
        </div>
        <div className="flex items-center justify-between mt-6">
          <CountryCharts
            series={series}
            label={label}
            categories={categories}
            // title="Speciality Summary"
          />
          <CityChart series={series1} labels={services} title="Services" />
        </div>
        <div className="flex items-center justify-between mt-6">
          <CountryCharts
            series={countryData}
            label="Top 5 Counties with highest Agro-Expert"
            categories={countries}
          />

          <CityChart series={series1} labels={cities} title="Top Cities" />
        </div>
      </div>
    </div>
  );
};

export default StatsAgroExpert;
