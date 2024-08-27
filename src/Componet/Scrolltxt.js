import "./Scrolltxt.css";
import React from "react";

const Scrolltxt = () => {
  return (
    <div className="mt-5 mb-5 overflow-hidden ">
      <div
        className="textanim mt-4 mb-0 pb-0 aos-init aos-animate"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="5000"
        loading="lazy"
        alt=""
      >
        <img src="../wc samosa-01.png" alt=""></img>
        <h2 data-text="Presence...">Presence...</h2>
        <img src="../wc samosa-01.png" alt=""></img>
      </div>
      <div className="text-center Map mt-0">
        <img
          className="csMap aos-init aos-animate pt-4 pb-4"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="5000"
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
