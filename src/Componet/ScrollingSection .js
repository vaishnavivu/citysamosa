import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Productdb from "./Produtdb";
import "../Componet/ScrollingSection.css";

const ScrollingSection = () => {
  const [items] = useState(Productdb);

  useEffect(() => {
    AOS.init({ duration: 1000000 });
  }, []);

  return (
    <div className="scroll-container productbg">
      {items.map((elem, index) => {
        const { image, heading, chutany, greenchutany ,productheading} = elem;
        return (
          <section className="panel orange" key={index}>
            <div className="content">
              <div className="Scrollinghead">
                <h4 className="pr-5">{productheading}</h4>
              </div>
              <div className="product_img center-vertical central-justify">
                <img src={image} alt="" className="product-image" />
                <div className="VisionHeading productname">
                  <h3>
                    <span className=" spanheading"> {heading} </span>
                  </h3>
                </div>
              </div>
              <img src={chutany} alt="" className="chutani" />
              <img src={greenchutany} alt="" className="greenchutany"></img>
            </div>
            <footer />
          </section>
        );
      })}
    </div>
  );
};

export default ScrollingSection;
