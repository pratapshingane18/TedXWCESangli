import React from 'react';
import {CiLocationOn} from 'react-icons/ci'

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-around items-center">
        {/* Social Media */}
        <div className="flex mb-4 md:mb-0 space-x-4">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-500"
          >
            <i className="fab fa-instagram text-2xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-500"
          >
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
        </div>

        {/* Address */}
        <div className="text-center md:text-left mb-4 md:mb-0 md:ml-4">
          
        
        <span className="inline-flex">
        <CiLocationOn></CiLocationOn>
        <p className="m-2  inline-block">Walchand College of Engineering, Vishrambagh Sangli 416415</p>
        </span>

        
          
        </div>

        {/* Contact Details */}
        <div className="text-center md:text-right md:ml-4">
          <p className="text-white">
            Phone: +1 (123) 456-7890<br />
            Email: info@example.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
