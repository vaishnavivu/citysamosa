import React from "react";
import ControlledCarousel from "./ControlledCarousel";
import Slider from "./Slider";
import Imageoverlay from "./Imageoverlay";
import Scrolltxt from "./Scrolltxt";
import Instafeed from "./Instafeed";
function Home() {
  return (
    <div>
     
      <ControlledCarousel />
      <Scrolltxt/>
      <Slider /> 
      <Imageoverlay />     
      <Instafeed/>
      
      
    </div>
  );
}

export default Home;
