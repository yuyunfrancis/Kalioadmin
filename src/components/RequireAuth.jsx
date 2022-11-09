import { useContext } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import UserContext from "../contexts/UserContext";

const RequireAuth = () => {
  const { user } = useContext(UserContext);
  const location = useLocation();

  return user !== null ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
