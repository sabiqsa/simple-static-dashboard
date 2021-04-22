import React, { useState, useEffect } from "react";
import BarChart from "./components/BarChart/BarChart";
import Navbar from "./components/Navbar/Navbar";
import NewDate from "./components/NewDate/NewDate";

import axios from "axios";

import "./App.css";
import PieChart from "./components/PieChart/PieChart";
import PolarChart from "./components/PolarChart/PolarChart";
import Table from "./components/Table/Table";
import Calendar from "./components/Calendar/Calendar";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://ecdba7fe-ec10-4d90-8d0e-80f8364c7624.mock.pstmn.io/takehometest/frontend/web/dashboard"
      );

      const { data } = response.data;
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(data);
  return (
    <div className="app__container">
      <Navbar />
      <NewDate />
      <div className="app__content_wrapper">
        <div className="app__content_top">
          <PieChart data={data ? data.orders : []} />
          <PolarChart data={data ? data.orders : []} />
          <BarChart data={data ? data.orders : []} />
        </div>
        <div className="app__content_bottom">
          <Calendar />
          <Table data={data ? data.orders : []} />
        </div>
      </div>
    </div>
  );
}

export default App;
