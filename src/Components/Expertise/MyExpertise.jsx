import { useState } from "react";

const MyExpertise = () => {
  // const [skills,setSkills] = useState({

  // })
  return (
    <div className="">
      <h1 className=" mb-16 text-3xl font-bold text-center mt-10">My Expertise</h1>
      <div className="box-container flex items-center  py-16">
        <div className="flex justify-center w-fit px-14">
          <div className="text-center space-y-4">
            {/* Text Section */}
            <h1 className="text-4xl font-semibold">
              I Love These Technologies
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            {/* This Button Should Download The CV */}
            <button className="px-3 py-2 mt-5 rounded-xl shadow-lg shadow-orange-300 bg-orange-500 font-semibold text-white hover:bg-white hover:text-black hover:border hover:border-orange-200">
              Hire Me
            </button>
          </div>
        </div>
        <div className="flex justify-center  items-center gap-4 flex-wrap h-fit px-10 ">
          {/* Skills Section */}
          <p className="bg-slate-300 w-fit px-3 py-2 rounded-full hover:bg-orange-500 hover:text-white text-sm font-semibold cursor-pointer">
            HTML
          </p>
          <p className="bg-slate-300 w-fit px-3 py-2 rounded-full hover:bg-orange-500 hover:text-white text-sm font-semibold cursor-pointer">
            CSS
          </p>
          <p className="bg-slate-300 w-fit px-3 py-2 rounded-full hover:bg-orange-500 hover:text-white text-sm font-semibold cursor-pointer">
            Tailwind CSS
          </p>
          <p className="bg-slate-300 w-fit px-3 py-2 rounded-full hover:bg-orange-500 hover:text-white text-sm font-semibold cursor-pointer">
            JavaScript
          </p>
          <p className="bg-slate-300 w-fit px-3 py-2 rounded-full hover:bg-orange-500 hover:text-white text-sm font-semibold cursor-pointer">
            React Js
          </p>
          <p className="bg-slate-300 w-fit px-3 py-2 rounded-full hover:bg-orange-500 hover:text-white text-sm font-semibold cursor-pointer">
            Redux Toolkit
          </p>
          <p className="bg-slate-300 w-fit px-3 py-2 rounded-full hover:bg-orange-500 hover:text-white text-sm font-semibold cursor-pointer">
            Python
          </p>
          <p className="bg-slate-300 w-fit px-3 py-2 rounded-full hover:bg-orange-500 hover:text-white text-sm font-semibold cursor-pointer">
            SQL
          </p>
          <p className="bg-slate-300 w-fit px-3 py-2 rounded-full hover:bg-orange-500 hover:text-white text-sm font-semibold cursor-pointer">
            VSCode
          </p>
          <p className="bg-slate-300 w-fit px-3 py-2 rounded-full hover:bg-orange-500 hover:text-white text-sm font-semibold cursor-pointer">
            Git
          </p>
          <p className="bg-slate-300 w-fit px-3 py-2 rounded-full hover:bg-orange-500 hover:text-white text-sm font-semibold cursor-pointer">
            GitHub
          </p>
          <p className="bg-slate-300 w-fit px-3 py-2 rounded-full hover:bg-orange-500 hover:text-white text-sm font-semibold cursor-pointer">
            Microsoft Excel
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyExpertise;
