import Header from "../../components/header"
import AsideNav from "../../components/asideNav"

import ChartLine from "../../components/chartLine"
import ChartBar from "../../components/chartBar"
import ChartRadar from "../../components/chartRadar"
import ChartPie from "../../components/chartPie"

import { 
    getAverageSession, 
    getUserActivity, 
    getUserData,  
    getUserPerformance
} from "../../services/mock/mockedApi"

import "./profil.css"

import cal from "../../assets/cal.png"
import proteine from "../../assets/proteine.png"
import glucide from "../../assets/glucide.png"
import lipide from "../../assets/lipide.png"
import lipide2 from "../../assets/lipide2.png"
import lipide3 from "../../assets/lipide3.png"

import { useParams } from "react-router-dom"

export default function Profil(){
    const {id} = useParams()
   
    const user = getUserData(id)
    const userActivity =  getUserActivity(id)
    const userAverageSession = getAverageSession(id)
    const userPerformance = getUserPerformance(id) 

    const score = user.score * 100
   
    return(
        <div className="profil">
            <Header />
            <main className="main">
                <AsideNav />
                <div className="content">
                    <h1 className="contentTitle">
                        Bonjour
                        <span className="contentTitle-span"> {user.userInfos.firstName} </span>
                    </h1>
                    <p className="contentTitle">
                        Feliciation! vous avez explosé vos objectifs hier
                    </p>
                    <div className="contentItems">
                        <div className="contentChart">
                            <section className="chartBar">
                                <div className="chartBar__title">
                                    <h2>Activité quotidienne</h2>
                                    <ul>
                                         <li>poids (kg)</li>
                                        <li>Calories brulées (kcal)</li>
                                    </ul>
                                </div>
                                <ChartBar userActivity = {userActivity} />
                            </section>
                            <div className="contentChartGallery">
                                <div className="contentLine">
                                    <div className="contentLineTitle">
                                        <p>Durée moyenne </p>
                                        <p>des sessions</p>
                                    </div>
                                    
                                    <ChartLine userAverageSession={userAverageSession}/>
                                </div>
                                <div className="contentRadar">
                                    <ChartRadar userPerformance={userPerformance} />
                                </div>
                                <div className="contentPie">
                                    <p className="contentPieTitle">Score</p>
                                    <div className="contentPieLabel">
                                        <p>{score} %</p>
                                        <p>de votre objectif</p>
                                    </div>
                                    <ChartPie  score={score}/>                                  
                                </div>
                           </div>
                        </div>
                        <div className="contentAside">
                            <div className="contentAside-elt">
                                <div className="contentAside-elt-icon red">
                                    <img src={cal} alt=""/>
                                </div>
                                
                                <div>
                                    <div className="contentAside-elt-tag">
                                        {user.keyData.calorieCount}
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
                                    {user.keyData.proteinCount}
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
                                    {user.keyData.carbohydrateCount}
                                    </div>
                                    <div>Glucides</div>
                                </div>
                            </div>
                            <div className="contentAside-elt">
                                <div className="contentAside-elt-icon fuschia">
                                    <img src={lipide} alt=""/>
                                    <img src={lipide2} alt=""/>
                                    <img src={lipide3} alt=""/>
                                </div>
                                
                                <div>
                                    <div className="contentAside-elt-tag">
                                    {user.keyData.lipidCount}
                                    </div>
                                    <div>Lipides</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </main>
            
        </div>
    )
}