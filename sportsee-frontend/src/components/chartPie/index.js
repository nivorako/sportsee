import React from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 12, fillColor: "red" },
  { name: 'Group B', value: 88, fillColor: "transparent" }
]

export default function ChartPie() {
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
