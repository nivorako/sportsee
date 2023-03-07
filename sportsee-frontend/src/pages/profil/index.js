import Header from "../../components/header"
import AsideNav from "../../components/asideNav"
import { getUserActivity, getUserData } from "../../services/mock/mockedApi"

import { useParams } from "react-router-dom"

import "./profil.css"


import BarChart from "../../components/barChart"


export default function Profil(){
    const {id} = useParams()
   
    const name = getUserData(id)
    const userActivity =  getUserActivity(id)
   
    return(
        <div className="profil">
            <Header />
            <main className="profil__main">
                <AsideNav />
                <div className="profil__content">
                    <h1 className="profil__contentTitle">
                        Bienvenu(e)
                        <span className="profil__contentTitle-span">  {name}</span>
                    </h1>
                    <div className="profil__contentItems">
                        <div className="profil__contentChart">
                            <BarChart userActivity = {userActivity} />
                            <div className="profil__contentChart2">
                                <div className="profil__contentLine">profil__contentLine</div>
                                <div className="profil__contentRadar">profil__contentRadar</div>
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