import React from "react";
import Header from "../components/header/Header";
import Sidebar from "../components/Sidebar";
import Layout from "./Layout";

const SideBarLayout = () => {
  return (
    <>
      <div>
        <div className="flex h-screen overflow-hidden">
          <Sidebar />
          <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <Header />
          </div>
        </div>
      </div>
      <Layout />
    </>
  );
};

export default SideBarLayout;
