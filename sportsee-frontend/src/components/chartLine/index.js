import React from 'react';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import {useState, useEffect} from "react"

import "./chartLine.css"

// const initialData = [
//   {
//     day: 'L',
//     sessionLength: 20,
//   },
//   {
//     day: 'M',
//     sessionLength: 23,
//   },
//   {
//     day: 'M',
//     sessionLength: 30,
//   },
//   {
//     day: 'J',
//     sessionLength: 49,
//   },
//   {
//     day: 'V',
//     sessionLength: 0,
//   },
//   {
//     day: 'S',
//     sessionLength: 0,
//   },
//   {
//     day: 'D',
//     sessionLength: 60,
//   },
// ];

export default function ChartLine(userAverageSession) {
  const [data, setData] = useState([])
  useEffect(() => {
    setData(userAverageSession.userAverageSession)
  }, [userAverageSession.userAverageSession])
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-lineTooltip">
          <p>{`${payload[0].value}min`}</p>
          
        </div>
      );
    }
    return null;
  };
  return (
    <ResponsiveContainer width="100%" height="100%">
        
      <LineChart  data={data} margin={{ top: 30, right: 10, bottom: 5, left: 10 }}>
        <Line  
          type="monotone" 
          dataKey="sessionLength" 
          stroke="#fff" 
          strokeWidth={1}
          dot= {false}
        />
        <Tooltip content={<CustomTooltip />}/>
        <XAxis dataKey="day" stroke="white" interval={0} axisLine={false}/>
        <CartesianGrid stroke="red" strokeDasharray="5 5"/>
      </LineChart>
    </ResponsiveContainer>
  );
}
