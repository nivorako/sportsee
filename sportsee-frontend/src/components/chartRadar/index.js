import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
    CartesianGrid,
} from "recharts";

import { FetchUserData } from "../../services/hooks/fetchApi";

import PropTypes from "prop-types";

export default function ChartRadar(props) {
    const {id} = props;
    const{ data, isLoading, error} = FetchUserData(id, "performance");

    if(error){
        return <div>Une erreur est apparue</div>;
    }
    if(isLoading){
        return (<div>Loading....</div>);
    }
    if(!data){
        return <div>en attente de données</div>;
    }

    return (
        <ResponsiveContainer width="100%" height="100%" >
            <RadarChart
                cx="50%"
                cy="50%"
                outerRadius="80%"
                data={data}
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            >
                <CartesianGrid  stroke="none"/>
                <PolarGrid stroke="#fff" gridType="polygon" radialLines={false} />
                <PolarAngleAxis
                    dataKey="kind"
                    stroke="#FFF"
                    tick={{ fontSize: 11 }}
                    tickLine={false}
                    axisLine={false}
                />
                <PolarRadiusAxis axisLine={false} tick={false} />
                <Radar
                    name="value"
                    dataKey="value" 
                    fill="red"
                    fillOpacity={0.5} 
                    dot={false}
                    stroke="none"
                />
            </RadarChart>
        </ResponsiveContainer>
    );
}

ChartRadar.propTypes = {
    id: PropTypes.string.isRequired,
};
