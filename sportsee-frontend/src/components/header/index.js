import { NavLink } from "react-router-dom"
import sportseeLogo from "../../assets/sportseeLogo.png"
import "./header.css"

export default function Header(){
    return(
        <header className="header">
            <div className="header__logo">
                <img src={sportseeLogo}  alt="" className="header__logoLogo"></img>
                <span className="header__logoTitle">SportSee</span>
            </div>
            <nav className="header__navItems" >
                <NavLink to="/" className="header__homeNavLink">
                    <div className="header__navItem">Accueil</div>
                </NavLink>

                <div className="header__navItem">Profil</div>
                <div className="header__navItem">Réglage</div>
                <div className="header__navItem">Communauté</div>
            </nav>
        </header>
    )
}