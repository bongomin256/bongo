import { NavLink } from "react-router-dom";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Button, Button1, Button2 } from "../constants/btn/Button";
import { useState } from "react";
import Logo from "../logo/Logo";

// import { Link } from "react-scroll";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  let links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header className="sticky top-0 z-20 w-full px-5 py-8 mb-20 transition-all duration-300 ease-in-out bg-bg-main md:px-12 lg:px-20">
        <nav className="flex items-center justify-between w-full cursor-pointer ">
          <h1 className="text-3xl font-bold text-gray-main">
            <NavLink to="/">
              <span className="text-pink-main">Godfrey</span> Bongomin
            </NavLink>
          </h1>
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl lg:hidden text-gray-main"
          >
            {open ? <AiOutlineClose /> : <BiMenuAltRight />}
          </div>

          <ul
            className={`float-right flex gap-5 text-gray-main flex-col lg:flex-row lg:items-center lg:gap-5 lg:relative h-screen  fixed w-full lg:h-0 lg:w-fit top-20 lg:top-0  ${
              open ? "block" : "hidden"
            }left-0 transition-all duration-500 lg:transition-none pl-5 pt-10 md:pl-12  lg:pl-0 lg:pt-0 text-2xl bg-[#31353E] ${
              open
                ? "right-0 block "
                : "right-[-750px] md:right-[-1020px] lg:right-0 "
            }`}
            onClick={() => setOpen(false)}
          >
            {links.map((link) => (
              <li
                key={link.name}
                // className="hover:text-white hover:transition-all hover:ease-in-out hover:duration-300"
                className={({ isActive }) => {
                  return (
                    //! TO-DO: Fix the active state og the navbar
                    "hover:text-white hover:transition-all hover:ease-in-out hover:duration-300" +
                    (isActive ? "text-white" : "text-gray-main")
                  );
                }}
              >
                <NavLink to={link.path}>{link.name}</NavLink>
              </li>
            ))}

            <div>
              <Button>Resume</Button>
            </div>
            <Logo />
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
