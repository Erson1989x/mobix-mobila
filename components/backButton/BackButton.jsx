import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const BackButton = ({ href }) => {
  return (
    <Link
      className="cursor-pointer border border-0 p-2 rounded bg-white text-black shadow-lg mt-4"
      href={href}
    >
      <FontAwesomeIcon icon={faChevronLeft} size="lg" className="mr-2" />
      Inapoi la produse
    </Link>
  );
};

export default BackButton;
