import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { UserContextProvider } from "./contexts/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
