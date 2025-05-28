import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Link } from "react-router-dom";
import './chartbox.scss'

export default function Chartbox() {
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div className='chartbox'>
      <div className="boxinfo">
        <div className="title">
          <img src="./expense.svg" alt="" />
          <span>Total Sales</span>
        </div>
        <h4>12000000</h4>
        <Link to="./" style={{ color: "rgb(118, 165, 165)" }}>View Detail</Link>

      </div>
      <div className="chartinfo">
        <div className="chart">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart width={300} height={100} data={data}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
              />
              <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <span className='percentage'>40%</span>
          <span className='duration'>1 Year</span>
        </div>
      </div>
    </div>
  )
}
