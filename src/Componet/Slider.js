import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function Slider() {
  return (
    <>
        <div className="textanim">
        <h2 data-text="You_Tube...">You_Tube...</h2>
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
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper  mb-5 "
        data-aos="zoom-in-down"
        data-aos-delay="50"
        data-aos-duration="1000"
      >
        <SwiperSlide>
          <div className="wrapperr">
            <iframe
              src="https://www.youtube.com/embed/0hI6WmcYYhU?si=l4rGfKAuy_fvJGnb"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>{" "}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="wrapperr">
            <iframe
              src="https://www.youtube.com/embed/leYbGKs5DgM?si=VN_Dw7GuqpR3b4JM"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>{" "}
          </div>
        </SwiperSlide> <SwiperSlide>
          <div className="wrapperr">
            <iframe
              src= "https://www.youtube.com/embed/PIPLq3fItLs?si=FvmjTQzAzbvw1CY_"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>{" "}
          </div>
        </SwiperSlide> <SwiperSlide>
          <div className="wrapperr">
            <iframe
              src="https://www.youtube.com/embed/Zm78ToZ29_w?si=X0DU9HrCvqrgVFmu"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>{" "}
          </div>
        </SwiperSlide>



      </Swiper>
    </>
  );
}
