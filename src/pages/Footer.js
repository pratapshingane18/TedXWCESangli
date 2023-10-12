import React from "react";
import { FaPhone, FaEnvelope, FaLinkedin, FaInstagram, FaTwitter} from "react-icons/fa";
import {ImLocation} from 'react-icons/im'

const Footer = () => {
  return (
    <footer className="bg-zinc-700 text-white py-8 flex flex-row justify-center">
      <div className="container mx-auto flex flex-wrap justify-center">
        <div className="w-full sm:w-1/2 md:w-1/3 mb-4 sm:mb-0">
          <div className="mb-2 font-bold">Ask Us</div>
          <div className="flex items-center mb-2">
            <FaPhone className="mr-2" />
            <span>Phone: +1-123-456-7890</span>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="mr-2" />
            <span>Email: info@example.com</span>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 mb-4 sm:mb-0">
          <div className="mb-2 font-bold">ADDRESS</div>
          <div className="flex items-center mb-2">
            <div className="mr-2">
            <ImLocation></ImLocation>
            </div>
            <span>Your College Name</span>
          </div>
          <div>Your Full Address, City, State, ZIP</div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3">
          <div className="mb-2 font-bold">Social Media</div>
          <div className="flex items-center">
            <a href="#" className="mr-2">
              <FaLinkedin className="text-white" />
            </a>
            <a href="#" className="mr-2">
              <FaInstagram className="text-white" />
            </a>
            <a href="#">
              <FaTwitter className="text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
