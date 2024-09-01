import React from "react";
import "../Componet/Comingsoon.css";

const Comingsoon = () => {
  return (
    <div>
      {" "}
      <div className="container-fluid comingbg pb-4 mt-3 pt-3 mt-sm-5 pt-sm-5 mx-auto">
        <div className="Comingheading">
          <h3 className="pb-3">Coming Soon</h3>
        </div>
        <div className="container comingsoon">
          <div className="row">
            <div className="col-4">
              <img src="../hydrabad.jpg" alt=""></img>
            </div>
            <div className="col-4">
              <img src="../hydrabad.jpg" alt=""></img>
            </div>
            <div className="col-4">
              <img src="../hydrabad.jpg" alt=""></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comingsoon;
