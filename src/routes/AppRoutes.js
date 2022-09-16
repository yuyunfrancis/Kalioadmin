import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/header/Header";
import Sidebar from "../components/Sidebar";
import AddPacks from "../layouts/kalio/packs/AddPacks";
import AddPlanttype from "../layouts/kalio/AddPLanttype";
import AddSpeciality from "../layouts/kalio/AddSpeciality";
import AddMainCategory from "../layouts/category/AddMainCategory";
import AddSubCategory from "../layouts/category/AddSubCategory";
import Categories from "../layouts/category/Categories";
import AddExpert from "../layouts/expert/AddExpert";
import AgroExperts from "../layouts/expert/AgroExperts";
import AddLaboratory from "../layouts/laboratory/AddLaboratory";
import Laboratories from "../layouts/laboratory/Laboratories";
import Dashboard from "../pages/dashboard/Dashboard";
import KalioData from "../layouts/kalio/KalioData";

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
          <Route path="/laboratories" element={<Laboratories />} />
          <Route path="/add-laboratory" element={<AddLaboratory />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/add-maincategory" element={<AddMainCategory />} />
          <Route path="/add-subCategory" element={<AddSubCategory />} />
          <Route path="/kalio-data" element={<KalioData />} />
          <Route path="/add-speciality" element={<AddSpeciality />} />
          <Route path="/add-plantype" element={<AddPlanttype />} />
          <Route path="/add-packs" element={<AddPacks />} />
          {/* <Route path="/login" element={<Login />} />
          <Route path="/verify-phone" element={<VerifyPhone />} /> */}
        </Routes>
      </div>
    </div>
  );
};

export default AppRoutes;
