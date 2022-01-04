import React from "react";

import "./App.css";
import { BarChartSales } from "./components/BarChartSales";
import { LineChart } from "./components/LineChart";

const App = () => {
  return (
    <div className="App">
      <div className="chart">
        <LineChart />
      </div>
      <div className="chart">
        <BarChartSales />
      </div>
    </div>
  );
};

export default App;
