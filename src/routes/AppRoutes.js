import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/header/Header";
import Sidebar from "../components/Sidebar";
import AddPacks from "../layouts/kalio/packs/AddPacks";
import AddPlanttype from "../layouts/kalio/AddPLanttype";
import AddSpeciality from "../layouts/kalio/speciality/AddSpeciality";
import AddMainCategory from "../layouts/category/AddMainCategory";
import AddSubCategory from "../layouts/category/AddSubCategory";
import Categories from "../layouts/category/Categories";
import AddExpert from "../layouts/expert/AddExpert";
import AgroExperts from "../layouts/expert/AgroExperts";
import AddLaboratory from "../layouts/laboratory/AddLaboratory";
import Laboratories from "../layouts/laboratory/Laboratories";
import Dashboard from "../pages/dashboard/Dashboard";
import KalioData from "../layouts/kalio/KalioData";
import Products from "../layouts/products/Products";
import StatsAgroExpert from "../layouts/expert/StatsAgroExpert";
import Statistics from "../layouts/products/Statistics";
import AddDisease from "../layouts/kalio/AddDisease";
import AllUsers from "../layouts/users/AllUsers";
import AddUser from "../layouts/users/AddUser";

const AppRoutes = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/experts" element={<AgroExperts />} />
          <Route path="/add-expert" element={<AddExpert />} />
          <Route path="/experts/statistics" element={<StatsAgroExpert />} />
          <Route path="/laboratories" element={<Laboratories />} />
          <Route path="/add-laboratory" element={<AddLaboratory />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/add-maincategory" element={<AddMainCategory />} />
          <Route path="/add-subCategory" element={<AddSubCategory />} />
          <Route path="/kalio-data" element={<KalioData />} />
          <Route path="/add-speciality" element={<AddSpeciality />} />
          <Route path="/add-plantype" element={<AddPlanttype />} />
          <Route path="/kalio/add-disease" element={<AddDisease />} />
          <Route path="/add-packs" element={<AddPacks />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/statistics" element={<Statistics />} />
          <Route path="/users" element={<AllUsers />} />
          <Route path="/add-user" element={<AddUser />} />

          {/* <Route path="/login" element={<Login />} />
          <Route path="/verify-phone" element={<VerifyPhone />} /> */}
        </Routes>
      </div>
    </div>
  );
};

export default AppRoutes;
