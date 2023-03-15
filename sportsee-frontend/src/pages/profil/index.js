import Header from "../../components/header"
import AsideNav from "../../components/asideNav"
import { 
    getAverageSession, 
    getUserActivity, 
    getUserData,  
    getUserPerformance
} from "../../services/mock/mockedApi"

import { useParams } from "react-router-dom"

import ChartLine from "../../components/chartLine"
import ChartBar from "../../components/chartBar"
import ChartRadar from "../../components/chartRadar"
import ChartPie from "../../components/chartPie"

import "./profil.css"

export default function Profil(){
    const {id} = useParams()
   
    const name = getUserData(id)
    const userActivity =  getUserActivity(id)
    const userAverageSession = getAverageSession(id)
    const userPerformance = getUserPerformance(id)
    return(
        <div className="profil">
            <Header />
            <main className="profil__main">
                <AsideNav />
                <div className="profil__content">
                    <h1 className="profil__contentTitle">
                        Bonjour
                        <span className="profil__contentTitle-span">  {name}</span>
                    </h1>
                    <p className="profil__contentTitle">Feliciation! vous avez explosé vos objectifs hier</p>
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
                                        <p>coco</p>
                                        <p>de votre objectif</p>
                                    </div>
                                    <ChartPie />
                                    
                                </div>
                           </div>
                        </div>
                        <div className="profil__contentCalories">
                            content calories
                        </div>
                    </div>
                    
                </div>
            </main>
            
        </div>
    )
}