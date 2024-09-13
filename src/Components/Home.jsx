import { Link } from "react-router-dom";
import React from "../assets/icons/react.png";
import HTML from "../assets/icons/html.png";
import css from "../assets/icons/css.png";
import redux from "../assets/icons/redux.png";
import mongoDB from "../assets/icons/mongoDb.png";
import python from "../assets/icons/python.png";
import java from "../assets/icons/java.png";
import javascript from "../assets/icons/js.png";
import Tailwind from "../assets/icons/tailwind.png";
import express from "../assets/icons/express.png";
import node from "../assets/icons/node js.png";
import zummit from "../assets/icons/zummit.png";
import itux from "../assets/icons/itux.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Home = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500, // Animation duration (in milliseconds)
      // once: true,
      easing: "ease-in", // Animation only happens once
    });
  }, []);
  const projects = [
    {
      id: 1,
      name: "sprhava",
      image: "./sprhava.png",
      link: "https://www.sprhava.com/",
      animation:'fade-up-left',
      delay:'800',
      skills: [
        "bx bxl-react bx-border-circle ",
        "bx bxl-html5 bx-border-circle ",
        "bx bxl-css3 bx-border-circle ",
        "bx bxl-javascript bx-border-circle ",
      ],
    },
    {
      id: 2,
      name: "Instagram Clone",
      image: "/instagram.png",
      animation:'fade-up-left',
      delay:'1200',
      link: "https://insta-clone-abdulbasit.vercel.app/",
      skills: [
        "bx bxl-react bx-border-circle ",
        "bx bxl-html5 bx-border-circle ",
        "bx bxl-css3 bx-border-circle ",
        "bx bxl-javascript bx-border-circle ",
      ],
    },
    {
      id: 3,
      name: "HomelyHub",
      image: "./homelyhub.png",
      link: "https://youtu.be/iXNaXGNeZ6c?si=6LzcT_ekosS3KZ8H",
      animation:'fade-up-left',
      delay:'1600',
      skills: [
        "bx bxl-react bx-border-circle ",
        "bx bxl-html5 bx-border-circle ",
        "bx bxl-css3 bx-border-circle ",
        "bx bxl-javascript bx-border-circle ",
        "bx bxl-redux bx-border-circle ",
        "bx bxl-bootstrap bx-border-circle ",
      ],
    },
  ];
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

  const data = [
    {
      image: "/2.jpg",
      title: "FrontEnd Developer",
      desc1: `I am Abdul Basit Khan, a dedicated frontend developer based in Aurangabad, India. Currently pursuing my Bachelor of Technology (B.Tech) at MIT Aurangabad, I hold a strong academic record with a 7.23 CGPA. Prior to this, I completed my Diploma in Electrical Engineering from Government Polytechnic Aurangabad with an impressive 86.53%.`,
      desc2: `Driven by a passion for technology, I achieved notable success during my academic years, scoring 87.6% in the 10th Standard (SSC) examinations, including a remarkable 99 out of 100 in Mathematics.

    My journey into the world of frontend development began with a deep fascination for creating engaging and responsive web applications. This passion led me to master technologies like React.js, HTML, CSS, and JavaScript, enabling me to craft dynamic user interfaces and seamless user experiences.`,
      actionButton: {
        title: "Read More..",
        link: "/about/readmore",
      },
    },
  ];

  return (
    <section id="main" className="min-h-screen">
      <section
        id="home"
        className="sm:flex md:flex-row flex flex-col justify-center items-center h-screen md:px-20"
      >
        <div className="md:w-6/12 sm:p-20 p-10">
          <div className=" flex justify-start items-center mb-5">
            <h3
              data-aos="fade-right"
              className="text-3xl mr-2 font-bold text-orange-500"
            >
              Hello !
            </h3>
            <img src="/wave.gif" className="text-orange-500" width={30} />
          </div>
          <div className="flex flex-col justify-evenly">
            <h1
              data-aos="fade-right"
              data-aos-delay="1200"
              className="md:text-6xl text-4xl mb-5 font-semibold sm:w-[40rem]"
            >
              My Name Is{" "}
              <span className="text-orange-500 font-bold">
                Abdul Basit Khan
              </span>
            </h1>
            <h3
              data-aos="fade-right"
              data-aos-delay="1500"
              className="md:text-3xl text-xl font-semibold md:mb-10 mb-5 "
            >
              Frontend Developer | React.js Enthusiast
            </h3>
            <p
              data-aos="fade-right"
              data-aos-delay="1600"
              className="text-lg text-left"
            >
              Frontend developer passionate about creating responsive, engaging
              web apps using React, HTML, CSS, and JavaScript for impactful user
              experiences.
            </p>
            <div className="flex justify-start gap-10 items-center text-orange-500 sm:mt-5 mt-3">
              {links.map((link, id) => (
                <Link
                  data-aos="fade-up"
                  data-aos-delay="1700"
                  to={link.link}
                  key={id}
                >
                  <i
                    className={`bx bx-sm bx-border-circle ${link.icon} bg-white hover:bg-orange-500 hover:text-white transition-all ease-in-out duration-400`}
                  ></i>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section
        className="sm:w-2/3 md:h-[80vh] mx-auto rounded-md sm:px-10 px-2"
        id="skills"
      >
        <h1
          data-aos="fade-down"
          className="text-center text-4xl font-bold mt-5 mb-20"
        >
          SKILLS
        </h1>
        <div
          data-aos="fade-up"
          data-aos-delay="800"
          className="flex flex-wrap justify-center gap-x-20 gap-y-10 items-center border-[3px] border-[#F97316] sm:px-20 px-10 py-10"
        >
          <div
            data-aos="fade-right"
            data-aos-delay="1000"
            className=" flex justify-center gap-2 items-center  font-bold rounded-full"
          >
            <img src={React} alt="react" className="w-20" />
            React Js
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="1200"
            className=" flex justify-center gap-2 items-center  font-bold rounded-full"
          >
            <img src={redux} alt="redux" className="w-10" />
            Redux js
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="1300"
            className=" flex justify-center gap-2 items-center  font-bold rounded-full"
          >
            <img src={HTML} alt="html" className="w-10" />
            HTML
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="1400"
            className=" flex justify-center gap-2 items-center  font-bold rounded-full"
          >
            <img src={css} alt="css" className="w-10" />
            CSS
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="1500"
            className=" flex justify-center gap-2 items-center  font-bold rounded-full"
          >
            <img src={Tailwind} alt="tailwind" className="w-10" />
            Tailwind css
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="1600"
            className=" flex justify-center gap-2 items-center  font-bold rounded-full"
          >
            <img src={javascript} alt="js" className="w-10" />
            JavaScript
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="1700"
            className=" flex justify-center gap-2 items-center  font-bold rounded-full"
          >
            <img src={express} alt="express" className="w-10" />
            Express
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="1800"
            className=" flex justify-center gap-2 items-center  font-bold rounded-full"
          >
            <img src={node} alt="node js" className="w-10" />
            Node Js
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="1900"
            className=" flex justify-center gap-2 items-center  font-bold rounded-full"
          >
            <img src={mongoDB} alt="mongodb" className="w-10" />
            MongoDB
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="2000"
            className=" flex justify-center gap-2 items-center font-bold rounded-full"
          >
            <img src={python} alt="redux" className="w-10" />
            Pyhton
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="2100"
            className=" flex justify-center gap-2 items-center  font-bold rounded-full"
          >
            <img src={java} alt="redux" className="w-10" />
            Java
          </div>
        </div>
      </section>
      <section
        className="sm:w-2/3 md:h-[80vh] mx-auto rounded-md sm:px-10 px-2"
        id="experience"
      >
        <h1
          data-aos="fade-right"
          className="text-center mb-28 sm:text-4xl text-3xl font-bold"
        >
          Experience
        </h1>
        <div className=" flex flex-col sm:flex-row justify-center items-center gap-10 text-center font-semibold">
          <div
            data-aos="fade-down"
            data-aos-delay="800"
            id="1"
            className="py-3 px-5 space-y-5 border-[3px] border-orange-500 w-[20rem]"
          >
            <img className="mx-auto border-b" src={itux} alt="itux solutions" />
            <h1>Full Stack Developer Trainee</h1>
            <p className="text-sm">
              July 2024 to -- <span className="text-orange-500">Present</span>
            </p>
          </div>
          <div
            data-aos="zoom-oin"
            data-aos-delay="1000"
            className="text-6xl font-bold"
          >
            {"<<"}
          </div>
          <div
            data-aos="fade-down"
            data-aos-delay="1500"
            id="2"
            className="py-3 px-5 space-y-5 border-[3px] border-orange-500 w-[20rem] h-[15rem]"
          >
            <img
              className="mx-auto border-b"
              src={zummit}
              alt="Zummit infolabs"
            />
            <h1>Junior Web Devloper Intern</h1>
            <p className="text-sm">
              May to Sep 2024 --{" "}
              <span className="text-orange-500">Present</span>
            </p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="1800"
            className="text-6xl font-bold"
          >
            {"<<"}
          </div>
          <div
            data-aos="fade-down"
            data-aos-delay="2200"
            id="3"
            className="py-3 px-5 space-y-5 border-[3px] border-orange-500 w-[20rem]"
          >
            <img
              className=" mx-auto border-b"
              src={itux}
              alt="itux solutions"
            />
            <h1>FrontEnd Devloper Intern</h1>
            <p className="text-sm">
              Jan to Apr 2024 <span className="text-orange-500">Completed</span>
            </p>
          </div>
        </div>
      </section>
      <section id={"projects"} className="w-2/3 mx-auto md:h-[80vh] md:mt-0">
        <h1
          data-aos="slide-right"
          className="text-3xl md:text-4xl font-bold text-center mb-20"
        >
          Projects
        </h1>
        <div className="flex justify-center items-center">
          <div className="my-5 md:flex md:flex-row md:gap-x-10 flex flex-col justify-center items-center px-10">
            {projects.map((project) => (
              <div
                data-aos={project.animation}
                data-aos-delay={project.delay}
                key={project.id}
                id="project_card"
                className="shadow-md w-[20rem] min-h-[20rem] text-justify rounded-lg mb-5 md:mb-0 transition-all ease-in-out duration-300 hover:scale-110"
              >
                <Link to={project.link}>
                  <img
                    src={project.image}
                    alt="instagram-clone"
                    className="my-2 h-[12rem]"
                  />
                  <hr />
                  <div className="px-5 py-2">
                    <h1 className="text-xl font-semibold">{project.name}</h1>
                    <div className="flex flex-wrap justify-start gap-2 my-5">
                      {project.skills.map((skill, index) => (
                        <i
                          key={index}
                          className={`${skill}bg-orange-500 bx-sm text-white`}
                        ></i>
                      ))}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
