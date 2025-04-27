import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // ⭐ use NavLink instead of Link

function Header() {
  // State to toggle mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="flex justify-between items-center sticky top-0 z-50 bg-white shadow-[0px_1px_7px_#0A0F2C] h-[90px]">
      {/* Logo Section */}
      <h1 className="font-italiana text-[#D72638] text-3xl pl-[100px] py-[30px] tracking-[1px]">
        Arvind H S
      </h1>

      {/* Navigation Menu */}
      <div className="hidden md:flex">
        <ul className="font-hanuman flex text-[#0A0F2C] text-sm py-[40px] pr-[100px] gap-[30px] tracking-wider">
          {/* Home Link */}
          <li>
            <NavLink
              to="/"
              className={
                ({ isActive }) =>
                  isActive
                    ? "font-bold text-[#D72638]" // 🔥 active style
                    : "font-light hover:font-bold hover:underline hover:text-[#D72638]" // normal hover style
              }
            >
              Home
            </NavLink>
          </li>

          {/* Projects Link */}
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-[#D72638]"
                  : "font-light hover:font-bold hover:underline hover:text-[#D72638]"
              }
            >
              Projects
            </NavLink>
          </li>

          {/* About Link */}
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-[#D72638]"
                  : "font-light hover:font-bold hover:underline hover:text-[#D72638]"
              }
            >
              About Me
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden flex items-center pr-[30px]">
        <button onClick={toggleMenu} className="text-[#0A0F2C]">
          {/* Hamburger Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden absolute top-24 left-0 w-full bg-white shadow-lg`}
      >
        <ul className="font-hanuman text-[#0A0F2C] text-lg py-4 px-8 space-y-4 tracking-wider">
          {/* Home Link */}
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-[#D72638]"
                  : "font-light hover:font-bold hover:underline hover:text-[#D72638]"
              }
              onClick={toggleMenu} // Close the menu on link click
            >
              Home
            </NavLink>
          </li>

          {/* Projects Link */}
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-[#D72638]"
                  : "font-light hover:font-bold hover:underline hover:text-[#D72638]"
              }
              onClick={toggleMenu} // Close the menu on link click
            >
              Projects
            </NavLink>
          </li>

          {/* About Link */}
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-[#D72638]"
                  : "font-light hover:font-bold hover:underline hover:text-[#D72638]"
              }
              onClick={toggleMenu} // Close the menu on link click
            >
              About Me
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
