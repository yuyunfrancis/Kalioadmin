import React from "react";
import { HiOutlineUsers } from "react-icons/hi";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";
import StatsCard from "../../components/cards/StatsCard";
import WelcomeBanner from "../../components/WelcomeBanner";
import IncomeChart from "../../components/charts/IncomeChart";
import DashboardIncomeChart from "./DashboardIcomeChart";

const userData = {
  title: "Total Users",
  icon: <HiOutlineUsers className="h-6 w-6 group-hover:text-gray-50" />,
  users: 20,
  text: "Users",
  rate: 12,
};
const icomeData = {
  title: "Total Icome",
  icon: <FaMoneyCheckAlt className="h-6 w-6 group-hover:text-gray-50" />,
  icome: "20 000",
  text: "XAF",
  rate: 9,
};

const Dashboard = () => {
  return (
    <div className="container items-center px-4 pb-8 pt-2 m-auto mt-5">
      <WelcomeBanner />
      <div className="flex flex-wrap pb-3 mx-4 md:mx-24 lg:mx-0">
        <StatsCard
          icon={userData.icon}
          title={userData.title}
          users={userData.users}
          text={userData.text}
          rate={userData.rate > 10 ? `+${userData.rate}` : `-${userData.rate}`}
          icon1={
            userData.rate > 10 ? (
              <MdArrowDropUp className="h-6 w-6 mr-1 text-green-500 group-hover:text-gray-200" />
            ) : (
              <MdArrowDropDown className="h-6 w-6 mr-1 text-red-600 group-hover:text-gray-200" />
            )
          }
        />
        <StatsCard
          icon={icomeData.icon}
          title={icomeData.title}
          users={icomeData.icome}
          text={icomeData.text}
          rate={
            icomeData.rate > 10 ? `+${icomeData.rate}` : `-${icomeData.rate}`
          }
          icon1={
            icomeData.rate > 10 ? (
              <MdArrowDropUp className="h-6 w-6 mr-1 text-green-500 group-hover:text-gray-200" />
            ) : (
              <MdArrowDropDown className="h-6 w-6 mr-1 text-red-600 group-hover:text-gray-200" />
            )
          }
        />
        <StatsCard
          icon={userData.icon}
          title={userData.title}
          users={userData.users}
          text={userData.text}
          rate={userData.rate > 10 ? `+${userData.rate}` : `-${userData.rate}`}
          icon1={
            userData.rate > 10 ? (
              <MdArrowDropUp className="h-6 w-6 mr-1 text-green-500 group-hover:text-gray-200" />
            ) : (
              <MdArrowDropDown className="h-6 w-6 mr-1 text-red-600 group-hover:text-gray-200" />
            )
          }
        />
        <StatsCard
          icon={userData.icon}
          title={userData.title}
          users={userData.users}
          text={userData.text}
          rate={userData.rate > 10 ? `+${userData.rate}` : `-${userData.rate}`}
          icon1={
            userData.rate > 10 ? (
              <MdArrowDropUp className="h-6 w-6 mr-1 text-green-500 group-hover:text-gray-200" />
            ) : (
              <MdArrowDropDown className="h-6 w-6 mr-1 text-red-600 group-hover:text-gray-200" />
            )
          }
        />
      </div>
      <div className="flex mt-8 md:gap-6">
        <DashboardIncomeChart />
      </div>
    </div>
  );
};

export default Dashboard;
