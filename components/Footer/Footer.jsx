import React from "react";
import { faEnvelopeOpen, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-fill h-fill p-10 shadow-lg border-t">
      <div className="flex flex-col gap-4 justify-center items-center text-center md:flex-row">
        <div className="flex flex-col justify-center items-center text-center">
          <h3>Conectează-te cu noi</h3>
          <div className="flex flex-row justify-center items-center gap-4 mt-4">
            <Link
              href="https://www.facebook.com/mobixtoplita"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg"
            >
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </Link>
            <Link href="www.instagram.com" className="text-lg">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </Link>
            <Link href="mailto:mobilamobix@gmail.com" className="text-lg">
              <FontAwesomeIcon icon={faEnvelopeOpen} size="lg" />
            </Link>
            <Link
              href="https://wa.me/+40742266779"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg"
            >
              <FontAwesomeIcon icon={faWhatsapp} size="lg" />
            </Link>
          </div>
        </div>
        <hr className="w-40 h-1 rounded-full md:border-b-0 md:border-l md:border-solid md:transform md:rotate-90 bg-gray-300 -z-10" />
        <p className="md:w-1/4">
          Copyright &copy; 2024 Mobix Mobila. Toate drepturile rezervate.
        </p>
        <hr className="w-40 h-1 rounded-full md:border-b-0 md:border-l md:border-solid md:transform md:rotate-90 bg-gray-300 -z-10" />
        <div className="flex flex-col justify-center items-center text-center">
          <FontAwesomeIcon
            icon={faPhone}
            size="xl"
            style={{ width: "24px", height: "24px" }}
          />
          <p>Contact</p>
          <Link href="tel:+40742266779">0742 266 779</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
