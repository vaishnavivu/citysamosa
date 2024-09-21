import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import "./styles.css";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";
export default function Slider() {
  return (
    <>
      <div className="pb-5 mt-5 mb-5 pt-3 mt-sm-4 pt-sm-4 overflow-hidden">
        <div className="centerheading mb-4">
          <h3>Our Leaders Podcast</h3>          
        <div className="line mt-0"></div>
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
          className="mySwiper mt-3"
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
      </div>
    </>
  );
}