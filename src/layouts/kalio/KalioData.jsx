import React from "react";
import { useNavigate } from "react-router-dom";
import Donut from "../../components/charts/Donut";
import IncomeChart from "../../components/charts/IncomeChart";
import Packs from "./packs/Packs";

const KalioData = () => {
  const navigate = useNavigate();
  return (
    <div className="container items-center px-4 pb-8 pt-2 m-auto mt-5">
      <div>
        <h3>Kalio Data</h3>
      </div>
      <div>
        <Packs />
      </div>
    </div>
  );
};

export default KalioData;
