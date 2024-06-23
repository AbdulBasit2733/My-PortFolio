import React from "react";

const Experience = () => {
  return (
    <section className="mt-16 p-10 bg-slate-100 min-h-screen">
      <h1 className="text-center text-4xl font-semibold">Experience</h1>
      <div className="mt-10 sm:flex-row flex flex-col justify-center items-center">
        <div className="bg-white w-[20rem] max-h-[20rem] min-h-[20rem] rounded-lg p-10 transition-all ease-in-out hover:scale-110 duration-500">
          <img
            src="https://www.sprhava.com/static/media/Logo.f6bdcabff2c2c9091761.png"
            className="mx-auto h-[105px]"
          />
          <br />
          <div className="text-center mt-3">
            <h1 className=" font-bold text-orange-500 text-lg">
              Junior Web Developer
            </h1>
            <p className="text-slate-500">Internship</p>
            <p className="mt-5">
              <span className="font-semibold">Duration: </span>5<sup>th</sup>{" "}
              Jun - Present
            </p>
          </div>
        </div>
        <i className="bx bx-chevrons-left text-4xl sm:mx-10 hidden sm:block"></i>
        <i className="bx bx-chevrons-up my-5 sm:hidden text-6xl"></i>
        <div className="bg-white w-[20rem] max-h-[20rem] min-h-[20rem] rounded-lg p-10 transition-all ease-in-out hover:scale-110 duration-500">
          <img
            src="https://www.zummitlabs.com/assets/img/zlogo.png"
            className="mx-auto h-[105px]"
          />
          <br />

          <div className="text-center mt-3">
            <h1 className=" font-bold text-orange-500 text-lg">
              Junior Web Developer
            </h1>
            <p className="text-slate-500">Internship</p>
            <p className="mt-5">
              <span className="font-semibold">Duration: </span>
              20<sup>th</sup> May - Present
            </p>
          </div>
        </div>
        <i className="bx bx-chevrons-left text-4xl sm:mx-10 hidden sm:block"></i>
        <i className="bx bx-chevrons-up my-5 sm:hidden text-6xl"></i>
        <div className="bg-white w-[20rem] max-h-[20rem] min-h-[20rem] rounded-lg p-10 transition-all ease-in-out hover:scale-110 duration-500">
          <img
            src="https://www.ituxsolutions.com/assets/images/logo-itux.png"
            className="mx-auto h-[105px]"
          />
          <br />

          <div className="text-center mt-3">
            <h1 className=" font-bold text-orange-500 text-lg">
              Front-End Developer
            </h1>
            <p className="text-slate-500">Internship</p>
            <p className="mt-5">
              <span className="font-semibold">Duration: </span>
              21<sup>st</sup> Jan - 3 <sup>rd</sup> May
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
