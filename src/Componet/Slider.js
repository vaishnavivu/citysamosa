import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import "./styles.css";
import { EffectCoverflow, Pagination, Autoplay, Navigation } from "swiper";
import LazyLoadYouTube from "./LazyLoadYouTube";

// Importing Font Awesome icons (or any icons you prefer)
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Slider() {
  const swiperRef = useRef(null);

  const handleVideoClick = () => {
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.stop(); // Stop autoplay when video is clicked
    }
  };

  return (
    <>
      <div className="pb-5 mt-5 mb-5 pt-3 mt-sm-4 pt-sm-4 overflow-hidden">
        <div className="centerheading mb-4">
          <h3>Our Leaders Podcast</h3>          
          <div className="line mt-0"></div>
        </div>

        <div className="swiper-container-wrapper">
          {/* Swiper component */}
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
            className="mySwiper mt-3"
            onSwiper={(swiper) => (swiperRef.current = swiper)} // Reference to Swiper instance
          >
            <SwiperSlide>
              <LazyLoadYouTube videoId="0hI6WmcYYhU" title="Leaders Podcast Video 1" onVideoClick={handleVideoClick} />
            </SwiperSlide>
            <SwiperSlide>
              <LazyLoadYouTube videoId="leYbGKs5DgM" title="Leaders Podcast Video 2" onVideoClick={handleVideoClick} />
            </SwiperSlide>
            <SwiperSlide>
              <LazyLoadYouTube videoId="PIPLq3fItLs" title="Leaders Podcast Video 3" onVideoClick={handleVideoClick} />
            </SwiperSlide>
            <SwiperSlide>
              <LazyLoadYouTube videoId="Zm78ToZ29_w" title="Leaders Podcast Video 4" onVideoClick={handleVideoClick} />
            </SwiperSlide>
          </Swiper>

          {/* Left and Right Navigation Buttons within the Swiper container */}
          <div className="swiper-button-prev custom-swiper-button">
    <FontAwesomeIcon icon={faChevronLeft} className="custom-icon" />
</div>
<div className="swiper-button-next custom-swiper-button">
    <FontAwesomeIcon icon={faChevronRight} className="custom-icon" />
</div>

        </div>
      </div>
    </>
  );
}
