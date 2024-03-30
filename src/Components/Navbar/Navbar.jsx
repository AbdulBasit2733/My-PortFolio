import { useState } from "react";

const Navbar = () => {
  const [brandName, setBrandName] = useState("Abdul Basit");
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
      title: "Services",
      link: "/services",
    },
    {
      id: 4,
      title: "My Expertise",
      link: "/myexpertise",
    },
    {
      id: 5,
      title: "Projects",
      link: "/projects",
    },
    // {
    //   id: 1,
    //   title: "Blogs",
    //   link: "/blogs",
    // },
    // {
    //   id: 1,
    //   title: "Education",
    //   link: "/education",
    // },
    {
      id: 5,
      title: "Contact",
      link: "/contact",
    },
  ]);
  return (
    <div className="main bg-gray-200 h-20 flex justify-between items-center px-[8.6rem]">
      <div>
        {/* Brand Logo */}
        <h1 className="text-2xl text-orange-500 font-bold">{brandName}</h1>
      </div>
      <div className="flex space-x-6 text-sm font-semibold">
        {/* Nav as */}
        {menuLinks.map((link) => (
          <a key={link.id} href={link.link} className="hover:text-orange-500">
            {link.title}
          </a>
        ))}
      </div>
      <div>
        {/* button */}
        <button className="px-4 py-2 bg-orange-500 hover:bg-white shadow-lg rounded-full font-medium text-sm">
          Hire Me
        </button>
      </div>
    </div>
  );
};

export default Navbar;
