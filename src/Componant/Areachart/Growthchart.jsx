import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import "./growthchart.scss";
const data = [
  {
    name: '2021',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '2022',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '2023',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '2024',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },

];

export default function Growthchart() {
  return (
    <div className='growthchart'>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={200}
          height={300}
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: -20,
            bottom: 0,
          }}

        >
          {/* <CartesianGrid strokeDasharray="3 4" /> */}
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
