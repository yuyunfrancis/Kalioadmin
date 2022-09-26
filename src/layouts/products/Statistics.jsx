import React, { useState, useEffect } from "react";

import { BiBasket } from "react-icons/bi";
import { BsShop, BsCartCheck } from "react-icons/bs";
import { MdOutlineAttachMoney } from "react-icons/md";

import { config } from "../../config/config";
import useDataFetching from "../../hooks/UseDataFetching";

import CardProduct from "../../components/cards/CardProduct";
import IncomeChart from "../../components/charts/IncomeChart";
import CityChart from "../../components/charts/CityChart";

const Statistics = () => {
  // const [total, setTotal] = useState([]);

  const [loading, error, products, fetchData] = useDataFetching(
    `${config.app.api_url}/products`
  );

  const [storeLoading, storeError, stores, fetchStoreData] = useDataFetching(
    `${config.app.api_url}/stores`
  );

  const [orderLoading, orderError, order, fetchOrderData] = useDataFetching(
    `${config.app.api_url}/order`
  );

  //data
  const data = orderLoading || orderError ? [] : order.data;
  const store = storeLoading || storeError ? [] : stores.data;

  //functions
  let sumData = [];
  data.map((item) => {
    if (item.status == 4) {
      sumData.push({ total: item.total, createdAt: item.createdAt });
    }
  });

  const sum = sumData.reduce((accumulator, object) => {
    return accumulator + object.total;
  }, 0);

  let shops = [];

  store.map((shop) => {
    if (shop.orders.length > 0) {
      shops.push(shop.orders);
    }
  });

  let ordersByStore = [];
  store.map((item) => {
    if (item.orders.length > 0) {
      ordersByStore.push({
        storeName: item.name,
        allOrders: item.orders.length,
      });
    }
  });

  const groupByStore = data.reduce((group, item) => {
    const { store } = item;
    group[store] = group[store] ?? [];
    group[store].push(item);
    return group;
  }, {});
  console.log("Allllllllllll", ordersByStore);

  let total = 0;

  const [
    transactionLoading,
    transactionError,
    transactions,
    fetchTransactionData,
  ] = useDataFetching(`${config.app.api_url}/transaction`);

  //Card Data
  const items = {
    title: "All Products",
    total: loading || error ? 0 : products.data.length,
    rate: 55,
    icon: (
      <BiBasket className="text-2xl left-2.5 relative top-2.5 text-white" />
    ),
  };
  const itemShop = {
    title: "All Shops",
    total: storeLoading || storeError ? 0 : stores.data.length,
    rate: 55,
    icon: <BsShop className="text-2xl left-2.5 relative top-2.5 text-white" />,
  };
  const orderItem = {
    title: "All order",
    total: orderLoading || orderError ? 0 : order.data.length,
    rate: 45,
    icon: (
      <BsCartCheck className="text-2xl left-2.5 relative top-2.5 text-white" />
    ),
  };
  const sales = {
    title: "All Sales",
    total: sum,
    rate: 45,
    icon: (
      <MdOutlineAttachMoney className="text-2xl left-2.5 relative top-2.5 text-white" />
    ),
  };

  //graphData1
  const categories = sumData.map((i) => i.createdAt);
  const series = [
    {
      name: "Sales",
      data: sumData.map((d) => d.total),
    },
  ];
  //chart2data
  const orderItems = ordersByStore.map((s) => s.allOrders);
  const names = ordersByStore.map((s) => s.storeName);

  return (
    <div className="container items-center px-4 pb-8 pt-2 m-auto mt-5">
      <div className="flex items-center px-8 py-8">
        <CardProduct
          title={items.title}
          total={items.total}
          rate={`${items.rate}%`}
          icon={items.icon}
          level={items.rate > 50 ? " increase" : " decrease"}
          color={
            items.rate > 50
              ? "text-emerald-500 text-xs"
              : "text-red-500 text-xs"
          }
        />

        <CardProduct
          title={itemShop.title}
          total={itemShop.total}
          rate={`${itemShop.rate}%`}
          icon={itemShop.icon}
          level={itemShop.rate > 50 ? " increase" : " decrease"}
          color={
            itemShop.rate > 50
              ? "text-emerald-500 text-xs"
              : "text-red-500 text-xs"
          }
        />
        <CardProduct
          title={orderItem.title}
          total={orderItem.total}
          rate={`${orderItem.rate}%`}
          icon={orderItem.icon}
          level={orderItem.rate > 50 ? " increase" : " decrease"}
          color={
            orderItem.rate > 50
              ? "text-emerald-500 text-xs"
              : "text-red-500 text-xs"
          }
        />
        <CardProduct
          title={sales.title}
          total={`XAF${sales.total}`}
          rate={`${sales.rate}%`}
          icon={sales.icon}
          level={sales.rate > 50 ? " increase" : " decrease"}
          color={
            sales.rate > 50
              ? "text-emerald-500 text-xs"
              : "text-red-500 text-xs"
          }
        />
      </div>
      <div className="flex items-center py-8 justify-between">
        <IncomeChart
          series={series}
          category={categories}
          title="Sales Progression"
        />
        <CityChart
          series={orderItems}
          labels={names}
          title="Orders from Stores"
        />
      </div>
      {/* <div className="flex items-center px-8 py-8 justify-between">
        <IncomeChart
          series={series}
          category={categories}
          title="Sales Progression"
        />
        <CityChart
          series={orderItems}
          labels={names}
          title="Orders from Stores"
        />
      </div> */}
    </div>
  );
};

export default Statistics;
