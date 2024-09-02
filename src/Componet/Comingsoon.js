import React from "react";
import "../Componet/Comingsoon.css";

const Comingsoon = () => {
  return (
      <div className="container-fluid comingbg pb-4 mt-3 pt-3 mt-sm-5 pt-sm-5 mx-auto overflow-hidden">
        <div className="Comingheading">
        {/* <img
          src="../City Samosa Vector Art-06.png"
          className="cominsoonairoplane"
          alt=""
        ></img> */}
          <h3 className="pb-3">Coming Soon</h3>
        </div>
        <div
          className="container comingsoon"
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <div className="row">
            <div className="col-4">
              <img src="../sangamner coming soon 2-01.png" alt=""></img>
            </div>
            <div className="col-4">
              <img src="../shahpuri-02.png" alt=""></img>
            </div>
            <div className="col-4">
              <img src="../vadodara-02-02.png" alt=""></img>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Comingsoon;
