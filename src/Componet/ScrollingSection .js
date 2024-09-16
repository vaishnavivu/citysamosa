import React from "react";

import Productdb from "./Produtdb";
import "../Componet/ScrollingSection.css";

const ScrollingSection = () => {
  return (
    <div className="scroll-container productbg">
      <div className="centerheading pt-5 pt-sm-3">
          <h3>Product</h3>
          <div className="line mt-0 mb-3"></div>
        </div>
      {Productdb.map((elem, index) => {
        const { image, span1,span2,span3 } = elem;
        return (
          <section className="panel" key={index}>
            <div className="content">
              <div className="row">
                {/* VisionHeading animating from the left */}
                <div
                  className="col-sm-7 col-12 pt-5 center-vertical scrollingtext d-flex"
                >
                  <h3 className="pt-5 mt-1 mt-sm-5">
                    <span>{span1}</span>
                    <span className="visionspan2">
                      {span2}
                    </span>
                    <span>{span3}</span>
                  </h3>
                </div>

                {/* Image animating from the right */}
                <div
                  className="col-sm-5 col-12 center-vertical justify animate-slide-in "
                
                >
                  <img
                    src={image}
                    alt=""
                    className="img-fluid image scrollingimg" loading="lazy"
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
