
import { Link } from "react-router-dom";
import { ReactComponent as Yummylogo } from "../img/Yummy.svg";
import { ReactComponent as Hambrug } from "../img/hambrug.svg";
import "../css/Nav.css";

export const Nav = () => {


    return (
        <div className="MainBox">
            <div className="InnerBox">
                <div className="MainContainer">
                    <div className="LogoContainer">
                        <div>
                            <Link to="/">
                                <Yummylogo />
                            </Link>
                        </div>
                        <div className="Hambrug">
                            <Link to="/">
                                <Hambrug />
                            </Link>
                        </div>
                    </div>
                    <div className="menu">
                        <ul className="innermenu">
                            <li><a href="/">Home</a></li>
                            <li><a href="/">Recipe</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}


