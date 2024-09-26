import React from "react";
import "../Componet/Comingsoon.css";
const Comingsoon = () => {
  return (
    <div className="pb-4 mt-5 mb-5 pt-3 mt-sm-4 pt-sm-4">
      <div className=" centerheading">
      <img
          src="../City Samosa Vector Art-06.webp"
          className="comingsoonimage"
          alt="" loading="lazy"
        ></img>
        <h3>Coming Soon</h3>
        <div className="line mt-0"></div>
      </div>
      <div className="container-fluid  comingsoon p-3 p-sm-5 contactbg mx-auto overflow-hidden mt-3">        <div
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="800"
        >
          <div className="row">
            <div className="col-4">
              <img src="../sambhajinagar.webp" alt="" loading="lazy"></img>
            </div>
            <div className="col-4">
              <img src="../gandhinagar.webp" alt="" loading="lazy" ></img>
            </div>
            <div className="col-4">
              <img src="../bansilalnagar.webp" alt="" loading="lazy"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comingsoon;
