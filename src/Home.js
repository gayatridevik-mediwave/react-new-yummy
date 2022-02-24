import { BrowserRouter } from "react-router-dom";
import { Nav } from "./components/Nav";
import CoverImage from "./components/CoverImage";
import React from "react";
// import { Footer } from "./components/Footer";
import Cards from "./components/Cards";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <CoverImage />
        <Cards />
        {/* <Footer /> */}
      </BrowserRouter>
    </>

  );
}
export default App;

