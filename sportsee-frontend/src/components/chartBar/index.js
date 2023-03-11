import React from 'react'
import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { useEffect, useState } from 'react'

import "./chartBar.css"

export default function ChartBar({userActivity}) {
  const [data, setData] = useState([])
  useEffect(() => {
    setData(userActivity)
  }, [userActivity])

    return (  
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          
        >
          <text x={100} y={40} fill="black"  >
          Activité quotidienne
          </text>
          <CartesianGrid strokeDasharray="1 1" vertical="" />
          <XAxis dataKey="name" />
         
          <Tooltip />
          <Legend verticalAlign="top" height={36} align="right" />
          <Bar yAxisId="kg" dataKey="poids" fill="red" barSize={10} radius={[10,10,0,0]}/>
          <Bar yAxisId="cal" dataKey="calories" fill="black" barSize={10}  radius={[10,10,0,0]}/>
        </BarChart>
      </ResponsiveContainer>
      
    );
  }
