import React from "react";

import Productdb from "./Produtdb";
import "../Componet/ScrollingSection.css";

const ScrollingSection = () => {
  return (
    <div className="scroll-container productbg">
      {Productdb.map((elem, index) => {
        const { image } = elem;
        return (
          <section className="panel" key={index}>
            <div className="content">
              <div className="row">
                {/* VisionHeading animating from the left */}
                <div
                  className="col-sm-7 col-12 pt-5 center-vertical VisionHeading d-flex"
                >
                  <h3 className="pt-5 mt-1 mt-sm-5">
                    <span>Empowering dreams</span>
                    <span className="visionspan2">
                      with every step, fueled by passion and
                    </span>
                    <span>crafted with dedication.</span>
                  </h3>
                </div>

                {/* Image animating from the right */}
                <div
                  className="col-sm-5 col-12 center-vertical justify"
                
                >
                  <img
                    src={image}
                    alt=""
                    className="img-fluid image scrollingimg"
                  />
                </div>
              </div>
            </div>
            <footer />
          </section>
        );
      })}
    </div>
  );
};

export default ScrollingSection;
