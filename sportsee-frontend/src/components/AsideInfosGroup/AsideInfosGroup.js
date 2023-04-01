import React from "react";
import { FetchUserData } from "../../services/hooks/fetchApi";

export function AsideInfosGroup(props){
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
        <div className="asideInfosGroup">
            <div className="cal">
                {data.calorieCount}
            </div>
            <div className="protein">
                {data.proteinCount}
            </div>
            <div className="glucid">
                {data.carbohydrateCount}
            </div>
            <div className="lipid">
                {data.lipidCount}
            </div>
        </div>
    )
}