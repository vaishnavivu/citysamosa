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
              <h4>Great Ambience</h4>
              <h5>
                We aim to serve traditional chai in a bar-like setting without
                serving 'Sutta’.
              </h5>
            </div>
            <div className="row usp_card">
              <h4>Made with love menu</h4>
              <h5>
                Our menu has varieties of most loved food items and beverages
                that satiate both taste and appetite
              </h5>
            </div>{" "}
            <div className="row usp_card">
              <h4>Orphan Employment</h4>
              <h5>
                We believe in serving society by allowing bringing the potential
                of the less fortunate in front of the world.
              </h5>
            </div>
          </div>
          <div className="col-sm-4 col-12 uspimg">
            <img src="../City Samosa Vector Art-04.png" alt=""></img>
          </div>
          <div
            className="col-sm-4 col-12"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <div className="row usp_card">
              <h4>Pocket-Friendly</h4>
              <h5>
                Everyone loves chai and thus everyone should be able to afford
                our Kulhad chai.
              </h5>
            </div>{" "}
            <div className="row usp_card">
              <h4>Eco-Friendly</h4>
              <h5>
                We serve our beverages in kulhads which are much more
                eco-friendly than plastics or other alternatives.
              </h5>
            </div>{" "}
            <div className="row usp_card">
              <h4>No-Smoking</h4>
              <h5>
                We want people especially the youth to enjoy eco-friendly
                ‘Kulhad Chai Breaks’ rather than ‘Sutta Breaks’.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usp;
