import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import mobixBg from "../../app/assets/background/mobix.jpeg";
import Image from "next/image";

const PageHeader = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: window.scrollY + window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative z-3 sm:h-full md:h-screen overflow-hidden pt-20 md:pt-20">
        <Image
          src={mobixBg}
          alt="desktop"
          priority
          className="relative hidden sm:block opacity-80 pt-8 h-4/5 w-full"
        />
      <Image
        src={mobixBg}
        alt="mobile"
        layout="responsive"
        objectFit="fill"
        priority
        className="relative block sm:hidden opacity-85 "
      />
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <FontAwesomeIcon
          icon={faChevronDown}
          className="text-black text-shadow-md cursor-pointer animate-bounce hidden md:block"
          style={{ width: "48px", height: "48px" }}
          onClick={handleScroll}
        />
      </div>
    </div>
  );
};

export default PageHeader;
