import "./Scrolltxt.css";
import React from "react";
const Scrolltxt = () => {
  return (    
    <div className="mt-5 mb-5 overflow-hidden"
    src="../CITY WEBSITE EDITS-02.png"
    alt="">
      <div className="mt-5  mb-4 centerheading" >
        <h3>Our Presence</h3> <div className="line mt-0"></div>
      </div>
      <div className="text-center Map mt-0">
        <div ><img
          className="csMap pt-4 pb-4"                 
          src="../CITY WEBSITE EDITS-02.webp"
          loading="lazy"
          alt=""
        ></img></div>        
      </div>      
      <div class="container-fluid scroll_hidden">
        <div class="scroll">
          <div class="RightToLeft">
            <div className="txtmap">
              Maharashtra, Gujarat, Karnataka, Madhya_Pradesh, Rajasthan,
              Telangana, Andhra_Pradesh,Maharashtra, Gujarat, Karnataka,
              Madhya_Pradesh, Rajasthan, Telangana, Andhra_Pradesh, Maharashtra,
              Gujarat, Karnataka, Madhya_Pradesh, Rajasthan, Telangana,
              Andhra_Pradesh
            </div>
          </div>        </div>
      </div>
    </div>
  );
};
export default Scrolltxt;
