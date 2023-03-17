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
            <main className="profil__main">
                <AsideNav />
                <div className="profil__content">
                    <h1 className="profil__contentTitle">
                        Bonjour
                        <span className="profil__contentTitle-span"> {user.userInfos.firstName} </span>
                    </h1>
                    <p className="profil__contentTitle">
                        Feliciation! vous avez explosé vos objectifs hier
                    </p>
                    <div className="profil__contentItems">
                        <div className="profil__contentChart">
                            <div className="chartBar">
                                <ChartBar userActivity = {userActivity} />
                            </div>
                            <div className="profil__contentChart2">
                                <div className="profil__contentLine">
                                    <div className="profil__contentLineTitle">
                                        <p>Durée moyenne </p>
                                        <p>des sessions</p>
                                    </div>
                                    
                                    <ChartLine userAverageSession={userAverageSession}/>
                                </div>
                                <div className="profil__contentRadar">
                                    <ChartRadar userPerformance={userPerformance} />
                                </div>
                                <div className="profil__contentPie">
                                    <p className="profil__contentPieTitle">Score</p>
                                    <div className="profil__contentPieLabel">
                                        <p>{score} %</p>
                                        <p>de votre objectif</p>
                                    </div>
                                    <ChartPie  score={score}/>
                                    
                                </div>
                           </div>
                        </div>
                        <div className="profil__contentAside">
                            <div className="profil__contentAside-elt">
                                <div className="profil__contentAside-elt-icon red">
                                    <img src={cal} alt=""/>
                                </div>
                                
                                <div>
                                    <div className="profil__contentAside-elt-tag">
                                        calories number
                                    </div>
                                    <div>Calories</div>
                                </div>
                            </div>
                            <div className="profil__contentAside-elt">
                                <div className="profil__contentAside-elt-icon blue">
                                    <img src={proteine} alt=""></img>
                                </div>
                                
                                <div>
                                    <div className="profil__contentAside-elt-tag">
                                        Protéines number
                                    </div>
                                    <div>Protéines</div>
                                </div>
                            </div>
                            <div className="profil__contentAside-elt">
                                <div className="profil__contentAside-elt-icon brown">
                                    <img src={glucide} alt=""></img>
                                </div>
                                <div>
                                    <div className="profil__contentAside-elt-tag">
                                        Glucides number
                                    </div>
                                    <div>Glucides</div>
                                </div>
                            </div>
                            <div className="profil__contentAside-elt">
                                <div className="profil__contentAside-elt-icon fuschia">
                                    <img src={lipide} alt=""/>
                                    <img src={lipide2} alt=""/>
                                    <img src={lipide3} alt=""/>
                                </div>
                                
                                <div>
                                    <div className="profil__contentAside-elt-tag">
                                        Lipides number
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