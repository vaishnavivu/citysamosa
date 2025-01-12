import React from "react";
import "../Componet/Vision.css";
const Vision = () => {
  return (
    <div className="container-fluid pt-5 Visioncontainer overflow-hidden contactbg p-3 p-sm-5">
      <div className="container-fluid mx-auto">         
        <div className="row">          
          <div className=" col-sm-7 col-12 pt-5  center-vertical VisionHeading d-flex">
         <h3 className="pt-5 mt-1 mt-sm-5" >              
              <span> Empowering dreams </span>
              <span className="visionspan2">with every step, fueled by passion and</span><br></br>
              <span>crafted with dedication. </span>
            </h3>
          </div>
          <div className="col-sm-5 col-12 center-vertical  justify">
            <img
              src="../0551664396.webp"
              alt=""
              className="img-fluid image visionhandimg animate-slide-in " loading="lazy"
            ></img>
          </div>
        </div>
      </div>
      <div className="row missioncontainer">
        <div className="col-sm-4 col-12 center-vertical justify ">
          <img
            src="../MISSION-F-unscreen.gif"
            alt=""
            className="visionimg"
          ></img>
<div className="vision"><div className="visiondiv">
            <h4>Mission</h4>
            <p>
              To spread the love for Indian street food globally, delivering
              authentic flavors and memorable moments with each serving.{" "}
            </p>
          </div></div>          
        </div>
        <div className="col-sm-4 col-12 center-vertical justify ">
          <img
            src="../CITY-SAMOSA-BINACULOUS-unscreen.gif"
            alt=""
            className="visionimg"
          ></img>
          <div className="visiondiv">
            {" "}
            <h4>Vision</h4>
            <p>
              To bring the taste of India to every corner of the world,
              delivering warmth, tradition, and quality through our handcrafted
              samosas and culinary.
            </p>
          </div>
        </div>
        <div className="col-sm-4 col-12 center-vertical justify">
          <img
            src="../EXPANSION-2-unscreen.gif"
            alt=""
            className="visionimg"
          ></img>
          <div className="visiondiv">
            <h4>Expansion</h4>
            <p>
              To grow our global presence by reaching new cities, sharing the
              taste of India, and connecting people through food.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Vision;
