import React, { useState, useRef, useEffect } from "react";
import Productdb from "./Produtdb";
import "../Componet/ScrollingSection.css";

const ScrollingSection = () => {
  const [currentPanel, setCurrentPanel] = useState(0); // Track the active panel
  const scrollContainerRef = useRef(null);

  // Scroll to a specific panel when a dot is clicked
  const handleDotClick = (index) => {
    const scrollContainer = scrollContainerRef.current;
    const panelHeight = window.innerHeight;
    const targetScrollPosition = index * panelHeight;

    scrollContainer.scrollTo({
      top: targetScrollPosition,
      behavior: "smooth",
    });
    setCurrentPanel(index);
  };

  // Function to scroll to the next panel
  const handleScrollToNextPanel = () => {
    const nextPanel = Math.min(currentPanel + 1, Productdb.length - 1);
    handleDotClick(nextPanel);
  };

  // Function to scroll to the top (first panel)
  const handleScrollToTop = () => {
    handleDotClick(0);
  };

  // Detect which panel is currently in view
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const handleScroll = () => {
      const panelHeight = window.innerHeight;
      const scrollPosition = scrollContainer.scrollTop;

      const current = Math.round(scrollPosition / panelHeight);
      setCurrentPanel(current);
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="scroll-container productbg" ref={scrollContainerRef}>
      {Productdb.map((elem, index) => {
        const { image, span1, span2, span3 } = elem;
        return (
          <section className="panel" key={index}>
            <div className="content">
              <div className="row">
                <div className="col-sm-7 col-12  center-vertical scrollingtext d-flex">
                  <h3 className="pt-5 pb-5 mt-1 mt-sm-5">
                    <span>{span1}</span>
                    <span className="visionspan2">{span2}</span>
                    <span>{span3}</span>
                  </h3>
                </div>
                <div className="col-sm-5 col-12 center-vertical justify animate-slide-in">
                  <img
                    src={image}
                    alt=""
                    className="img-fluid image scrollingimg"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            {/* Optional Footer */}
            <footer />
          </section>
        );
      })}

      {/* Scroll down and up indicators */}
      {currentPanel !== Productdb.length - 1 && (
        <div className="scroll-indicator" onClick={handleScrollToNextPanel}>
          <i className="fa-solid fa-circle-chevron-down"></i>
        </div>
      )}
      {currentPanel === Productdb.length - 1 && (
        <div className="scroll-up-indicator" onClick={handleScrollToTop}>
          <i className="fa-solid fa-circle-chevron-up"></i>
        </div>
      )}

      {/* Dots for panel navigation */}
      <div className="dot-navigation">
        {Productdb.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentPanel ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollingSection;
