import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const links = [
    {
      link: "https://www.linkedin.com/in/abdul-basit-khan-2b6a3318b/",
      icon: "bxl-linkedin",
    },
    {
      link: "https://github.com/AbdulBasit2733",
      icon: "bxl-github",
    },
    {
      link: "mailto:abdulbasitkhan2733@gmail.com",
      icon: "bxl-gmail",
    },
  ];

  return (
    <>
      <div className="main-container md:flex mt-32">
        <div className="w-full flex items-center justify-center">
          <div className="md:w-2/3 ms-11">
            <div className="flex">
              <h3 className="text-xl font-semibold uppercase">hello !</h3>
              <img src="/wave.gif" className="text-orange-500" width={30} />
            </div>

            <h1 className="text-5xl text-orange-500 mt-4 font-bold">
              I Am Abdul Basit Khan
            </h1>
            <h2 className="text-3xl mt-4 font-semibold">
              Frontend Developer | React.js Enthusiast
            </h2>
            <p className="mt-4">
              Welcome to my portfolio! I am a dedicated frontend developer with
              a passion for creating engaging and responsive web applications.
              With a strong foundation in technologies like React.js, HTML, CSS,
              and JavaScript, I strive to deliver intuitive user experiences
              that leave a lasting impact.
            </p>
            <ul className="icons-container space-x-8 my-5">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.link}
                  className={`bx ${link.icon} bx-sm bx-border-circle bg-orange-500 text-white hover:bg-white hover:text-orange-500 duration-500 transition-all ease-in`}
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              ))}
            </ul>
            <br />
            <Link
              to="/contact"
              className=" text-white px-3 py-2 mt-5 rounded-xl shadow-xl bg-orange-500 font-semibold hover:bg-white hover:text-black duration-500 transition-all ease-in"
            >
              Contact Me
            </Link>
          </div>
        </div>
        {/* Image Section */}
        <div className="w-full flex justify-center mt-4">
          <img
            src="/3.jpg"
            alt="Profile"
            className="rounded-full shadow-xl w-2/3 sm:w-1/2 sm:h-fit md:w-4/5 lg:w-2/4"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
