
import "../css/Coverimage.css";
import Search from "../img/Search.svg";


const CoverImage = () => {

    return (
        <div>

            <div className="header">
                <div className="headerContent">
                    <h1>Delicious recipes just click away</h1>
                    <div className="SearchContainer">
                        <form id="formId" size="40">
                            <input type="text" placeholder="Search" />
                        </form>
                        <div className="SearchIcon">
                            <img src={Search} alt="search" />
                        </div>
                    </div>
                </div>
            </div>


            <div className="Head">
                <p>Our recipes</p>
                <h4>POPULAR RECIPES</h4>
            </div>

            <div className="sidebutton">
                <div className="button">
                    <button>ADD RECIPES</button>
                </div></div>

        </div>
    );
}
export default CoverImage;