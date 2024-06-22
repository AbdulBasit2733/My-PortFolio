import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const [menuLinks, setMenuLinks] = useState([
    {
      id: 1,
      title: "Experience",
      link: "/experience",
    },
    {
      id: 2,
      title: "Projects",
      link: "/projects",
    },
    {
      id: 3,
      title: "Skills",
      link: "/skills",
    },
    {
      id: 4,
      title: "About",
      link: "/about",
    },
  ]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="header fixed top-0 shadow-lg h-16 bg-white flex justify-between items-center w-full md:px-10">
      <Link
        to={"/"}
        id="nav-links"
        className="text-2xl font-bold px-10 md:px-0"
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
              className="font-semibold hover:text-orange-500"
              onClick={toggleNavbar}
            >
              {link.title}
            </Link>
          ))}
        </div>
      )}
      <div className="text-lg top-[4rem] items-center space-x-5 hidden md:block px-10">
        {menuLinks.map((link) => (
          <Link
            id="nav-links"
            key={link.id}
            to={link.link}
            onClick={toggleNavbar}
            className="font-semibold hover:text-orange-500"
          >
            {link.title}
          </Link>
        ))}
      </div>
      <div className="hidden md:block">
        <Link
          id="nav-links"
          to="https://drive.google.com/file/d/1GIVgHFIaannmVA6WFwroRoghb3mKMq0o/view?usp=sharing"
          className="bg-orange-500 text-white rounded-xl px-3 py-2 font-semibold hover:bg-white shadow-lg hover:text-black duration-500 transition-all ease-in"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hire Me
        </Link>
      </div>
      <div className="px-10 md:hidden">
        <i className="bx bx-menu bx-md" onClick={toggleNavbar}></i>
      </div>
    </div>
  );
};

export default Navbar;
