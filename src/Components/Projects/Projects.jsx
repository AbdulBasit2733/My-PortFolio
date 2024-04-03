import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="pt-24">
      <h1 className="text-3xl md:text-4xl font-bold text-center">Projects</h1>
      <div className="my-10 md:flex md:flex-row md:space-y-0 md:space-x-10 flex-col justify-center space-y-20 items-center px-10">
        <div className="shadow-xl sm:w-[25rem] sm:h-[33rem]  text-justify">
          <Link to={"https://insta-clone-abdulbasit.vercel.app/"}>
            <img
              src="/instagram.png"
              alt="instagram-clone"
              className="w-full md:h-[14rem]"
            />
            <div className="px-5 sm:pt-10 py-5">
              <h1 className="text-xl font-semibold">InstaGram Clone</h1>
              <p className="text-sm sm:my-4 my-6">
                The Instagram Clone is a full-stack web application developed to
                mimic the functionalities of the popular social media platform.
                Built using React.js for the frontend, Zustand for state
                management, Firebase for backend services, and Chakra UI for the
                user interface, this project demonstrates real-time data
                synchronization, user authentication, and efficient state
                management.
              </p>
              <div className="flex justify-evenly">
                <i className="bx bxl-react bx-border-circle bg-orange-500 bx-sm text-white"></i>
                <i className="bx bxl-html5 bx-border-circle bg-orange-500 bx-sm text-white"></i>
                <i className="bx bxl-css3 bx-border-circle bg-orange-500 bx-sm text-white"></i>
                <i className="bx bxl-javascript bx-border-circle bg-orange-500 bx-sm text-white"></i>
                <i className="bx bxl-firebase bx-border-circle bg-orange-500 bx-sm text-white"></i>
              </div>
            </div>
          </Link>
        </div>
        <div className="shadow-xl sm:w-[25rem] sm:h-[33rem] text-justify">
          <Link to={""}>
            <img
              src="/homelyhub.png"
              alt="Homely Hub"
              className="w-full md:h-[14rem] "
            />
            <div className="px-5 sm:pt-10 py-5">
              <h1 className="text-xl font-semibold">HomelyHub</h1>
              <p className="text-sm sm:my-4 my-6">
                Homely Hub is a comprehensive MERN (MongoDB, Express.js,
                React.js, Node.js) stack application designed to simplify the
                process of finding and booking guest houses and flats for
                short-term stays. This project offers a user-friendly platform
                where users can browse listings, view property details, make
                bookings, and manage their reservations.
              </p>

              <div className="flex justify-evenly">
                <i className="bx bxl-react bx-border-circle bg-orange-500 bx-sm text-white"></i>
                <i className="bx bxl-html5 bx-border-circle bg-orange-500 bx-sm text-white"></i>
                <i className="bx bxl-javascript bx-border-circle bg-orange-500 bx-sm text-white"></i>
                <i className="bx bxl-redux bx-border-circle bg-orange-500 bx-sm text-white"></i>
                <i className="bx bxl-bootstrap bx-border-circle bg-orange-500 bx-sm text-white"></i>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
