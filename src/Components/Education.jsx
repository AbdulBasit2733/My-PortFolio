import React from "react";

const Education = () => {
  return (
    <div className=" max-w-full bg-gradient-to-r from-gray-700 via-gray-900 to-black h-screen p-0">
      <h1 className=" text-4xl mb-5 text-center text-white font-extrabold">
        Education
      </h1>
      <div className=" shadow-md shadow-white w-fit h-fit mx-auto py-5 sm:gird justify-center items-center">
        <div className=" p-10">
          <div className=" overflow-hidden">
            <img
              className=" hover:scale-125 duration-700"
              src="https://cidco.mit.asia/extra-images/FINAL-min.png"
              alt="College Logo"
            />
          </div>
          <div className=" text-white px-5 font-bold">
            <h2 className=" mb-2 md:text-xl sm:text-xl">
              Marathwada Institute Of technology Aurangabad
            </h2>
            <p className=" text-base font-semibold">
              B-Tech Electrical Engineering{" "}
            </p>
            <p className=" text-base font-semibold">July 2021-Present</p>
            <p className=" text-base font-semibold">CGPA : 7.52</p>
          </div>
          <div className=" mt-10">
            <div className=" overflow-hidden">
              <img
              width="20%"
                className=" hover:scale-125 duration-700 ml-6"
                src="https://gpabad.ac.in/wp-content/uploads/2021/01/logo-1.png"
                alt="College Logo"
              />
            </div>
            <div className=" text-white px-5 font-bold">
              <h2 className=" mb-2 md:text-xl sm:text-xl">
                Government Polytechnic Aurangabad
              </h2>
              <p className=" text-base font-semibold">
                Diploma Electrical Engineering{" "}
              </p>
              <p className=" text-base font-semibold">July 2018-2021</p>
              <p className=" text-base font-semibold">Percentage : 86.4</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
