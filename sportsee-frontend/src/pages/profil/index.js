import Header from "../../common/header";
import AsideNav from "../../common/asideNav";

import ChartLine from "../../components/chartLine";
import ChartBar from "../../components/chartBar";
import ChartRadar from "../../components/chartRadar";
import ChartPie from "../../components/chartPie";

import {
    getAverageSession,
    getUserActivity,
    getUserData,
    getUserPerformance,
} from "../../services/mock/mockedApi";

import "./profil.css";

import cal from "../../assets/cal.png";
import proteine from "../../assets/proteine.png";
import glucide from "../../assets/glucide.png";
import lipide from "../../assets/lipide.png";
import lipide2 from "../../assets/lipide2.png";
import lipide3 from "../../assets/lipide3.png";

import { useParams } from "react-router-dom";
import  {FetchUserData}  from "../../services/hooks/fetchApi";
import { AsideInfosGroup } from "../../components/AsideInfosGroup/AsideInfosGroup";

/**
 * 
 * @returns 
 */

export default function Profil() {
    const { id } = useParams();
    const {data, isLoading, error} = FetchUserData(id, "firstName");
    const userActivity = getUserActivity(id);
    const userAverageSession = getAverageSession(id);
    const userPerformance = getUserPerformance(id);

    if(error){
        return <div>Une erreur est apparue</div>;
    }
    if(isLoading){
        return (<div>Loading....</div>);
    }
    if(!data){
        return <div>En attente de données....</div>
    }
    //console.log("data:", data)
    return (
        <div className="profil">
            <Header />
            <main className="main">
                <AsideNav />
                <div className="content">
                    
                    <h1 className="contentTitle">
                        Bonjour                 
                        <span className="contentTitle-span">
                            {data}
                        </span>
                    </h1>
                    <p className="contentTitle">
                        Feliciation! vous avez explosé vos objectifs hier 👋
                    </p>
                    <div className="contentItems">
                        {/* <div className="contentChart">
                            <section className="chartBar">
                                <div className="chartBar__title">
                                    <h2>Activité quotidienne</h2>
                                    <ul>
                                        <li>poids (kg)</li>
                                        <li>Calories brulées (kcal)</li>
                                    </ul>
                                </div>
                                <ChartBar userActivity={userActivity} />
                            </section>
                            <div className="contentChartGallery">
                                <div className="contentLine">
                                    <div className="contentLineTitle">
                                        <p>Durée moyenne </p>
                                        <p>des sessions</p>
                                    </div>

                                    <ChartLine
                                        userAverageSession={userAverageSession}
                                    />
                                </div>
                                <div className="contentRadar">
                                    <ChartRadar
                                        userPerformance={userPerformance}
                                    />
                                </div>
                                <div className="contentPie">
                                    <p className="contentPieTitle">Score</p>
                                    <div className="contentPieLabel">
                                        <p>{data.data.score*100} %</p>
                                        <p>de votre objectif</p>
                                    </div>
                                    <ChartPie score={data.data.score*100} />
                                </div>
                            </div>
                        </div> */}
                        
                        {/* <div className="contentAside">
                            <div className="contentAside-elt">
                                <div className="contentAside-elt-icon red">
                                    <img src={cal} alt="" />
                                </div>

                                <div>
                                    <div className="contentAside-elt-tag">
                                        {data.data.keyData.calorieCount}
                                    </div>
                                    <div>Calories</div>
                                </div>
                            </div>
                            <div className="contentAside-elt">
                                <div className="contentAside-elt-icon blue">
                                    <img src={proteine} alt=""></img>
                                </div>

                                <div>
                                    <div className="contentAside-elt-tag">
                                        {data.data.keyData.proteinCount}
                                    </div>
                                    <div>Protéines</div>
                                </div>
                            </div>
                            <div className="contentAside-elt">
                                <div className="contentAside-elt-icon brown">
                                    <img src={glucide} alt=""></img>
                                </div>
                                <div>
                                    <div className="contentAside-elt-tag">
                                        {data.data.keyData.carbohydrateCount}
                                    </div>
                                    <div>Glucides</div>
                                </div>
                            </div>
                            <div className="contentAside-elt">
                                <div className="contentAside-elt-icon fuschia">
                                    <img src={lipide} alt="" />
                                    <img src={lipide2} alt="" />
                                    <img src={lipide3} alt="" />
                                </div>

                                <div>
                                    <div className="contentAside-elt-tag">
                                        {data.data.keyData.lipidCount}
                                    </div>
                                    <div>Lipides</div>
                                </div>
                            </div>
                        </div>  */}
                        <div className="contentChart">
                            hello chart
                        </div>
                        <div className="contentAside">
                            <AsideInfosGroup id={id}/>
                        </div>
                        
                    </div>
                </div>
            </main>
        </div>
    );   
}
