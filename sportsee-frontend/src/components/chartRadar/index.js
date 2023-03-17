import { Radar,  RadarChart,Tooltip, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, CartesianGrid } from 'recharts';
import {useState, useEffect} from "react"
  
  export default function ChartRadar({userPerformance}){
    const [data, setData] = useState([])
    useEffect(() => {
      setData(userPerformance)
    }, [userPerformance] )
   
    return(
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart  
          cx="50%" 
          cy="50%" 
          outerRadius="80%" 
          data={data} 
          margin={{left: 30, top:30, right:30, bottom:30}}
          
        >
          <CartesianGrid />
          <PolarGrid stroke="#FFF" gridType="polygon"/>
          <PolarAngleAxis dataKey="kind" stroke="#FFF" tick={{ fontSize: 11 }}/>
          <PolarRadiusAxis axisLine={false}  tick={false}/>
          <Tooltip />
          <Radar name="value" dataKey="value" stroke="red" fill="red" fillOpacity={0.5} />
        </RadarChart>
      </ResponsiveContainer>
    )
  }

