import React, { useState } from "react";
import "./imageoverlay.css";
import Productdb from "./Produtdb";
function Imageoverlay() {
  const [items] = useState(Productdb);
  return (
    <>
      <div className="productbg overflow-hidden">
      <div className="pt-5 centerheading" >
        <h3 className="text-white ">Our Product</h3>
      </div>
        <section className="cards tilt-box-wrap " data-tilt data-tilt-max="50" data-tilt-speed="400" data-tilt-perspective="500">
          {items.map((elem) => {
            const { image,heading } = elem;
            return (
              <div
                className="card js-tilt "
                data-tilt
                data-aos="fade-up"
                data-aos-duration="3000"
              >
               
                <div className="banner">
                  <h2>
                    {heading}
                  </h2>
                </div>
                <img src={image} alt="samosa" className="pop" />
                <div className="content mt-5 ml-0">
                  <div className="details">
                    <h5>product details</h5>
                    <small>color:Cherry red</small>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </>
  );
}

export default Imageoverlay;
