import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const [menuLinks, setMenuLinks] = useState([
    {
      id: 1,
      title: "Home",
      link: "/",
    },

    {
      id: 2,
      title: "About",
      link: "/about",
    },

    {
      id: 3,
      title: "Skills",
      link: "/skills",
    },
    {
      id: 4,
      title: "Projects",
      link: "/projects",
    },

    {
      id: 5,
      title: "Contact",
      link: "/contact",
    },
  ]);
  const [brand, setBrand] = useState("AK");
  const [isOpen, setIsOpen] = useState(false);
  // const navigate = useNavigate();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="header fixed top-0 shadow-lg h-16 bg-white flex justify-between items-center w-full md:px-10">
      <h1 className="text-2xl font-bold px-10 md:px-0">{brand}</h1>
      {isOpen && (
        <div className="text-2xl bg-white absolute top-[4rem] w-full flex flex-col items-center space-y-10 py-10 h-fit sm:hidden  transition-all ease-in duration-200">
          {menuLinks.map((link) => (
            <Link
              key={link.id}
              to={link.link}
              className="font-semibold hover:text-orange-500"
            >
              {link.title}
            </Link>
          ))}
        </div>
      )}
      <div className="text-sm top-[4rem] items-center space-x-5 hidden md:block px-10">
        {menuLinks.map((link) => (
          <Link
            key={link.id}
            to={link.link}
            className="font-semibold hover:text-orange-500"
          >
            {link.title}
          </Link>
        ))}
      </div>
      <div className="hidden md:block">
        <a
          href="https://drive.google.com/file/d/188-WB2dcYF2LiKuS7hBFPl9wGWGACbGB/view?usp=drive_link"
          className="bg-orange-500 text-white rounded-xl px-3 py-2 font-semibold hover:bg-white shadow-lg hover:text-black duration-500 transition-all ease-in"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hire Me
        </a>
      </div>
      <div className="px-10 md:hidden">
        <i className="bx bx-menu bx-md" onClick={toggleNavbar}></i>
      </div>
    </div>
  );
};

export default Navbar;
