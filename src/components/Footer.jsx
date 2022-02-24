import { Link } from "react-router-dom";


export const Footer = () => {
    return (
        <div className="Main-Footer">
            <div className="Footer-yummy">
                <Link to="/"> </Link>
            </div>

            <div className="Footer-Menu">
                <Link to="/"> </Link>
                <Link to="/"> </Link>
            </div>

            <div className="Footer-Icon">
                <Link to="/"> </Link>
                <Link to="/"> </Link>
                <Link to="/"> </Link>
            </div>

            <div className="Footer-Year">
                <p>@2022 by Yummy</p>
            </div>
        </div>
    );
}






// <div className="FooterMain">
//       <div className="YummyFooter">
//         <div>
//           <Link to="/">
//             <YummyFooterlogo />
//           </Link>
//         </div>
//         <div className="FooterMenu">
//           <Link to="/">Home</Link>
//           <Link to="/recipe">Recipe</Link>
//         </div>
//         <div className="FooterIcon">
//           <Link to="/">
//             <Twitterlogo />
//           </Link>
//           <Link to="/">
//             <Facebooklogo />
//           </Link>
//           <Link to="/">
//             <Instagramlogo />
//           </Link>
//         </div>
//       </div>
//       <div className="FooterYear">
//         <p>©2022 by yummy.</p>
//       </div>
//     </div>
