import React from "react";
import {  FetchUserData } from "../../services/hooks/fetchApi";
import {
    BarChart,
    Bar,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import "./chartBar.css";

export default function ChartBar(props) {
    const{id} = props;
    
    const{data, isLoading, error} = FetchUserData(id, "activity");
    //const [data, setData] = useState([]);
    // useEffect(() => {
    //     setData(props.userActivity);
    // }, [props.userActivity]);

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
    //console.log("data :", data.data.sessions)
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
                    bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="1 1" vertical="" />
                <XAxis dataKey="name" />

                <Tooltip content={<CustomTooltip />} />
                <Bar
                    yAxisId="kg"
                    dataKey="poids"
                    fill="red"
                    barSize={7}
                    radius={[10, 10, 0, 0]}
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

// ChartBar.propTypes = {
//     userActivity: PropTypes.array.isRequired,
// };
