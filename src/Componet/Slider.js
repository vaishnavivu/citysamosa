import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";

import "./styles.css";

// Import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper";

export default function Slider() {
  return (
    <>
      <div className="mt-5 pb-3 centerheading">
        <h3>You Tube</h3>
      </div>
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
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper mb-5"
        data-aos="zoom-in-down"
        data-aos-delay="50"
        data-aos-duration="1000"
      >
        <SwiperSlide>
          <div className="wrapperr">
            <iframe
              src="https://www.youtube.com/embed/0hI6WmcYYhU?si=l4rGfKAuy_fvJGnb"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="wrapperr">
            <iframe
              src="https://www.youtube.com/embed/leYbGKs5DgM?si=VN_Dw7GuqpR3b4JM"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="wrapperr">
            <iframe
              src="https://www.youtube.com/embed/PIPLq3fItLs?si=FvmjTQzAzbvw1CY_"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="wrapperr">
            <iframe
              src="https://www.youtube.com/embed/Zm78ToZ29_w?si=X0DU9HrCvqrgVFmu"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
