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
    <div className="fixed bg-white shadow-sm border-b top-0 h-16 flex justify-between items-center w-full md:px-10">
      <Link
        to="home"
        spy={true}
        smooth={true}
        offset={-150}
        duration={1000}
        className="text-2xl font-bold px-10 md:px-0 cursor-pointer"
      >
        Ak
      </Link>
      {isOpen && (
        <div
          className={`text-2xl bg-white absolute top-[2rem] w-full flex flex-col items-center space-y-10 py-10 h-[30rem] sm:hidden ${
            isOpen
              ? "transition-all ease-in-out duration-700 translate-y-8"
              : "translate-y-0"
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
      <div className="text-lg top-[4rem] items-center space-x-5 hidden md:block px-5">
        {menuLinks.map((link) => (
          <Link
            id="nav-links"
            key={link.id}
            to={link.link}
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            className="font-semibold hover:text-orange-500 cursor-pointer">
            {link.title}
          </Link>
        ))}
      </div>
      <div className="px-10 md:hidden">
        <i className="bx bx-menu bx-md" onClick={toggleNavbar}></i>
      </div>
    </div>
  );
};

export default Navbar;
