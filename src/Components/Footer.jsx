import { Link } from "react-scroll";
const Footer = () => {
  return (
    <div className="h-20 bottom-0">
      <div className="py-5 flex justify-between items-center sm:px-20 md:px-10 lg:px-44 px-8 text-sm">
        <div>
          <p className="flex space-x-5 items-center">
            <p id="footer" className="font-bold text-orange-500">
              <span>©</span>
              2024
              <span className="md:ml-2 ml-1">Abdul Basit Khan </span>
            </p>

            <span className="font-semibold">All Rights Reserved</span>
          </p>
        </div>
        <div className="flex items-center md:space-x-5 space-x-2">
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-150}
            duration={1000}
            className="font-semibold hover:text-orange-500 hover:underline"
          >
            Skills
          </Link>
          <Link
            to="experience"
            spy={true}
            smooth={true}
            offset={-150}
            duration={1000}
            className="font-semibold hover:text-orange-500 hover:underline cursor-pointer"
          >
            Experience
          </Link>
          <a
            id="nav-links"
            to="contact"
            href="mailto:abdulbasitkhan2733@gmail.com"
            className="font-semibold text-white px-5 py-2 rounded-md hover:text-black bg-orange-500 cursor-pointer"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
