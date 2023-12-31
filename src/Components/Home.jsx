import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

// A functional component for a single skill icon

const Home = () => {
  const birthYear = 2003;
  const [age, setAge] = useState(0);

  const calculateAge = () => {
    let Today = new Date().getFullYear();
    let ageinYear = 0;
    while (Today >= birthYear) {
      Today--;
      ageinYear++;
    }
    setAge(ageinYear);
  };

  return (
    <>
      <div className=" max-w-full bg-gradient-to-r from-gray-700 via-gray-900 to-black h-screen">
        <div className="mx-28 pt-20 max-w-full">
          <div className=" block text-white">
            <h1 className=" text-yellow-400 text-4xl md:text-6xl font-extrabold mb-6 md:mb-10 w-fit">
              Hi! I'm Abdul Basit
            </h1>
            <p className="text-lg md:text-3xl font-semibold">
              React Developer | Aspiring Programmer
            </p>
            <div className="skills justify-center items-center mt-8 md:mt-10">
              <ul className="flex">
                <li className="w-10 h-5 mr-6">
                  <img
                    className="hover:opacity-40"
                    src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                    alt="Skill Icon"
                  />
                </li>
                <li className="w-10 h-5 mr-6">
                  <img
                    className="hover:opacity-40"
                    src="https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-512.png"
                    alt="Skill Icon"
                  />
                </li>
                <li className="w-10 h-5 mr-6">
                  <img
                    className="hover:opacity-40"
                    src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/233_Node_Js_logo-512.png"
                    alt="Skill Icon"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className=" mt-10 ml-28
         flex justify-start items-center"
        >
          <button
            className=" text-white font-bold rounded-md bg-indigo-600 px-4 py-2"
            onClick={calculateAge}
          >
            Age
          </button>
          {age > 0 && (
            <p className=" text-white px-2 text-lg font-semibold">Age: {age}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
