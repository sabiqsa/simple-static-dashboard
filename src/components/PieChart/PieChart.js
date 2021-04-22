import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";

import "./PieChart.css";

const PieChart = ({ data }) => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    setChartData({
      labels: ["#item1", "#item2", "#item3"],
      datasets: [
        {
          label: "Revenue",
          data: [2562, 2438, 3000, 2000],
          backgroundColor: [
            "rgba(114, 94, 156, 1)",
            "rgba(92, 143, 148, 1)",
            "rgba(235, 164, 94, 1)",
            "rgba(228, 234, 235, 1)"
          ],
          borderWidth: 0
        }
      ]
    });
  };

  useEffect(() => {
    if (data) {
      chart();
    }
  }, [data]);

  const options = {
    legend: {
      position: "bottom",
      boxWidth: 10,
      borderRadius: "20px",
      maxWidth: 20,
      labels: {
        padding: 30,
        boxWidth: 8,
        fontSize: 12,
        usePointStyle: 5
      }
    },
    legendCallback: chart => {
      const renderLabels = chart => {
        const { data } = chart;
        return data.datasets[0].data
          .map(
            (_, i) =>
              `<li>
                  <div id="legend-${i}-item" class="legend-item">
                    <span style="background-color:
                      ${data.datasets[0].backgroundColor[i]}">
                      &nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                    ${data.labels[i] &&
                      `<span class="label">${data.labels[i]}: $${data.datasets[0].data[i]}</span>`}
                  </div>
              </li>
            `
          )
          .join("");
      };
      return `
        <ul class="chartjs-legend">
          ${renderLabels(chart)}
        </ul>`;
    },
    title: {
      display: false,
      text: "Chart.js Pie Chart"
    },
    tooltips: {
      yAlign: "bottom",
      callbacks: {
        label: function(tooltipItem, data) {
          let dataset = data.datasets[tooltipItem.datasetIndex];
          let index = tooltipItem.index;
          return "$" + dataset.data[index];
        },
        labelColor: function(tooltipItem, data) {
          return {
            backgroundColor: null
          };
        }
      }
    },
    responsive: true
  };
  return (
    <div className="pc__container">
      <div className="pc__content">
        <div className="pc__content_name">Conversion</div>
        <div className="pc__icon_setting" />
      </div>

      <Pie width={50} height={50} data={chartData} options={options} />
    </div>
  );
};

export default PieChart;
