import React from "react";
import "../Componet/Usp.css";

const Usp = () => {
  return (
    <div className="container-fluid uspbg mt-5 mb-5">
      <div className="container usp pt-5">
        <div className="row text-center usp_heading">
          <h4>Our USP's</h4>
            <h3>Brewing Goodness</h3>
        </div>
        <div className="row mt-3">
          <div
            className="col-sm-4 col-12"
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <div className="row usp_card">
              <h4>Authentic Flavor</h4>
              <h5>
              Traditional recipes using the freshest ingredients for a taste that’s truly genuine.</h5>
            </div>
            <div className="row usp_card">
              <h4>Crispy Perfection</h4>
              <h5>
              Perfectly crisp and golden on the outside, with a deliciously savory filling inside. </h5>
            </div>{" "}
            <div className="row usp_card">
              <h4>Affordable Pricing</h4>
              <h5>
              High-quality samosas that won’t stretch your budget—great taste at a pocket-friendly price. </h5>
            </div>
          </div>
          <div className="col-sm-4 col-12 uspimg">
            <img src="../City_Samosa_Vector_Art-04.jpg" alt=""></img>
          </div>
          <div
            className="col-sm-4 col-12"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <div className="row usp_card">
              <h4>Freshly Made Daily</h4>
              <h5>
              Every samosa is made fresh each day, ensuring the highest quality and taste in every bite.
              </h5>
            </div>{" "}
            <div className="row usp_card">
              <h4>Variety of Options</h4>
              <h5>
              A diverse range of fillings to satisfy all taste preferences, from classic to innovative.
              </h5>
            </div>{" "}
            <div className="row usp_card">
              <h4>Orphan Employment</h4>
              <h5>
              Empower. Employ. Elevate. At City Samosa, we believe in second chances and brighter futures. 
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usp;
