import React, { useContext, useEffect } from "react";
import { Routes, Route, Redirect, BrowserRouter } from "react-router-dom";
import UserContext from "./contexts/UserContext";
import AppRoutes from "./routes/AppRoutes";

import AuthRoutes from "./routes/AuthRoutes";

function App() {
  const { user, error, getUser } = useContext(UserContext);

  useEffect(() => {
    getUser();
  }, []);

  return <>{user !== null ? <AppRoutes /> : <AuthRoutes />}</>;
}

export default App;
