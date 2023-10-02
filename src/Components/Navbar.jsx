
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    
    <nav className=" md:w-full bg-gradient-to-r from-gray-700 via-gray-900 to-black md:shadow-md md:shadow-slate-400 flex justify-between items-center px-4 md:px-4 md:py-5 ">
      <div className=" text-2xl font-bold text-white">Abdul Basit</div>
      <ul className=" sm:flex font-semibold justify-center my-[10px]">
        <Link className=" mx-[10px] mb-[10px] cursor-pointer text-white" to="/">
          Home
        </Link>
        <Link
          className=" mx-[10px] mb-[10px] cursor-pointer text-white"
          to="/about"
        >
          About
        </Link>
        <Link
          className=" mx-[10px] mb-[10px] cursor-pointer text-white"
          to="/projects"
        >
          Projects
        </Link>
        {/* <Link
          className=" mx-[10px] mb-[10px] cursor-pointer text-white"
          to="/opensource"
        >
          Open Source
        </Link> */}
        <Link
          className=" mx-[10px] mb-[10px] cursor-pointer text-white"
          to="/education"
        >
          Education
        </Link>
        <Link
          className=" mx-[10px] mb-[10px] cursor-pointer text-white"
          to="/contactme"
        >
          Contact Me
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
