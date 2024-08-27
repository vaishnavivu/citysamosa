import React from "react";
import "./Scrolltxt.css";
const Scrolltxt = () => {
  return (
    <div className="mt-3 overflow-hidden ">
      <div className="textanim">
        <h2 data-text="Presence...">Presence...</h2>
      </div>
      <div className="text-center Map">
        <img
          className="csMap aos-init aos-animate"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="5000"
          src="../pngwing.com.png"
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
