import React from "react";

const About = () => {
  return (
    <div className=" md:min-h-screen grid md:grid-cols-2 sm:grid-cols-1 gap-5 sm:min-h-fit bg-gradient-to-r from-gray-700 via-gray-900 to-black px-20 py-10 place-content-center justify-center items-center">
      <div className=" md:w-80 md:h-fit place-items-center shadow-2xl rounded mb-10 justify-center items-center mx-auto ">
        <div className=" overflow-hidden rounded-full border-8 border-purple-600">
          <img src="./public/MyImage.jpg" alt="MyImage" className=" hover:scale-125 duration-700  cursor-zoom-in" />
        </div>
        <div className="px-6 py-10 text-white font-semibold">
          <h3>MySelf Abdul Basit Khan</h3>
          <p>I am an OpenSource Lover</p>
        </div>
      </div>
      <div className=" md:max-w-full md:h-80 place-items-center shadow-md shadow-white rounded justify-center items-center text-white mx-auto p-10 ">
        <h3 className=" text-4xl font-bold">What I do</h3>
        <ul className=" text-base list-none py-5 text-yellow-500">
          <li className=" mb-3">Open Source Lover</li>
          <li className=" mb-3">Front End Developement</li>
          <li className="">javascript >>>>>>> Python</li>
        </ul>
          <div className=" grid grid-cols-6 justify-items-center h-fit mb-10 ">
              <a>
                  <img className="hover:opacity-40" width="60%" src="./reacticon.png" alt="React Js" />
              </a>
              <a>
                  <img className="hover:opacity-40" width="60%"  src="./Nextjs.png" alt="Next Js" />
              </a>
              <a className="mr-4">
                  <img className="hover:opacity-40" width="60%" src="./redux.png" alt="Redux Toolkit" />
              </a>
              <a className="mr-4">
                  <img className="hover:opacity-40" width="60%" src="./TypeScript.png" alt="TypeSript" />
              </a>
              <a >
                  <img className="hover:opacity-40" width="60%" src="./tailwind.png" alt="Tailwind Css" />
              </a>
              <a >
                  <img className="hover:opacity-40" width="60%" src="./Node.png" alt="Tailwind Css" />
              </a>
              <a >
                  <img className="hover:opacity-40" width="60%" src="./javascript.png" alt="Tailwind Css" />
              </a>
          </div>
      </div>

    </div>
  );
};

export default About;
