import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

import PropTypes from "prop-types";
import { FetchUserData } from "../../services/hooks/fetchApi";

export default function ChartPie(props) {
    const {id} = props;
    const{ data, isLoading, error} = FetchUserData(id, "score")
   
    if(error){
        return <div>Une erreur est apparue</div>;
    }
    if(isLoading){
        return (<div>Loading....</div>);
    }
    if(!data){
        return <div>en attente de données</div>;
    }
    const dataPie = [
        { name: "showData", value: data, fillColor: "red" },
        {
            name: "hideData",
            value: 1 - data,
            fillColor: "transparent",
        },
    ];
    return (
        <ResponsiveContainer>
            <PieChart width={400} height={400}>
                <Pie
                    data={dataPie}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={70}
                    startAngle={90}
                    endAngle={450}
                    fill="888000"
                    dataKey="value"
                >
                    {dataPie.map((entry, index) => (
                        <Cell
                            key={index}
                            fill={entry.fillColor}
                            cornerRadius="50%"
                        />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
}

ChartPie.propTypes = {
    id: PropTypes.string.isRequired,
};
