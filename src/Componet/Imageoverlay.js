import React, { useState } from "react";
import "./imageoverlay.css";
import Productdb from "./Produtdb";
function Imageoverlay() {
  const [items] = useState(Productdb);
  return (
    <>
      <div className="productbg">
        <section className="cards pt-5">
          {items.map((elem) => {
            const { image } = elem;
            return (
              <div className="card js-tilt" data-tilt>
                <div className="banner">
                  <h2>
                    Converse <br />
                    All star
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
