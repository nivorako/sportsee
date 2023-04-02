import React from "react";
import { FetchUserData } from "../../services/hooks/fetchApi";

import cal from "../../assets/cal.png";
import proteine from "../../assets/proteine.png";
import glucide from "../../assets/glucide.png";
import lipide from "../../assets/lipide.png";
import lipide2 from "../../assets/lipide2.png";
import lipide3 from "../../assets/lipide3.png";

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
                <div className="asideInfos-elt-icon red">
                    <img src={cal} alt="calories" />
                </div>
                <div>
                    <div className="contentAside-elt-tag">
                        {data.calorieCount}
                    </div>
                    <div>Calories</div>
                </div>
            </div>

            <div  className="asideInfos-elt">
                <div className="asideInfos-elt-icon blue">
                    <img src={proteine} alt="proteine" />
                </div>
                <div>
                    <div className="contentAside-elt-tag">
                        {data.proteinCount}
                    </div>
                    <div>Proteines</div>
                </div>
            </div>

            <div  className="asideInfos-elt">
                <div className="asideInfos-elt-icon brown">
                    <img src={glucide} alt="" />
                </div>
                <div>
                    <div className="contentAside-elt-tag">
                        {data.carbohydrateCount}
                    </div>
                    <div>Glucides</div>
                </div>
            </div>

            <div  className="asideInfos-elt">
                <div className="asideInfos-elt-icon red">
                    <img src={lipide} alt="" />
                    <img src={lipide2} alt="" />
                    <img src={lipide3} alt="" />
                </div>
                <div>
                    <div className="contentAside-elt-tag">
                        {data.lipidCount}
                    </div>
                    <div>Lipides</div>
                </div>
            </div>
        </div>
    )
}