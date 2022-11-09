import React, { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import UserContext from "../contexts/UserContext";

const ProtectedRoute = ({ user, redirectPath = "/login" }) => {
  const location = useLocation();
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
