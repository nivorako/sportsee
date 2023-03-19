import zen from "../../assets/zen.png";
import swim from "../../assets/swim.png";
import bike from "../../assets/bike.png";
import barbell from "../../assets/barbell.png";

import "./asideNav.css";

export default function AsideNav() {
    return (
        <div className="asideNav">
            <nav className="asideNav__nav">
                <div className="asideNav__icon">
                    <img src={zen} alt=""></img>
                </div>
                <div className="asideNav__icon">
                    <img src={swim} alt=""></img>
                </div>
                <div className="asideNav__icon">
                    <img src={bike} alt=""></img>
                </div>
                <div className="asideNav__icon">
                    <img src={barbell} alt=""></img>
                </div>
            </nav>
            <span className="asideNav__text">© Copyright, SportSee 2020</span>
        </div>
    );
}
