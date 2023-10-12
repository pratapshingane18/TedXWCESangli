import React from 'react';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

const TeamMemberInfo = ({ name, position, linkedin, twitter, imgSrc }) => {
  return (
    <div className="flex items-center m-4">
      {/* Team Member Image */}
      <div className="w-32 h-32 md:w-48 md:h-48 rounded overflow-hidden">
        <img
          src={imgSrc}
          alt={`${name}'s Photo`}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Team Member Info */}
      <div className="ml-4">
        <h2 className="text-xl md:text-2xl font-semibold">{name}</h2>
        <p className="text-gray-600 text-lg md:text-xl">{position}</p>
        
        {/* Social Media Links */}
        <div className="mt-2">
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:text-red-600 mr-2"
          >
            <FaLinkedin size={24} /> {/* LinkedIn Icon from react-icons */}
          </a>
          <a
            href={twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:text-red-600"
          >
            <FaTwitter size={24} /> {/* Twitter Icon from react-icons */}
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberInfo;
