
import {Bar} from "react-chartjs-2"
import { Chart, registerables } from "chart.js"

import "./barChart.css"

Chart.register(...registerables)

const options = {
    plugins:{
        title:{
            display: true,
            text: "Activité quotidienne",
            align: "start",
        },
        legend:{
            display:true,
            position: "top",
            align: "end"
        },
        scales:{
            yAxes: [{
                stacked: true,
                display: true,
                position: "right",
                ticks: {
                    beginAtZero: true
                   }
            }]
        }
    }
}
function getWeightData(user){
    let tab = []
    user.userActivity.forEach(elt => tab.push(elt.kilogram))
    return tab
}
function getCaloriesData(user){
    let tab = []
    user.userActivity.forEach(elt => tab.push(elt.calories))
    return tab
}
export default function BarChart(userActivity){
    const weightData = getWeightData(userActivity)
    const caloriesDtata = getCaloriesData(userActivity)
    return (
        <section className="barChart">
            <Bar 
                data={{
                    labels:[1,2,3,4,5,6,7],
                    datasets:[
                        {
                            label: "poids (kg)",
                            
                            data: weightData,
                            backgroundColor:["red"],
                            borderRadius: 5,
                            barPercentage: 0.1,
                            percentage: 0.5 
                        },
                        {
                            label: "calories brulées",
                            
                            data: caloriesDtata,
                            backgroundColor:["black"],
                            borderRadius: 5,
                            barThickness: 5,
                            
                        }
                    ]
                }} 
                options={options}
                
            />
        </section>
    )
}