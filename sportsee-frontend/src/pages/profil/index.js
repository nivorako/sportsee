import Header from "../../common/header";
import AsideNav from "../../common/asideNav";

import ChartLine from "../../components/chartLine";
import ChartBar from "../../components/chartBar";
import ChartRadar from "../../components/chartRadar";
import ChartPie from "../../components/chartPie";

import {
    getAverageSession,
    getUserActivity,
    getUserData,
    getUserPerformance,
} from "../../services/mock/mockedApi";

import "./profil.css";

import { useParams } from "react-router-dom";
import  {FetchUserData}  from "../../services/hooks/fetchApi";
import { AsideInfos } from "../../components/asideInfos";
import { ChartPieCard } from "../../components/chartPieCard";

/**
 * 
 * @returns 
 */

export default function Profil() {
    const { id } = useParams();
    const {data, isLoading, error} = FetchUserData(id, "firstName");
    const userActivity = getUserActivity(id);
    const userAverageSession = getAverageSession(id);
    const userPerformance = getUserPerformance(id);

    if(error){
        return <div>Une erreur est apparue</div>;
    }
    if(isLoading){
        return (<div>Loading....</div>);
    }
    if(!data){
        return <div>En attente de données....</div>
    }
    
    return (
        <div className="profil">
            <Header />
            <main className="main">
                <AsideNav />
                <div className="content">
                    
                    <h1 className="contentTitle">
                        Bonjour                 
                        <span className="contentTitle-span">
                            {data}
                        </span>
                    </h1>
                    <p className="contentTitle">
                        Feliciation! vous avez explosé vos objectifs hier 👋
                    </p>
                    <div className="contentItems">
                        <div className="contentChart">
                            <section className="chartBar">
                                <div className="chartBar__title">
                                    <h2>Activité quotidienne</h2>
                                    <ul>
                                        <li>poids (kg)</li>
                                        <li>Calories brulées (kcal)</li>
                                    </ul>
                                </div>
                                <ChartBar id={id} />
                            </section>
                            <div className="contentChartGallery">
                                <div className="contentLine">
                                    <div className="contentLineTitle">
                                        <p>Durée moyenne </p>
                                        <p>des sessions</p>
                                    </div>
                                    <ChartLine id={id} />
                                </div>
                                
                                <div className="contentRadar">
                                    <ChartRadar id={id} />
                                </div>
                                <ChartPieCard id={id} />
                            </div>
                        </div>
                        <div className="contentAside">
                            <AsideInfos id={id}/>
                        </div>
                        
                    </div>
                </div>
            </main>
        </div>
    );   
}
