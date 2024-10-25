import React  from "react";
import { BrowserRouter as Main, Routes, Route } from "react-router-dom";
import About from "./Componet/About";
import Gallery from "./Componet/Gallery";
import Home from "./Componet/Home";
import Tophead from "./Componet/Tophead";
import Contact from "./Componet/Contact";
import Footer1 from "./Componet/Footer1";
import Arrowup from "./Componet/Arrowup";
import ScrollToTop from "./Componet/ScrollToTop";
import Whatsapp from "./Componet/Whatsapp";
import Product from "./Componet/Product";
const App = () => {
  return (
      <Main>       
        <ScrollToTop></ScrollToTop>
        <Tophead />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route exact path="/franchise" element={<Contact />} />
          <Route exact path="/product" element={<Product/>} />
          <Route exact path="*" element={<Home />} />
        </Routes>     
        <Footer1 />        
        <Whatsapp/>   
        <Arrowup />    
      </Main>    
  );
};
export default App;