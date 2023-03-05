import AsideNav from "../../components/asideNav"
import Header from "../../components/header"
import "./home.css"

export default function Home(){
    return(
        <div className="home">
            <Header />
            <main className="home__main">
                <AsideNav />
                <p>Contenu</p>
            </main>
            
        </div>
    )
}