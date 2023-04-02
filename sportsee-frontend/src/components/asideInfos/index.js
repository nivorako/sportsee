import React from "react";
import { FetchUserData } from "../../services/hooks/fetchApi";

import "./asideInfos.css";

export function AsideInfos(props){
    const {id} = props
    const {data, isLoading, error} = FetchUserData(id, "key-data");
    //console.log("data in key:", data.calorieCount)
    if(error){
        return <div>Une erreur est apparue</div>;
    }
    if(isLoading){
        return (<div>Loading....</div>);
    }
    if(!data){
        return <div>En attente de données....</div>
    }
    return (
        <div className="asideInfos">
            <div className="asideInfos-elt">
                {data.calorieCount}
            </div>
            <div  className="asideInfos-elt">
                {data.proteinCount}
            </div>
            <div  className="asideInfos-elt">
                {data.carbohydrateCount}
            </div>
            <div  className="asideInfos-elt">
                {data.lipidCount}
            </div>
        </div>
    )
}