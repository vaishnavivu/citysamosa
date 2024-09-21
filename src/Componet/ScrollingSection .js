import React, { useState, useRef, useEffect } from "react";
import Productdb from "./Produtdb";
import "../Componet/ScrollingSection.css";
const ScrollingSection = () => {
  const [currentPanel, setCurrentPanel] = useState(0);
  const [isInScrollContainer, setIsInScrollContainer] = useState(true);
  const scrollContainerRef = useRef(null);
  const scrollToPanel = (index) => {
    const scrollContainer = scrollContainerRef.current;
    const panelHeight = window.innerHeight;
    const targetScrollPosition = index * panelHeight;
    scrollContainer.scrollTo({
      top: targetScrollPosition,
      behavior: "smooth",
    });
    setCurrentPanel(index);
  };
  const handleKeyDown = (event) => {
    const maxPanels = Productdb.length - 1;
    if (isInScrollContainer) {
      if (event.key === "ArrowDown") {
        event.preventDefault();
        if (currentPanel < maxPanels) {
          scrollToPanel(currentPanel + 1);
        }
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        if (currentPanel > 0) {
          scrollToPanel(currentPanel - 1);
        }
      }
    }
  };
  const handleBodyScroll = () => {
    const scrollContainer = scrollContainerRef.current;
    const containerBottom = scrollContainer.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;
    if (containerBottom <= windowHeight) {
      setIsInScrollContainer(false);
      window.removeEventListener("keydown", handleKeyDown);
    } else {
      setIsInScrollContainer(true);
      window.addEventListener("keydown", handleKeyDown);
    }
  };
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const handleScroll = () => {
      const panelHeight = window.innerHeight;
      const scrollTop = scrollContainer.scrollTop;
      const current = Math.round(scrollTop / panelHeight);
      setCurrentPanel(current);
    };
    scrollContainer.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleBodyScroll);
    if (isInScrollContainer) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleBodyScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentPanel, isInScrollContainer]);
  return (
    <div>
      <div
        className="scroll-container productbg"
        ref={scrollContainerRef}
        style={{ height: "100vh", overflowY: "scroll" }}
      >
        {Productdb.map((elem, index) => {
          const { image, span1, span2, span3, Productnu } = elem;
          return (
            <section className="panel" key={index}>              
              <div className="content">
                <div className="row">
                  <div className="col-sm-7 col-12 center-vertical scrollingtext d-flex">
                    <h3 className="pt-3 pb-3 mt-1 mt-sm-5">
                      <span>{span1}</span>
                      <span className="visionspan2">
                        {span2} <br />
                      </span>
                      <span>{span3}</span>
                    </h3>
                    <h5 className="largescreen">{Productnu}</h5>
                  </div>
                  <div className="col-sm-5 col-12 center-vertical justify animate-slide-in">
                    <img
                      src={image}
                      alt=""
                      className="img-fluid image scrollingimg"
                      loading="lazy"
                    />
                  </div>
                  <h5 className="smallscreen Productnu pt-4">{Productnu}</h5>
                </div>
              </div>
            </section>
          );
        })}
        {currentPanel !== Productdb.length - 1 && (
          <div
            className="scroll-indicator"
            onClick={() => scrollToPanel(currentPanel + 1)}
          >
            <i className="fa-solid fa-circle-chevron-down"></i>
          </div>
        )}
        {currentPanel === Productdb.length - 1 && (
          <div className="scroll-up-indicator" onClick={() => scrollToPanel(0)}>
            <i className="fa-solid fa-circle-chevron-up"></i>
          </div>
        )}
        <div className="dot-navigation">
          {Productdb.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === currentPanel ? "active" : ""}`}
              onClick={() => scrollToPanel(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default ScrollingSection;
