import React, { useState, useEffect, useRef } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { RiCloseLine } from "react-icons/ri";
import { AiOutlineHome, AiOutlineInfo } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const dropdownRef = useRef(null);

  const handleClick = () => {
    setNav(!nav);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setNav(true);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="fixed flex items-center w-full h-20 text-white xl:hidden">
        <div className="flex items-center justify-between w-full px-6 mx-auto max-w-7xl">
          <h1 className="text-2xl font-semibold">MusYan</h1>
          <div className="relative" ref={dropdownRef}>
            {nav ? (
              <BiMenuAltRight
                size={45}
                onClick={handleClick}
                className="cursor-pointer"
              />
            ) : (
              <div>
                <RiCloseLine
                  size={45}
                  onClick={handleClick}
                  className="cursor-pointer"
                />
                <div className="absolute flex flex-col border rounded-lg bg-primary right-4 w-44 top-14">
                  <Link
                    activeClass="active"
                    to="hero"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="px-4 py-4 transition-all duration-500 hover:bg-violet-600"
                  >
                    Home
                  </Link>
                  <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="px-4 py-4 transition-all duration-500 hover:bg-violet-600"
                  >
                    About
                  </Link>
                  <Link
                    activeClass="active"
                    to="project"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="px-4 py-4 transition-all duration-500 hover:bg-violet-600"
                  >
                    Portofolio
                  </Link>
                  <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="px-4 py-4 transition-all duration-500 hover:bg-violet-600"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
      <nav className="fixed flex-col items-center justify-center hidden min-h-screen gap-12 pl-6 xl:flex">
        <Link
          activeClass="active"
          to="hero"
          spy={true}
          smooth={true}
          duration={500}
          className="flex items-center justify-center w-16 h-16 transition-all duration-300 rounded-full bg-secondary hover:bg-violet-700 hover:text-white hover:scale-125"
        >
          <AiOutlineHome size={35} />
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          className="flex items-center justify-center w-16 h-16 transition-all duration-300 rounded-full hover:scale-125 bg-secondary hover:bg-violet-700 hover:text-white"
        >
          <AiOutlineInfo size={35} />
        </Link>
        <Link
          activeClass="active"
          to="project"
          spy={true}
          smooth={true}
          duration={500}
          className="flex items-center justify-center w-16 h-16 transition-all duration-300 rounded-full bg-secondary hover:scale-125 hover:bg-violet-700 hover:text-white"
        >
          <CgWebsite size={35} />
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          className="flex items-center justify-center w-16 h-16 transition-all duration-300 rounded-full bg-secondary hover:bg-violet-700 hover:text-white hover:scale-125"
        >
          <MdOutlineConnectWithoutContact size={35} />
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
