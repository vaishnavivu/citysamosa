import "./Scrolltxt.css";
import React from "react";

const Scrolltxt = () => {
  return (
    
    <div className="mt-5 mb-5 overflow-hidden aos-init aos-animate"
    data-aos="fade-right"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000"
    src="../CITY WEBSITE EDITS-02.png"
    loading="lazy"
    alt="">
      <div className="mt-sm-5 mt-3 pb-3 centerheading" >
        <h3>Our Presence</h3>
      </div>
      <div className="text-center Map mt-0">
        <img
          className="csMap aos-init aos-animate pt-4 pb-4"
          data-aos="fade-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          src="../CITY WEBSITE EDITS-02.png"
          loading="lazy"
          alt=""
        ></img>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scrolltxt;
