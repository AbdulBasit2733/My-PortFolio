import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>

    
    <div className=" py-5 bg-gray-100 flex justify-between items-center sm:px-20 md:px-10 lg:px-44 px-8 text-sm">
      <div>
        <p className="flex space-x-5 items-center">
          <p className="font-bold text-orange-500">
            <span>©</span>
            2024
            <span className="md:ml-2 ml-1">Abdul Basit Khan </span>
          </p>

          <span className="font-semibold">All Rights Reserved</span>
        </p>
      </div>
      <div className="flex md:space-x-5 space-x-2">
        <Link
          href="/about"
          className="font-semibold hover:text-orange-500 hover:underline"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="font-semibold hover:text-orange-500 hover:underline"
        >
          Contact
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Footer;
