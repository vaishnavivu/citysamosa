import React from "react";
import "./Scrolltxt.css";
const Scrolltxt = () => {
  return (
    <div className="mt-3">
      <h1 className=" text-center TopHeading">Presence</h1>
      <div className="text-center Map">
        <img className="csMap"
          data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="5000"
          src="../pngwing.com.png"
          loading="lazy" class="aos-init aos-animate"
          alt=""
          
        ></img>
      </div>
      <div class="container-fluid scroll_hidden">
        <div class="scroll">
          <div class="RightToLeft">
            <div className="txtmap">Maharashtra, Gujarat, Karnataka, Madhya_Pradesh,  Rajasthan,  Telangana, Andhra_Pradesh,Maharashtra, Gujarat, Karnataka, Madhya_Pradesh,  Rajasthan,  Telangana, Andhra_Pradesh, Maharashtra, Gujarat, Karnataka, Madhya_Pradesh,  Rajasthan,  Telangana, Andhra_Pradesh</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scrolltxt;
