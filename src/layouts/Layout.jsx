import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
