"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripLines } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef } from "react";
import Link from "next/link";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const aboutUsRef = useRef(null);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    smoothScrolling();
  };

  const smoothScrolling = () => {
    if (aboutUsRef.current) {
      aboutUsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOverlayClick = () => {
    setIsOpen(false);
  };

  return (
    <header>
      <nav className="fixed top-0 left-0 w-full px-4 flex justify-between items-center bg-gray-100 h-14 shadow z-10">
        <div className="flex items-center">
          <Link
            onClick={() => handleLinkClick("")}
            className={`cursor-pointer text-2xl ${
              activeLink === "" ? "text-black" : "text-black"
            }`}
            href="/"
          >Mobix
          </Link>
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
              isOpen
                ? "w-3/5 flex flex-col items-center justify-center gap-4 z-10"
                : "w-0"
            } ${isOpen && "md:hidden"}`}
            id="menu"
            ref={menuRef}
            onClick={handleOverlayClick}
            style={{ zIndex: "9999" }}
          >
            <ul className="flex flex-col items-center justify-center w-auto gap-4 bg-gray-200 border-0 w-full py-6">
              <li>
                <Link
                  onClick={() => handleLinkClick("products")}
                  className="text-sm px-4 py-2"
                  href="/#products"
                >
                  Produse & Servicii
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => handleLinkClick("about-us")}
                  className="text-sm px-4 py-2"
                  href="/#about-us"
                >
                  Despre noi
                </Link>
              </li>
              <li>
                <Link className="text-sm px-4 py-2" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
        <div className="hidden md:flex md:items-center md:w-auto">
          <ul className="hidden md:flex md:items-center md:w-auto gap-4">
            <li>
              <Link
                onClick={() => handleLinkClick("products")}
                className={`cursor-pointer ${
                  activeLink === "products" ? "text-gray-400" : "text-black"
                }`}
                href="/#products"
              >
                Produse & Servicii
              </Link>
            </li>
            <li>
              <Link
                onClick={() => handleLinkClick("about-us")}
                className={`cursor-pointer ${
                  activeLink === "about-us" ? "text-gray-400" : "text-black"
                }`}
                href="/#about-us"
              >
                Despre noi
              </Link>
            </li>
            <li>
              <Link
                className={`cursor-pointer ${
                  activeLink === "contact" ? "text-gray-400" : "text-black"
                }`}
                href="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
