import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="pt-20 h-[91vh]">
      <h1 className="text-3xl md:text-4xl font-bold text-center">Projects</h1>
      <div className="my-10 md:flex md:flex-row md:space-y-0 md:space-x-10 flex-col justify-center space-y-20 items-center px-10">
        <div className="shadow-xl w-[20rem] text-justify rounded-lg">
          <Link to={"https://insta-clone-abdulbasit.vercel.app/"}>
            <img src="/instagram.png" alt="instagram-clone" className="my-2" />
            <hr />
            <div className="px-5 py-2">
              <h1 className="text-xl font-semibold">InstaGram Clone</h1>
              <div className="flex justify-evenly my-5">
                <i className="bx bxl-react bx-border-circle bg-orange-500 bx-sm text-white"></i>
                <i className="bx bxl-html5 bx-border-circle bg-orange-500 bx-sm text-white"></i>
                <i className="bx bxl-css3 bx-border-circle bg-orange-500 bx-sm text-white"></i>
                <i className="bx bxl-javascript bx-border-circle bg-orange-500 bx-sm text-white"></i>
                <i className="bx bxl-firebase bx-border-circle bg-orange-500 bx-sm text-white"></i>
              </div>
            </div>
          </Link>
        </div>
        <div className="shadow-xl w-[20rem] text-justify rounded-lg">
          <Link to={""}>
            <img src="/homelyhub.png" alt="Homely Hub" className="my-2" />
            <hr />
            <div className="px-5 py-2">
              <h1 className="text-xl font-semibold">HomelyHub</h1>
              <div className="flex justify-evenly my-5">
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
