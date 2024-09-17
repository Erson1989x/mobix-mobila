"use client";
import React from "react";
import Image from "next/image";
import magazinCentru from "../../app/assets/contact-img/contact-2.jpg";
import magazinVale from "../../app/assets/contact-img/contact-1.jpg";
import "../contact/contact.css";

const Contact = () => {
  return (
    <div className="h-full p-4 md:p-8 pt-16 md:pt-20 bg-gray-100">
      <h1 className="text-3xl font-bold mb-8 text-center">Contact</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:flex md:justify-between md:items-center">
        <div className="card text-center shadow-lg rounded hover:shadow-2xl md:h-96 md:w-96 transition duration-500 ease-in-out order-1 md:order-none">
          <h2 className="font-bold text-center mb-2">Magazin Centru</h2>
          <div className="flex justify-center items-center mb-2">
            <Image
              src={magazinCentru}
              alt="magazin centru"
              className="h-56 w-72 shadow-lg hover:shadow-2xl hover:scale-110 transition duration-500 ease-in-out"
            />
          </div>
          <p
            className="text-center text-gray-600 cursor-pointer p-2 break-words overflow-wrap"
            onClick={() =>
              window.open(
                "https://www.google.com/maps/place/Mobix+Mobila+Centru/@46.9234006,25.3523938,20.25z/data=!4m6!3m5!1s0x474a6311217f5d99:0xa467ff2c27738be1!8m2!3d46.9235535!4d25.3521344!16s%2Fg%2F11s361ll8g?entry=ttu",
                "_blank"
              )
            }
          >
            Blvd. Nicolae Balcescu Bl.B, Sc.4. Ap. P1 <br /> Toplita
          </p>
        </div>
        <div className="card shadow-lg rounded hover:shadow-2xl md:h-96 md:w-96 transition duration-500 ease-in-out order-3 md:order-none">
          <form className=" p-4 shadow-lg rounded w-full">
            <h2 className="text-md text-center font-bold mb-4">Contact</h2>
            <div className="flex flex-col justify-center gap-2">
              <label>Name</label>
              <input type="text" className="rounded p-2 shadow-md mb-2" />
            </div>
            <div className="mb-2 flex flex-col justify-center gap-2">
              <label>Email</label>
              <input type="email" className="rounded p-2 shadow-md mb-2" />
            </div>
            <div className="mb-2 flex flex-col justify-center gap-2">
              <label>Message</label>
              <textarea className="rounded p-2 shadow-md"></textarea>
            </div>
            <button
              className="cursor-pointer border border-0 p-2 rounded bg-white text-black shadow-md animate-pulse"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
        <div className="card text-center shadow-lg rounded hover:shadow-2xl md:h-96 md:w-96 transition duration-500 ease-in-out order-2 md:order-none">
          <h2 className="font-bold text-center mb-2">Magazin Valea</h2>
          <div className="flex justify-center mb-2">
            <Image src={magazinVale} alt="magazin vale" className="h-56 w-72 shadow-lg hover:shadow-2xl hover:scale-110 transition duration-500 ease-in-out" />
          </div>
          <p
            className="text-center text-gray-600 cursor-pointer p-2 break-words overflow-wrap"
            onClick={() =>
              window.open(
                `https://www.google.com/maps/place/Mobix+Mobila+Vale/@46.9299129,25.3675253,14.79z/data=!4m6!3m5!1s0x474a62f06e6f9b89:0x1a586c9d75cf0411!8m2!3d46.9384561!4d25.3704597!16s%2Fg%2F11ggm9ptr5?entry=ttu`,
                "_blank"
              )
            }
          >
            Str. 1 Decembrie 1918, Nr.F1 <br /> Toplita
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
