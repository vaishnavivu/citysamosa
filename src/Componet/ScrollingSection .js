import "./ScrollingSection.css";
import React, { useState, useEffect, useRef } from "react";
import Productdb from "./Produtdb";

const ScrollingSection = () => {
  const [items] = useState(Productdb);
  const chutaniRefs = useRef([]); // Array to hold refs for each chutani element

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-chutani");
          } else {
            entry.target.classList.remove("animate-chutani");
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is in view
      }
    );

    chutaniRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      chutaniRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="scroll-container productbg">
      {items.map((elem, index) => {
        const { image, heading, chutany,potato } = elem;
        return (
          <section className="panel orange" key={index}>
            <div className="content">
              <img
                src={chutany}
                alt=""
                className="chutani"
                ref={(el) => (chutaniRefs.current[index] = el)} // Assign ref
              />
              <div className="potatoimg aos-init aos-animate" aos="fade-right" data-aos-delay="50" data-aos-duration="1000">
              <img src={potato}  alt=""></img>

                </div>
              <div className="product_img">
                <img src={image} alt="" className="product-image" />
              </div>
              <h1 className="pt-5">{heading}</h1>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default ScrollingSection;
