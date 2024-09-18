import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";


const BackButton = () => {

  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <button className="cursor-pointer border border-0 p-2 rounded bg-white text-black shadow-lg mt-4" onClick={handleBackClick}>
      <FontAwesomeIcon icon={faChevronLeft} size="lg" className="mr-2" />
      Inapoi la produse
    </button>
  );
};

export default BackButton;