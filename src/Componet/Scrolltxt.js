import "./Scrolltxt.css";
import React from "react";

const Scrolltxt = () => {
  return (
    <div className="mt-5 mb-5 overflow-hidden">
      <div className="mt-5 mb-4 centerheading">
        <h3>Our Presence</h3> 
        <div className="line mt-0"></div>
      </div>
      <div className="text-center Map mt-0"> 
        <div className="VisionHeading scrollheading">
          <h3 className="overlay-heading" data-aos="fade-left" data-aos-easing="linear"
     data-aos-duration="3000">
            We serve <span>high-quality samosas</span> to millions of people every day across <br></br><span>110+ BRANCHES<br></br></span> in <span>three states of India:</span>  Maharashtra, Gujarat, and Karnataka. 
          </h3>
        </div>             
        <img src="../cs web our presence 2-01.webp" className="img-fluid" alt="Our Presence" />
      </div>      
    </div>
  );
};

export default Scrolltxt;
