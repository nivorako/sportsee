import Header from "../../components/header"
import AsideNav from "../../components/asideNav"
import { getUserData, MockedApi } from "../../services/mock/mockedApi"
import { useParams } from "react-router-dom"

import "./profil.css"


export default function Profil(){
    const {id} = useParams()
   
    const name = getUserData(id)
    
    return(
        <div className="profil">
            <Header />
            <main className="profil__main">
                <AsideNav />
                <div className="profil__content">
                    <h1 className="profil__contentTitle">
                        Bienvenu(e) {name} 
                        <span className="profil__contentTitle-span">SportSee</span>
                    </h1>
                    <p className="profil__contentParagraph">
                       prochain rechart heheheh !!!
                    </p>
                </div>
            </main>
            
        </div>
    )
}