import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import mobixBg from "../../app/assets/background/mobix.jpeg"
import mobixmob from "../../app/assets/background/mobixmob.jpg"
import Image from "next/image";


const PageHeader = () => {

    const handleScroll = () => {
        window.scrollTo({
          top: window.scrollY + window.innerHeight,
          behavior: "smooth",
        });
      };

  return (
    <div className="relative z-3 h-screen overflow-hidden pt-16 md:pt-20">
    <Image
      src={mobixBg}
      alt="desktop"
      layout="fill"
      objectFit="fill"
      priority
      className="relative hidden sm:block opacity-80 pt-8"
      fill
    />
    <Image
      src={mobixmob}
      alt="mobile"
      layout="fill"
      objectFit="fill"
      priority
      className="relative block sm:hidden opacity-85 h-96 object-cover w-96"
    />

    <div className="absolute h-[130px] top-[300px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-72 sm:w-3/4 bg-slate-50 bg-opacity-10 flex flex-col items-center justify-center after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-radial after:from-white after:via-gray-300 after:to-transparent after:opacity-30 after:animate-pulse after:duration-3000 after:inset-0 md:h-[220px] md:w-[500px] md:top-[285px] lg:h-[255px] lg:w-[650px] lg:top-[300px] xl:h-[315px] xl:w-[950px] xl:top-[350px]"></div>
    <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
    <FontAwesomeIcon
        icon={faChevronDown}
        className="text-black text-shadow-md cursor-pointer animate-bounce"
        style={{ width: "48px", height: "48px" }}
        onClick={handleScroll}
      />
      </div>
  </div>
  )
}

export default PageHeader