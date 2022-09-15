import React from "react";
import { Routes, Route, Redirect, BrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import VerifyPhone from "../pages/VerifyPhone";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/verify-phone" element={<VerifyPhone />} />
    </Routes>
  );
};

export default AuthRoutes;
