import React from "react";
import "../Componet/Comingsoon.css";

const Comingsoon = () => {
  return (
    <div className="pb-4 mt-3 pt-3 mt-sm-4 pt-sm-4">
      <div className="mt-4 pt-4  mt-sm-5 pt-sm-5  mb-4 centerheading" >
        <h3>Coming Soon</h3>
      </div>
      <div className="container-fluid comingbg mx-auto overflow-hidden mt-3">
        <div
          className="container comingsoon p-3 p-sm-5"
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
    </div>
      
  );
};

export default Comingsoon;
