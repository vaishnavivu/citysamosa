import React, { useState } from "react";
import "./imageoverlay.css";
import Productdb from "./Produtdb";
function Imageoverlay() {
  const [items] = useState(Productdb);
  return (
    <>
      <div>
        <div className="centerheading">
          <h3 className="pt-4 pt-sm-3">Our Product</h3>
          <div className="line mt-0 mb-3"></div>
        </div>
        <div className="productbg overflow-hidden">
          <section className="cards tilt-box-wrap ">
            {items.map((elem) => {
              const { image, heading } = elem;
              return (
                <div
                  className="card js-tilt "
                  data-tilt
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <div className="banner">
                    <h2>{heading}</h2>
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
      </div>
    </>
  );
}

export default Imageoverlay;
