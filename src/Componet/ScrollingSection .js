import React, { useState, useRef, useEffect } from "react";
import Productdb from "./Produtdb";
import "../Componet/ScrollingSection.css";

const ScrollingSection = () => {
  const [showScrollUp, setShowScrollUp] = useState(false); // To control scroll-up icon visibility
  const scrollContainerRef = useRef(null); // Create a ref for the scroll container

  // Function to scroll to the next panel
  const handleScrollToNextPanel = () => {
    const scrollContainer = scrollContainerRef.current;
    const currentScrollPosition = scrollContainer.scrollTop;
    const panelHeight = window.innerHeight;

    const nextScrollPosition = currentScrollPosition + panelHeight;

    scrollContainer.scrollTo({
      top: nextScrollPosition,
      behavior: "smooth",
    });
  };

  // Function to scroll to the top of the page
  const handleScrollToTop = () => {
    const scrollContainer = scrollContainerRef.current;
    scrollContainer.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Detect when the user has scrolled to the bottom or the top of the container
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const handleScroll = () => {
      const isBottom =
    scrollContainer.scrollTop + scrollContainer.clientHeight >=
    scrollContainer.scrollHeight - 10;
  console.log("ScrollTop:", scrollContainer.scrollTop);
  console.log("ClientHeight:", scrollContainer.clientHeight);
  console.log("ScrollHeight:", scrollContainer.scrollHeight);
  setShowScrollUp(isBottom);
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="scroll-container productbg"
      ref={scrollContainerRef} // Attach the ref to the scroll container
    >
      {Productdb.map((elem, index) => {
        const { image, span1, span2, span3 } = elem;
        return (
          <section className="panel" key={index}>
            <div className="content">
              <div className="row">
                <div className="col-sm-7 col-12 pt-5 center-vertical scrollingtext d-flex">
                  <h3 className="pt-5 mt-1 mt-sm-5">
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
          </section>
        );
      })}

      {/* Scroll down icon */}
      {!showScrollUp && (
        <div className="scroll-indicator" onClick={handleScrollToNextPanel}>
          <i className="fa-solid fa-circle-chevron-down"></i>
        </div>
      )}

      {/* Scroll up icon */}
      {showScrollUp && (
        <div className="scroll-up-indicator" onClick={handleScrollToTop}>
          <i className="fa-solid fa-circle-chevron-up"></i>
        </div>
      )}
    </div>
  );
};

export default ScrollingSection;
