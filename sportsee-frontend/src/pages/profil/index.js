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
                        
                        <BarChart userActivity = {userActivity} />
                    </div>
                    
                </div>
            </main>
            
        </div>
    )
}