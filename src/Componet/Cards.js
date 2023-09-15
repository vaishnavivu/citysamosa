import React, { useEffect, useState } from "react";
import Menucard from "./menucard";
import Swing from "react-reveal/Swing";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
const Cards = () => {
  //  useEffect(()=>(
  //   AOS.init({duration:"1000" })
  // ),[]);
  const [items, setItems] = useState(Menucard);

  return (
    <>
      <div className="container">
        <div className="row">
          {/* array map function */}
          {items.map((elem) => {
            const { image, title, text } = elem;

            return (
              <div className="col-md-4 ">
                <div
                  class="card"
                  data-aos="zoom-in-down"data-aos-delay="50"
                  data-aos-duration="1000"
                  style={{ width: " 10rem;" }}
                >
                  <Swing duration={3000}>
                    <img src={image} class="card-img-top" alt="..." />
                  </Swing>
                  <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                    <a href="/" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Cards;
