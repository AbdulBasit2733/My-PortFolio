import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

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
    <section className="min-h-screen sm:flex md:flex-row flex flex-col justify-between items-center md:my-0 my-10 md:px-20">
      <div id="text-container" className="md:w-6/12 sm:p-20 p-10">
        <div className=" flex justify-start items-center mb-5">
          <h3 className="text-3xl mr-2 font-bold text-orange-500">Hello !</h3>
          <img src="/wave.gif" className="text-orange-500" width={30} />
        </div>
        <div className="flex flex-col justify-evenly">
          <h1 className="text-6xl mb-5 font-semibold sm:w-[40rem]">
            My Name Is{" "}
            <span className="text-orange-500 font-bold">Abdul Basit Khan</span>
          </h1>
          <h3 className="text-3xl font-semibold mb-10">
            Frontend Developer | React.js Enthusiast
          </h3>
          <p className="text-xl text-justify">
            Welcome to my portfolio! I am a dedicated frontend developer with a
            passion for creating engaging and responsive web applications. With
            a strong foundation in technologies like React.js, HTML, CSS,and
            JavaScript, I strive to deliver intuitive user experiences that
            leave a lasting impact.
          </p>
          <div className="flex justify-start gap-10 items-center text-orange-500 sm:mt-5 mt-3">
            {links.map((link, id) => (
              <Link to={link.link} key={id}>
                <i
                  className={`bx bx-sm bx-border-circle ${link.icon} bg-white hover:bg-orange-500 hover:text-white transition-all ease-in-out duration-400`}
                ></i>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <img
        src="./3.jpg"
        alt=""
        className="sm:w-[28rem] min-w-[20rem] w-[25rem] rounded-full transition-all ease-in-out duration-500 md:hover:scale-105"
      />
    </section>
  );
};

export default Home;
