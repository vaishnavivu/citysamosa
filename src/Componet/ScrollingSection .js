import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Productdb from "./Produtdb";
import '../Componet/ScrollingSection.css';

const ScrollingSection = () => {
  const [items] = useState(Productdb);

  useEffect(() => {
    AOS.init({ duration: 1000000 });
  }, []);

  return (
    <div className="scroll-container productbg">
      {items.map((elem, index) => {
        const { image, heading, chutany, potato,beans,coriander } = elem;
        return (
          <section className="panel orange" key={index}>
            <div className="content">
              <img src={chutany} alt="" className="chutani" />
              <div
                className="potatoimg"
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="1000"
              >
                <img src={potato} alt=""></img>
              </div>
               <img src={beans} className="beans" alt=""></img>
              <div className="product_img center-vertical">
                <img src={image} alt="" className="product-image" />
                <h1>{heading}</h1>
              </div>
              <img src={coriander} alt="" className="coriender"></img>
             
             
            </div>  <footer/>
          </section>
        
        );
      })}
    </div>
  );
};

export default ScrollingSection;
