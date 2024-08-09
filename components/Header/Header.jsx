"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripLines } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef } from "react";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOverlayClick = () => {
    setIsOpen(false);
  };

  return (
    <header>
      <nav
        className="fixed top-0 left-0 w-full px-4 flex justify-between items-center bg-gray-100 h-14 shadow z-10"
      >
        <div className="flex items-center">
          <Link className="text-xl" href="/">Mobix Mobila</Link>
        </div>
        <div className="cursor-pointer md:hidden">
          <FontAwesomeIcon icon={faGripLines} onClick={toggleMenu} />
        </div>
        {isOpen ? (
          <div
            className={`fixed top-0 left-0 h-full w-full bg-black opacity-50 cursor-pointer ${
              isOpen ? "z-10" : ""
            }`}
            onClick={handleOverlayClick}
          />
        ) : null}
        {isOpen && (
          <div
            className={`fixed top-0 right-0 h-full bg-gray-100 shadow-lg transition-transform transform z-10 shadow-gray-800 ${
              isOpen ? "w-3/5 flex flex-col items-center justify-center gap-4 z-10" : "w-0"
            } ${isOpen && "md:hidden"}`}
            id="menu"
            ref={menuRef}
            onClick={handleOverlayClick}
            style={{ zIndex: "9999" }} 
          >
            <ul className="flex flex-col items-center justify-center w-auto gap-4 bg-gray-200 border-0 w-full py-6">
              <li>
                <Link className="text-sm px-4 py-2" href="produse">Produse & Servicii</Link>
              </li>
              <li>
                <Link className="text-sm px-4 py-2" href="despre-noi">Despre noi</Link>
              </li>
              <li>
                <Link className="text-sm px-4 py-2" href="contact">Contact: 742 266 779</Link>
              </li>
            </ul>
          </div>
        )}
        <div className="hidden md:flex md:items-center md:w-auto">
        <ul className="hidden md:flex md:items-center md:w-auto gap-4">
              <li>
                <Link className="cursor-pointer hover:text-gray-400" href="produse">Produse & Servicii</Link>
              </li>
              <li>
                <Link className="cursor-pointer hover:text-gray-400" href="despre-noi">Despre noi</Link>
              </li>
              <li>
                <Link  className=" border-black text-black px-4 py-2 cursor-pointer hover:text-gray-400" href="contact">Contact: 742 266 779</Link>
              </li>
            </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
