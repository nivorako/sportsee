import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

import PropTypes from "prop-types"

export default function ChartPie(props) {
   
    const data = [
        { name: 'showData', value: props.score, fillColor: "red" },
        { name: 'hideData', value: 100 - props.score, fillColor: "transparent" }
      ]
    return (
        <ResponsiveContainer>    
            <PieChart width={400} height={400} >
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={70}
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


ChartPie.propTypes = {
    score: PropTypes.number.isRequired,
}