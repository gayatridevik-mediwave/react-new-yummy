
import { BrowserRouter } from "react-router-dom";
import { Nav } from "./components/Nav";
import CoverImage from "./components/CoverImage";
import Cards from "./components/Cards";
import Footer from "./components/Footer";




function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <CoverImage />
        <Cards />
        <Footer />
      </BrowserRouter>
    </>

  );
}
export default App;

