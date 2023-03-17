import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

export default function ChartPie({score}) {
   
    const data = [
        { name: 'showData', value: score, fillColor: "red" },
        { name: 'hideData', value: 100 - score, fillColor: "transparent" }
      ]
    return (
        <ResponsiveContainer>    
            <PieChart width={400} height={400} >
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    startAngle={90}
                    endAngle={450}
                    fill="#888000"
                    dataKey="value"   
                >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fillColor} cornerRadius="50%"/>
                ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
}
