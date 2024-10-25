import React, { useState, useRef, useEffect } from "react";
import Productdb from "./Produtdb";
import "../Componet/ScrollingSection.css";
import "../Componet/Arrowup.css";

const ScrollingSection = () => {
  const [currentPanel, setCurrentPanel] = useState(0);
  const [isInScrollContainer, setIsInScrollContainer] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const scrollContainerRef = useRef(null);

  // Function to check if the screen width is less than or equal to 768px
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
        className="scroll-container contactbg"
        ref={scrollContainerRef}
        style={{ height: "100vh", overflowY: "scroll" }}
      >
        {Productdb.map((elem, index) => {
          const { image, span1, span2, span3, Productnu,Productdisc } = elem;
          return (
            <section className="panel" key={index}>
              <div className="content">
                <div className="row">
                  <div className="allproduct">
                    {elem.id === 1 && (
                      <div className="allproduct_img">
                        <div className="image-container">
                          <img
                            src={isMobile ? "/product all website.webp" : image}
                            alt=""
                            className="img-fluid"
                            loading="lazy"
                          />
                          <div className="overlay-ul mt-4 mt-sm-1 center-vertical VisionHeading allproduct_h3">
                            <h3>
                              <span>Freshly made</span> every day, following authentic recipes,<br></br>
                              <span>Hygiene</span> and <span>Quality</span> guaranteed in every bite!
                            </h3>
                            <div className="d-flex mt-5 justify">
                              <ul>
                                <li>City Samosa</li>
                                <li>Vada Pav</li>
                                <li>Shegaon Kachori</li>
                                <li>Bread Pakoda</li>
                              </ul>
                              <ul>
                                <li>Crispy Vada Pav</li>
                                <li>Gavran Matki Misal</li>
                                <li>Crispy Bread Pakoda</li>
                                <li>Ulta Vada Pav</li>
                              </ul>
                              <ul>
                                <li>Dahi Samosa</li>
                                <li>City Chaha</li>
                                <li>Masala Chaas</li>
                                <li>Lassi</li>
                              </ul>
                              <div className="overlay-text">
                            See Product In Details
                          </div>
                            </div>
                          </div>
                        
                        </div>
                      </div>
                    )}
                  </div>
                  {elem.id !== 1 && (
                    <>
                      <div className="col-sm-7 col-12 center-vertical scrollingtext d-flex">
                        <h3 className="pt-4 mt-1 mt-sm-5">
                          <span>{span1}</span>
                          <span className="visionspan2">
                            {span2} <br />
                          </span>
                          <span>{span3}</span>
                        </h3>
                        <p class="subheading justify mt-2 p-2 p-sm-4">{Productdisc}</p>
                        <h5 className="largescreen">{Productnu}</h5>
                      </div>
                      <div className="col-sm-5 col-12 center-vertical justify animate-slide-in">
                        <img
                          src={image}
                          alt=""
                          className="img-fluid maxwidth60"
                          loading="lazy"
                        />
                      </div>
                    </>
                  )}
                  <h5 className="smallscreen Productnu pt-4">{Productnu}</h5>
                </div>
              </div>
            </section>
          );
        })}
        {currentPanel !== Productdb.length - 1 && (
          <div
            className="scroll-indicator mt-3"
            onClick={() => scrollToPanel(currentPanel + 1)}
          >
            <i className="fa-solid fa-circle-chevron-down"></i>
          </div>
        )}
        {currentPanel === Productdb.length - 1 && (
          <div
            className="scroll-up-indicator mt-3"
            onClick={() => scrollToPanel(0)}
          >
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