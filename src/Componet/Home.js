import React from "react";
import ControlledCarousel from "./ControlledCarousel";
import Slider from "./Slider";
import Scrolltxt from "./Scrolltxt";
import Instafeed from "./Instafeed";
import Comingsoon from "./Comingsoon";
import Homeabouts from "./Homeabouts";
function Home() {
  return (
    <div>
     
      <ControlledCarousel />
      <Scrolltxt/>     
      <Slider />  
    <Comingsoon/>
    <Homeabouts/>
      <Instafeed/>
      
    </div>
  );
}

export default Home;
