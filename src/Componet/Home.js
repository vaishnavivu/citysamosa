import React from "react";
import ControlledCarousel from "./ControlledCarousel";
import Slider from "./Slider";
import Scrolltxt from "./Scrolltxt";
import Instafeed from "./Instafeed";
import Comingsoon from "./Comingsoon";
import Homeabouts from "./Homeabouts";
import HomeGallery from "./HomeGallery";
function Home() {
  return (
    <div>
     
      <ControlledCarousel />
      <Scrolltxt/>     
      <Slider />  
    <Comingsoon/>
    <Homeabouts/>
      <Instafeed/>
      <HomeGallery/>
      
    </div>
  );
}

export default Home;
