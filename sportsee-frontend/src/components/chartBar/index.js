import React from "react";
import {  FetchUserData } from "../../services/hooks/fetchApi";
import {
    BarChart,
    Bar,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    YAxis,
   
} from "recharts";

import PropTypes from "prop-types";

import "./chartBar.css";

export default function ChartBar(props) {
    const{id} = props;
    
    const{data, isLoading, error} = FetchUserData(id, "activity");

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip">
                    <p>{`${payload[0].value} kg`}</p>
                    <p>{`${payload[1].value} cal`}</p>
                </div>
            );
        }
        return null;
    };

    if(error){
        return <div>Une erreur est apparue</div>;
    }
    if(isLoading){
        return (<div>Loading....</div>);
    }
    if(!data){
        return <div>en attente de données</div>
    }
    //console.log("data :", data)
    return (
        <ResponsiveContainer width="100%" height="90%">
            <BarChart
                width={400}
                height={300}
                data={data}
                margin={{
                    top: 70,
                    right: 30,
                    left: 20,
                    bottom: 20,
                }}
            >
                <CartesianGrid strokeDasharray="1 1" vertical="" />
                <XAxis dataKey="name" dy={20}/>
                <YAxis 
                    yAxisId="kg" 
                    dataKey="poids"
                    orientation="right" 
                    domain={[69, 70]}
                    tickCount={3}
                />
                <YAxis 
                    yAxisId="cal" 
                    dataKey="calories"
                    orientation="right" 
                    hide="true"
                />

                <Tooltip content={<CustomTooltip />} />
                <Bar
                    yAxisId="kg"
                    dataKey="poids"
                    fill="red"
                    barSize={7}
                    radius={[10, 10, 0, 0]}
                    margin={{top: 10, bottom: 50}}
                />
                <Bar
                    yAxisId="cal"
                    dataKey="calories"
                    fill="black"
                    barSize={7}
                    radius={[10, 10, 0, 0]}
                />
            </BarChart>
        </ResponsiveContainer>
    );
}

ChartBar.propTypes = {
     id: PropTypes.string.isRequired,
};
