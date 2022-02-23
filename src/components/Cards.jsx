import "../css/Cards.css"
import grill from "../img/grill.png";
import Redicon from "../img/Redicon.svg";

const Cards = () => {
    return (
        <div className=" Main-grid">
            <div className="flex">
                <div className="Inner-grid">
                    <img src={grill} alt="grill" />
                </div>
                <div className="Inner-grid-content">
                    <div className="Head">
                        <h1>Grill chicken</h1>
                        <img src={Redicon} alt="icon" />
                    </div>
                    <div className="grid-desc">
                        <h3> </h3>
                    </div>
                </div>
            </div>
        </div>

    );
};
export default Cards;