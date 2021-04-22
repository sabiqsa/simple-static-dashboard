import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { format, parseISO, subDays } from "date-fns";

import "./BarChart.css";

const BarChart = ({ data }) => {
  const [filterData, setFilterData] = useState([]);
  const [chartData, setChartData] = useState({});

  const canvas = document.createElement("canvas");
  let ctx = canvas.getContext("2d");
  let gradient = ctx.createLinearGradient(0, 0, 0, 450);
  gradient.addColorStop(0, "rgba(120, 151, 100, 0.65)");
  gradient.addColorStop(0.5, "rgba(255, 255, 255, 1)");
  gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

  const chart = () => {
    setChartData({
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Revenue",
          data: data.map(datas => datas.conversion_revenue),
          backgroundColor: gradient,
          borderColor: ["#789764"],
          borderWidth: 4
        }
      ]
    });
  };

  useEffect(() => {
    if (data) {
      chart();
    }
  }, [data]);

  const value = "125000";
  const valueDisplay = (value / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });

  const options = {
    elements: {
      point: {
        radius: 0
      }
    },
    legend: {
      display: false
    },
    responsive: true,
    scales: {
      xAxes: [
        {
          gridLines: {
            display: true
          },
          ticks: {
            fontColor: "#9C9C9C",
            fontSize: 12,
            stepSize: 1,
            beginAtZero: true
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: "#9C9C9C",
            fontSize: 12,

            callback: function(value) {
              return `$${value}k`;
            }
          },
          gridLines: {
            display: false,
            color: "#E5E5E5"
          }
        }
      ]
    }
  };

  return (
    <div className="bc__container">
      <div className="bc__content">
        <div className="bc__title">Revenue</div>

        <div>
          <div className="bc__date">
            <p>Feb - Mar 2021 </p>
            <div className="bc__calendar" />
          </div>
        </div>
      </div>
      <div>
        <Line width={400} height={160} data={chartData} options={options} />
      </div>
      <div className="bc__total_container">
        <div className="bc__total_title">Total Revenue</div>
        <div className="bc__total_desc">$77685.41</div>
        <div className="bc__total_margin">
          <div className="bc__arrows" />
          <p>7.00%</p>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
