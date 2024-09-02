import Carousel from "react-bootstrap/Carousel";
import React from "react";

function ControlledCarousel() {
  return (
    <section id="home" className="hero-block mb-5 mb-sm-6 mt-0">
      <Carousel>
        <Carousel.Item>
          <video autoPlay muted width="100%">
            <source src="../samosa_video.mp4" type="video/mp4" />
            Sorry, your browser doesn't support videos.
          </video>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default ControlledCarousel;
