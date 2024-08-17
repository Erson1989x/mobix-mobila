import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
   <footer className="bg-gray-100 w-fill h-fill p-10 shadow-lg border-t">
    <div className='flex flex-col gap-4 justify-center items-center text-center md:flex-row'>
      <div className='flex flex-col justify-center items-center text-center'>
    <FontAwesomeIcon icon={faMapMarkerAlt} size='xl' style={{width: '24px', height: '24px'}} />
    <h3>Adresa</h3>
    <p>Mag Vale - Str. Iuliu Maniu</p>
    <p>Mag Centru - Parter Bl.c Sc.3</p>
    <p>Toplita</p>
    </div>
    <hr className='w-40 h-1 rounded-full md:border-b-0 md:border-l md:border-solid md:transform md:rotate-90 bg-gray-300' />
    <p className='md:w-1/4'>Copyright &copy; 2024 Mobix Mobila. Toate drepturile rezervate.</p>
    <hr className='w-40 h-1 rounded-full md:border-b-0 md:border-l md:border-solid md:transform md:rotate-90 bg-gray-300' />
    <div className='flex flex-col justify-center items-center text-center'>
    <FontAwesomeIcon icon={faPhone} size='xl' style={{width: '24px', height: '24px'}} />
    <p>Contact</p>
    <p>0742 266 779</p>
    </div>
    </div>
   </footer>
  )
}

export default Footer