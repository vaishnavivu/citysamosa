import React from "react";
import ControlledCarousel from "./ControlledCarousel";
import Slider from "./Slider";
import Scrolltxt from "./Scrolltxt";
import Instafeed from "./Instafeed";
import Comingsoon from "./Comingsoon";
import Homeabouts from "./Homeabouts";
import HomeGallery from "./HomeGallery";
import HomeProduct from "./HomeProduct";
function Home() {
  return (
    <div>
      <ControlledCarousel />
      <Scrolltxt />
      <Homeabouts />
      <Comingsoon />
      <Slider />
      <HomeProduct />
      <Instafeed />
      <HomeGallery />
    </div>
  );
}

export default Home;
