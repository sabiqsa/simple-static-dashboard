import React, { useEffect, useState } from "react";
import { format } from "date-fns";

import "./Table.css";

const Table = ({ data }) => {
  const [dataTable, setDataTable] = useState([]);

  const getData = () => {
    setDataTable(data.slice(0, 5));
  };

  useEffect(() => {
    if (data) {
      getData();
    }
  }, [data]);

  const getStatusColor = statusColor => {
    if (statusColor === "completed") {
      return (
        <div
          style={{
            backgroundColor: "#789764",
            color: "#FFFFFF",
            padding: "4px 7px",
            width: "70%",
            textAlign: "center",
            height: "20px",
            borderRadius: "4px"
          }}
        >
          {statusColor}
        </div>
      );
    }
    if (statusColor === "pending") {
      return (
        <div
          style={{
            backgroundColor: "#E59849",
            color: "#FFFFFF",
            padding: "4px 7px",
            width: "70%",
            textAlign: "center",
            height: "20px",
            borderRadius: "4px"
          }}
        >
          {statusColor}
        </div>
      );
    }
    if (statusColor === "canceled") {
      return (
        <div
          style={{
            backgroundColor: "#D66D4B",
            color: "#FFFFFF",
            padding: "4px 7px",
            width: "70%",
            textAlign: "center",
            height: "20px",
            borderRadius: "4px"
          }}
        >
          {statusColor}
        </div>
      );
    }
  };

  return (
    <div className="table__container">
      <div className="table__content">
        <div className="table__content_name">Orders</div>
      </div>
      <div className="table__content_container">
        <tr className="table__content_header">
          <td style={{ width: "50%" }}>Oder Number</td>
          <td>Status</td>
          <td>Operator</td>
          <td>Location</td>
          <td>Start Date</td>
          <td>Due Date</td>
        </tr>
        {dataTable.map(datas => (
          <tr className="table__content_column">
            <td style={{ width: "50%" }}>
              #{datas.order_id.substr(0, 4).toUpperCase()}
            </td>
            <td>{getStatusColor(datas.status)}</td>
            <td>{datas.full_name}</td>
            <td>{datas.location}</td>
            <td>{format(new Date(datas.start_date), "dd/mm/yyyy hh:mm")}</td>
            <td>{format(new Date(datas.due_date), "dd/mm/yyyy hh:mm")}</td>
          </tr>
        ))}
      </div>
    </div>
  );
};

export default Table;
