import { Link } from "react-router-dom"
import AsideNav from "../../components/asideNav"
import Header from "../../components/header"

import "./home.css"

export default function Home(){
    return(
        <div className="home">
            <Header />
            <main className="home__main">
                <AsideNav />
                <div className="home__content">
                    <h1 className="home__contentTitle">
                        Bienvenu(e) sur 
                        <span className="home__contentTitle-span">SportSee</span>
                    </h1>
                    <p className="home__contentParagraph">Projet 12 de la formation OpenClassrooms, réalisation d'un tableau de 
                        bord avec React. 
                    </p>
                    <p>Cliquez sur id pour acceder à votre profil:</p>
                    <Link to="/Profil/12"className="home__link">
                        <p>id : 12</p>
                    </Link>
                    <Link to="/Profil/18"className="home__link">
                        <p>id : 18</p>
                    </Link>
                </div>
            </main>
            
        </div>
    )
}