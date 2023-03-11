import Header from "../../components/header"
import AsideNav from "../../components/asideNav"
import { 
    getAverageSession, 
    getUserActivity, 
    getUserData,  
    getUserPerformance
} from "../../services/mock/mockedApi"

import { useParams } from "react-router-dom"

import "./profil.css"
import ChartLine from "../../components/chartLine"
import ChartBar from "../../components/chartBar"
import ChartRadar from "../../components/chartRadar"

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
                                    <ChartLine userAverageSession={userAverageSession}/>
                                </div>
                                <div className="profil__contentRadar">
                                    <ChartRadar userPerformance={userPerformance} />
                                </div>
                                <div className="profil__contentPie">profil__contentPie</div>
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