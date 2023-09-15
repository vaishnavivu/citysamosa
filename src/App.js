import React from "react";
import { BrowserRouter as Main, Routes, Route } from "react-router-dom";
import About from "./Componet/About";
import Gallery from "./Componet/Gallery";
import Home from "./Componet/Home";
import Tophead from "./Componet/Tophead";
import Contact from "./Componet/Contact";
import Footer1 from "./Componet/Footer1";
import Enquiry from "./Componet/Enquiry"
// import { GlobalStyle } from "./GlobalStyle";
// import { ThemeProvider } from "styled-components";
const App = () => {
  return (
    <>

        <Main >
        
          <Tophead />

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/gallery" element={<Gallery />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/enquiry" element={<Enquiry />} />
            {/* <Route path="*" element={<ErrorPage/>} /> */}
          </Routes>
       <Footer1/>
        </Main>
    </>
  );
};

export default App;
