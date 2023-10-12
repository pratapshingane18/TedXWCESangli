import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navigation = () => {

  const [activeItem, setActiveItem] = useState('home');

  // Function to handle click events and set the active item
  const handleItemClick = (item) => {
    // Set the active item to the clicked item
    setActiveItem(item);
  };

  // Define a function to determine the background color for each list item
  const getBackgroundColor = (item) => {
    // Check if the item is active, set the background color to 'blue', otherwise 'transparent'
    return activeItem === item ? 'red' : 'transparent';
  };

  // Define a function to determine the text color for each list item
  const getTextColor = (item) => {
    // Check if the item is active, set the text color to 'white', otherwise 'black'
    return activeItem === item ? 'white' : 'white';
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    // Function to handle scrolling and adding/removing the 'sticky' class
    const handleScroll = () => {
      const navbar = document.getElementById("navbar-default");
      const offset = window.scrollY;

      // if (offset > 50) {
      //   navbar.classList.add("sticky");
      // } else {
      //   navbar.classList.remove("sticky");
      // }
    };

    // Add scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove scroll event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      id="navbar-default"
      className=" text-white bg-zinc-900 dark:text-white border-gray-200"
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center" >
          <img
            src="https://i.ibb.co/cQ74yqz/logo-white.png"
            className="h-8 mr-3"
            alt="TedxWCE Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            {" "}
          </span>
        </Link>
        <button
          onClick={toggleMobileMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMobileMenuOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="w-auto flex flex-wrap max-w-max space-x-4 gap-x-4 mx-auto py-4 justify-items-end">
           <li
          style={{ backgroundColor: getBackgroundColor('home'), color: getTextColor('home') }}
          onClick={() => handleItemClick('home')}
          className="rounded p-2"
           >
          <NavLink to="/">Home</NavLink>
        </li>

        <li
          style={{ backgroundColor: getBackgroundColor('registration'), color: getTextColor('registration') }}
          onClick={() => handleItemClick('registration')}
          className="rounded p-2"
        >
          <NavLink to="/registration">Register</NavLink>
        </li>
            
         <li
          style={{ backgroundColor: getBackgroundColor('teaminfo'), color: getTextColor('teaminfo') }}
          onClick={() => handleItemClick('teaminfo')}
          className="rounded p-2"
        >
          <NavLink to="/team">Team</NavLink>
        </li>

         <li
          style={{ backgroundColor: getBackgroundColor('speakerinfo'), color: getTextColor('speakerinfo') }}
          onClick={() => handleItemClick('speakerinfo')}
          className="rounded p-2"
        >
          <NavLink to="/speaker">Speakers</NavLink>
        </li>     


          
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
