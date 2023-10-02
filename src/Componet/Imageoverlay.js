import React, { useEffect, useState } from "react";
import "./imageoverlay.css";
import ProductDb from "./ProductDb";
function Imageoverlay() {
  const [items, setItems] = useState(ProductDb);

  return (
    <>
     <h1 className="mt-4 text-center ">Product</h1>
      <div className="mainproduct">
        {items.map((elem) => {
          const { image, title, text } = elem;
          return (
            <>
              <div className="main_container">
                <img src={image} className="image"></img>
                <div className="overlay">
                  <h1 className="rotateh1">{title}</h1>
                  <h2 className="rotateh2">{text}</h2>
                </div>{" "}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Imageoverlay;
