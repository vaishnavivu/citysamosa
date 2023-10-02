import React, { useState } from "react";
import "./Founder.css";
import Menu from "./menu";


const Founder = () => {
  const [items, setItems] = useState(Menu);


    return (
    <>
      <div class="container  twosec  mt-5">

        {items.map((elem) => {
          const {  image, name, founder, discription } = elem;
          
          return (
            <div class="row ">
              <div class="col-6 col-md-6 col-12  reveal imz">
                <img data-aos="fade-up" src={image} className="pl-5 " alt="" />
              </div>

              <div  data-aos="fade-down" class="col-6 col-md-6 col-12 align-items-center text">
            
                <h1 className="pt">{name}</h1>
                <h5 >{founder}</h5>
                <hr className="line"></hr>
                <h6 className="pb-3">
                  {discription}
                </h6>
              </div>

              
            </div>
          );
        })}
      </div>
    </>
  );

  
};
export default Founder;
