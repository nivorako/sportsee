import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

import { FetchUserData } from "../../services/hooks/fetchApi";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "./chartLine.css";

export default function ChartLine(props) {
    const {id} = props;
    const{ data, isLoading, error} = FetchUserData(id, "average-sessions")
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

    if(error){
        return <div>Une erreur est apparue</div>;
    }
    if(isLoading){
        return (<div>Loading....</div>);
    }
    if(!data){
        return <div>en attente de données</div>
    }

    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
                data={data}
                margin={{ top: 30, right: 10, bottom: 5, left: 10 }}
            >
                <Line
                    type="monotone"
                    dataKey="sessionLength"
                    stroke="#fff"
                    strokeWidth={1}
                    dot={false}
                />
                <Tooltip content={<CustomTooltip />} position={{y:0}} />
                <XAxis
                    dataKey="day"
                    stroke="white"
                    interval={0}
                    axisLine={false}
                />
                <CartesianGrid stroke="red" strokeDasharray="5 5" />
            </LineChart>
        </ResponsiveContainer>
    );
}

ChartLine.propTypes = {
    id: PropTypes.string.isRequired,
};
