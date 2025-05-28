import React from 'react'
import { Chart } from "react-google-charts";

// export const data = [

//   ["Task", "Hours per Day"],
//   ["Rent", 100000],
//   ["Food & Hospitality", 21000000],
//   ["Employee Service", 9800000],
//   ["IT Services", 1400000],
//   ["Sales & Marketing", 75000000],
// ];

// export const options = {
//   title: "Anual Expenditure",
//   is3D: true,
//   backgroundColor: "#2a3447",
//   chartArea: { left: 20, top: 20, width: '100%', height: '75%' },
//   position: 'top',
//   Default: { color: 'White', fontSize: 16 }

// };

export const data = [

  ["Company", "Product", "Volume", "Turnover"],
  ["TATA", "Power", 12, 5],
  ["BAJAJ", "Coal", 20, 7],
  ["ADANI", "Power", 7, 3],
  ["CIPLA", "Coal", 54, 2],
  ["RELIENCE", "Coal", 22, 6],
  ["INOX ", "Power", 22, 2],
  ["ZYDUS", "Medicine", 3, 1],
  ["TORRENT", "Medicine", 42, 8],
  ["ITC", "Medicine", 32, 2],
];

export const options = {
  legend: "none",
  chartArea: { left: 1, top: 0, right: 0, bottom: 0 },
  pieSliceText: "label",
  backgroundColor: "#2a3447",
  is3D: true,
};
export default function Expiechart() {
  return (
    <div>
      <h3>Annual Transaction</h3>
      {/* <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      /> */}
      <Chart
        chartType="PieChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
        chartWrapperParams={{ view: { columns: [0, 3] } }}
        chartPackages={["corechart", "controls"]}
        controls={[
          {
            controlEvents: [
              {
                eventName: "statechange",
                callback: ({ chartWrapper, controlWrapper }) => {
                  console.log("State changed to", controlWrapper?.getState());
                },
              },
            ],
            controlType: "CategoryFilter",
            options: {
              filterColumnIndex: 1,
              ui: {
                labelStacking: "vertical",
                label: "Product Selection:",
                allowTyping: false,
                allowMultiple: false,
              },
            },
          },
        ]}
      />

    </div>
  )
}
