import React from "react";
import { HiOutlineUsers } from "react-icons/hi";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { MdArrowDropUp, MdArrowDropDown, MdAttachMoney } from "react-icons/md";
import { BiPurchaseTagAlt } from "react-icons/bi";
import StatsCard from "../../components/cards/StatsCard";
import WelcomeBanner from "../../components/WelcomeBanner";
import IncomeChart from "../../components/charts/IncomeChart";
import RevenueChart from "../../components/charts/RevenueChart";
import CountryCharts from "../../components/charts/CountryCharts";
import CityChart from "../../components/charts/CityChart";
import useDataFetching from "../../hooks/UseDataFetching";
import { config } from "../../config/config";
import ListCard from "../../components/cards/ListCard";

const Dashboard = () => {
  const [loading, error, users] = useDataFetching(
    `${config.app.api_url}/get-all-users`
  );
  const [expertLoading, expertError, experts] = useDataFetching(
    `${config.app.api_url}/agro-expert`
  );
  const [laboratoryLoading, laboratoryError, laboratories] = useDataFetching(
    `${config.app.api_url}/laboratories`
  );

  const [orderLoading, orderError, order, fetchOrderData] = useDataFetching(
    `${config.app.api_url}/order`
  );

  const data = orderLoading || orderError ? [] : order.data;

  let sumData = [];
  data.map((item) => {
    if (item.status == 4) {
      sumData.push({ total: item.total, createdAt: item.createdAt });
    }
  });

  const sum = sumData.reduce((accumulator, object) => {
    return accumulator + object.total;
  }, 0);

  const [
    transactionLoading,
    transactionError,
    transactions,
    fetchTransactionData,
  ] = useDataFetching(`${config.app.api_url}/transaction`);

  const transaction =
    transactionLoading || transactionError ? [] : transactions.data;

  let transData = [];
  transaction.map((item) => {
    if (item.status == 2) {
      transData.push({
        libelle: item.libelle,
        amount: item.amount,
        createdAt: item.createdAt,
      });
    }
  });
  const sumTransact = transData.reduce((accumulator, object) => {
    return accumulator + object.amount;
  }, 0);

  const income = sum + sumTransact;

  const time = transData.map((t) => new Date(t.createdAt).toLocaleString());
  const transactionName = transData.map((n) => n.libelle);
  const price = transData.map((p) => p.amount);

  //chart data
  const series = [
    {
      name: transData.map((t) => t.libelle),
      data: price,
    },
  ];
  const categories = transData.map((i) => i.createdAt);

  //data
  const userData = {
    title: "Users",
    icon: <HiOutlineUsers className="h-6 w-6 group-hover:text-gray-50" />,
    users: loading || error ? 0 : users.data.length,
    text: "Users",
    rate: 12,
  };
  const expertData = {
    title: "Experts",
    users: expertLoading || expertError ? 0 : experts.data.length,
    icon: <HiOutlineUsers className="h-6 w-6 group-hover:text-gray-50" />,
    icome: "20 000",
    text: "agronomists",
    rate: 9,
  };
  const laboratoryData = {
    title: "Laboratories",
    users: laboratoryLoading || laboratoryError ? 0 : laboratories.data.length,
    icon: <HiOutlineUsers className="h-6 w-6 group-hover:text-gray-50" />,
    icome: "20 000",
    text: "laboratories",
    rate: 9,
  };
  const incomeData = {
    title: "Income",
    // users: laboratoryLoading || laboratoryError ? 0 : laboratories.data.length,
    icon: <MdAttachMoney className="h-6 w-6 group-hover:text-gray-50" />,
    icome: income,
    text: "XAF",
    rate: 9,
  };

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
          icon={expertData.icon}
          title={expertData.title}
          users={expertData.users}
          text={expertData.text}
          rate={
            expertData.rate > 10 ? `+${expertData.rate}` : `-${expertData.rate}`
          }
          icon1={
            expertData.rate > 10 ? (
              <MdArrowDropUp className="h-6 w-6 mr-1 text-green-500 group-hover:text-gray-200" />
            ) : (
              <MdArrowDropDown className="h-6 w-6 mr-1 text-red-600 group-hover:text-gray-200" />
            )
          }
        />
        <StatsCard
          icon={laboratoryData.icon}
          title={laboratoryData.title}
          users={laboratoryData.users}
          text={laboratoryData.text}
          rate={
            laboratoryData.rate > 10
              ? `+${laboratoryData.rate}`
              : `-${laboratoryData.rate}`
          }
          icon1={
            laboratoryData.rate > 10 ? (
              <MdArrowDropUp className="h-6 w-6 mr-1 text-green-500 group-hover:text-gray-200" />
            ) : (
              <MdArrowDropDown className="h-6 w-6 mr-1 text-red-600 group-hover:text-gray-200" />
            )
          }
        />
        <StatsCard
          icon={incomeData.icon}
          title={incomeData.title}
          users={incomeData.icome}
          text={incomeData.text}
          rate={
            incomeData.rate > 10 ? `+${incomeData.rate}` : `-${incomeData.rate}`
          }
          icon1={
            incomeData.rate > 10 ? (
              <MdArrowDropUp className="h-6 w-6 mr-1 text-green-500 group-hover:text-gray-200" />
            ) : (
              <MdArrowDropDown className="h-6 w-6 mr-1 text-red-600 group-hover:text-gray-200" />
            )
          }
        />
      </div>

      {/* finacial stats */}
      <div className="flex justify-between mt-8 md:gap-6 mx-4 ">
        <IncomeChart series={series} category={categories} />

        <div class="shadow-lg rounded-xl w-full md:w-2/5 p-4 bg-white dark:bg-gray-800 relative overflow-hidden">
          <div class="w-full flex items-center justify-between mb-8">
            <p class="text-gray-800 dark:text-white text-xl">Transactions</p>
            <a
              href="#"
              class="flex items-center text-sm hover:text-green-600 dark:text-gray-50 dark:hover:text-white text-gray-300 border-0 focus:outline-none"
            >
              VIEW ALL
            </a>
          </div>
          {transData
            .map((transact) => (
              <ListCard
                icon={<BiPurchaseTagAlt />}
                item={transact.libelle}
                price={`XAF${transact.amount}`}
                date={new Date(transact.createdAt).toLocaleString()}
              />
            ))
            .slice(0, 5)}
        </div>

        {/* <RevenueChart /> */}
      </div>

      {/* countries and cities */}
      <div className="flex justify-between mt-8 md:gap-6 ">
        {/* <CountryCharts /> */}
        {/* <CityChart /> */}
      </div>
    </div>
  );
};

export default Dashboard;
