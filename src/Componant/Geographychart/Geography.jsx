import React from 'react'
import { Chart } from "react-google-charts";

export const data = [
  ["Country", "Turnover"],
  ["India", 400],
  ["United States", 300],
  ["Brazil", 400],
  ["Canada", 500],
  ["France", 600],
  ["RU", 700],
];

export const options = {
  // region: "002", // Africa
  colorAxis: { colors: ["#00853f", "black", "#e31b23"] },
  backgroundColor: "#2a3447",
  datalessRegionColor: "#f8bbd0",
  defaultColor: "#f5f5f5",
};

export default function Geography() {
  return (
    <div className='geography'>
      <h2>Turnover </h2>
      <Chart
        chartEvents={[
          {
            eventName: "select",
            callback: ({ chartWrapper }) => {
              const chart = chartWrapper.getChart();
              const selection = chart.getSelection();
              if (selection.length === 0) return;
              const region = data[selection[0].row + 1];
              console.log("Selected : " + region);
            },
          },
        ]}


        chartType="GeoChart"
        width="100%"
        height="400px"
        options={options}
        data={data}
      />
    </div>
  )
}
