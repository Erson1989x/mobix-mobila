import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import mobixBg from "../../app/assets/background/mobix.jpeg"
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
      className="relative hidden sm:block opacity-80"
      fill
    />
    <Image
      src={mobixBg}
      alt="mobile"
      layout="fill"
      objectFit="fill"
      priority
      className="relative block sm:hidden opacity-85 h-96 object-cover w-96"
    />
    <div className="absolute h-64 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 sm:w-3/4 h-52 bg-slate-200 bg-opacity-30 flex flex-col items-center justify-center">
      <h1 className="text-3xl sm:text-5xl relative text-black text-shadow-md p-5 md:p-10 text-center">
        High quality furnitures for your home! For you and your family!
      </h1>
      <br></br>
    </div>
    <div className="absolute h-64 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-52 sm:w-3/4 bg-slate-50 bg-opacity-10 flex flex-col items-center justify-center after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-radial after:from-white after:via-white after:to-transparent after:opacity-0 after:animate-pulse after:duration-2000 after:inset-0"></div>
    <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
    <FontAwesomeIcon
        icon={faChevronDown}
        className="text-white text-shadow-md cursor-pointer animate-bounce"
        style={{ width: "48px", height: "48px" }}
        onClick={handleScroll}
      />
      </div>
  </div>
  )
}

export default PageHeader