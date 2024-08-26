import React, { useState } from "react";
import "./imageoverlay.css";
import ProductDb from "./ProductDb";
function Imageoverlay() {
  const [items] = useState(ProductDb);

  return (
    <>
     <h1 className="mt-4 text-center TopHeading ">Product</h1>
      <div className="mainproduct container mx-auto">
        {items.map((elem) => {
          const { image, title, text } = elem;
          return (
            <>
              <div className="main_container  " data-aos="flip-up"  data-aos-delay="50"
                  data-aos-duration="1000">
                <img src={image} alt='' className="image"></img>
                <div className="overlay">
                  <h1 className="rotateh1">{title}</h1>
                  <h2 className="rotateh2">{text}</h2>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Imageoverlay;