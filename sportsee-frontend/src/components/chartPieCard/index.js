import React from "react";
import ChartPie from "../chartPie";

import { FetchUserData } from "../../services/hooks/fetchApi";

export function ChartPieCard(props){
    const {id} = props;
    const{ data, isLoading, error} = FetchUserData(id, "score");
    const score = data*100;
    if(error){
        return <div>Une erreur est apparue</div>;
    }
    if(isLoading){
        return (<div>Loading....</div>);
    }
    if(!data){
        return <div>en attente de données</div>;
    }
    return(
        <div className="contentPie">
            <p className="contentPieTitle">
                Score
            </p>
            <div className="contentPieLabel">
                <p>{score} %</p>
                <p>de votre objectif</p>
            </div>
            <ChartPie id={id} />
        </div>
    )
}