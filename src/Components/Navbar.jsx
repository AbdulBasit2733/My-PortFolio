import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const menuLinks = [
    { id: 1, title: "Skills", link: "skills" },
    { id: 2, title: "Experience", link: "experience" },
    { id: 3, title: "Projects", link: "projects" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex fixed shadow-sm w-full sm:justify-start justify-between bg-white items-center py-2 sm:px-10 sm:py-5">
      <Link
        to="home"
        spy={true}
        smooth={true}
        offset={-150}
        duration={1000}
        className="text-3xl font-extrabold tracking-wider px-10 md:px-0 cursor-pointer"
      >
        Ak
      </Link>
      {isOpen && (
        <div
          className={`text-2xl bg-white absolute w-[20rem] left-5 top-[5rem] mx-auto flex flex-col justify-center items-center h-[20rem] gap-y-10 transition-all ease-in-out duration-1000 transform md:hidden ${
            isOpen
              ? "translate-x-0 opacity-100" // Visible state
              : "-translate-x-[200%] opacity-0" // Hidden state with slide up
          }`}
        >
          {menuLinks.map((link) => (
            <Link
              id="nav-links"
              key={link.id}
              to={link.link}
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
              className="font-semibold hover:text-orange-500 cursor-pointer"
              onClick={toggleNavbar}
            >
              {link.title}
            </Link>
          ))}
        </div>
      )}
      <div className="text-lg items-center hidden md:block">
        {menuLinks.map((link) => (
          <Link
            id="nav-links"
            key={link.id}
            to={link.link}
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            className="font-semibold px-6 hover:text-orange-500 text-sm transition-all duration-500 ease-in-out cursor-pointer"
          >
            {link.title}
          </Link>
        ))}
      </div>
      <div className="mr-24 md:hidden">
        <i className="bx bx-menu bx-md" onClick={toggleNavbar}></i>
      </div>
    </div>
  );
};

export default Navbar;
