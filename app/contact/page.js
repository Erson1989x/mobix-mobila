"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import contactOne from "../../app/assets/contact-img/contact-1.jpg";
import contactTwo from "../../app/assets/contact-img/contact-2.jpg";
import { useRef } from "react";

const Contact = () => {
  const swiperRef = useRef(null);

  const handleNextSlider = () => {
    swiperRef.current.swiper.slideNext();
  };

  const handlePrevSlider = () => {
    swiperRef.current.swiper.slidePrev();
  };

  const settingsSlider = {
    dots: "true",
    infinite: "true",
    loop: "true",
    speed: 500,
    slidesPerView: 1,
    slidesPerGroup: 1,
    pagination: {
      clickable: "true",
    },
  };

  return (
    <div className="h-full p-4 md:p-8 pt-16 md:pt-20">
      <h1 className="text-3xl font-bold mb-8 text-center">Contact</h1>
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-4">
        <Swiper ref={swiperRef} {...settingsSlider}>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
          <SwiperSlide>
            <div className="flex flex-col items-center">
              <h2 className="text-xl font-bold mb-4">Magazin Vale</h2>
              <Image
                priority={true}
                src={contactOne}
                alt="123 Main St"
                className="w-full h-80 object-cover mb-4"
              />
              <p
                className="text-center text-gray-600 cursor-pointer mb-4"
                onClick={() =>
                  window.open(
                    `https://www.google.com/maps/place/Mobix+Mobila+Vale/@46.9299129,25.3675253,14.79z/data=!4m6!3m5!1s0x474a62f06e6f9b89:0x1a586c9d75cf0411!8m2!3d46.9384561!4d25.3704597!16s%2Fg%2F11ggm9ptr5?entry=ttu`,
                    "_blank"
                  )
                }
              >
                Str. 1 Decembrie 1918, Nr.F1
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center">
              <h2 className="text-xl font-bold mb-4">Magazin Centru</h2>
              <Image
                priority={true}
                src={contactTwo}
                alt="456 Elm St"
                className="w-full h-80 object-cover mb-4"
              />
              <p
                className="text-center text-gray-600 cursor-pointer mb-4"
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps/place/Mobix+Mobila+Centru/@46.9234006,25.3523938,20.25z/data=!4m6!3m5!1s0x474a6311217f5d99:0xa467ff2c27738be1!8m2!3d46.9235535!4d25.3521344!16s%2Fg%2F11s361ll8g?entry=ttu",
                    "_blank"
                  )
                }
              >
                Blvd. Nicolae Balcescu Bl.B, Sc.4. Ap. P1
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="flex justify-center align-center gap-4">
          <button
            className="cursor-pointer border border-0 p-2 rounded bg-white text-black shadow-lg"
            onClick={handlePrevSlider}
          >
            Prev
          </button>
          <button
            className="cursor-pointer border border-0 p-2 rounded bg-white text-black shadow-lg"
            onClick={handleNextSlider}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
