import sportseeLogo from "../../assets/sportseeLogo.png"
import "./header.css"

export default function Header(){
    return(
        <div className="header">
            <div className="header__logo">
                <img src={sportseeLogo}  alt="" className="header__logoLogo"></img>
                <span className="header__logoTitle">SportSee</span>
            </div>
            <nav className="header__navItems" >
                <div className="header__navItem">Accueil</div>
                <div className="header__navItem">Profil</div>
                <div className="header__navItem">Réglage</div>
                <div className="header__navItem">Communauté</div>
            </nav>
        </div>
    )
}