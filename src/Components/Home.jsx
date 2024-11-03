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
      duration: 300, // Animation duration (in milliseconds)
      once: true,
      easing: "ease-in", // Animation only happens once
    });
  }, []);
  const projects = [
    {
      id: 1,
      name: "sprhava",
      image: "./sprhava.png",
      link: "https://www.sprhava.com/",
      animation: "fade-up-left",
      delay: "800",
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
      animation: "fade-up-left",
      delay: "1200",
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
      animation: "fade-up-left",
      delay: "1600",
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
    <section id="main" className="min-h-screen pt-10">
      <section
        id="home"
        className="sm:flex md:flex-row flex flex-col justify-center items-center md:px-20 px-5 overflow-x-hidden"
      >
        <div className="max-w-3xl sm:p-20 mt-10">
          <div className="flex justify-start items-center mb-5">
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
              className="md:text-5xl text-4xl mb-5 font-semibold sm:w-full"
            >
              My Name Is{" "}
              <span className="text-orange-500 font-bold">
                Abdul Basit Khan
              </span>
            </h1>
            <h3
              data-aos="fade-right"
              data-aos-delay="1500"
              className="md:text-3xl text-xl font-semibold md:mb-8 mb-5"
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
            <div className="flex justify-start gap-10 items-center text-orange-500 mt-3">
              {links.map((link, id) => (
                <Link
                  data-aos="fade-up"
                  data-aos-delay="1700"
                  to={link.link}
                  key={id}
                  className=""
                >
                  <i
                    className={`bx bx-sm bx-border-circle ${link.icon} bg-white transition-all ease-in-out duration-500 hover:bg-orange-500 hover:text-white`}
                  ></i>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section
        className="sm:w-2/3 md:h-[60vh] mx-auto rounded-md sm:px-10 px-4 py-5"
        id="skills"
      >
        <h1
          data-aos="fade-down"
          className="text-center text-3xl md:text-4xl font-bold mt-5 mb-16"
        >
          SKILLS
        </h1>
        <div
          data-aos="fade-up"
          data-aos-delay="800"
          className="flex flex-wrap justify-center gap-x-10 gap-y-10 items-center border-3 border-[#F97316] sm:px-10 px-4 py-10"
        >
          {[
            {
              src: React,
              alt: "react",
              label: "React Js",
              delay: 1000,
              size: "w-20",
            },
            {
              src: redux,
              alt: "redux",
              label: "Redux js",
              delay: 1200,
              size: "w-10",
            },
            {
              src: HTML,
              alt: "html",
              label: "HTML",
              delay: 1300,
              size: "w-10",
            },
            { src: css, alt: "css", label: "CSS", delay: 1400, size: "w-10" },
            {
              src: Tailwind,
              alt: "tailwind",
              label: "Tailwind CSS",
              delay: 1500,
              size: "w-10",
            },
            {
              src: javascript,
              alt: "js",
              label: "JavaScript",
              delay: 1600,
              size: "w-10",
            },
            {
              src: express,
              alt: "express",
              label: "Express",
              delay: 1700,
              size: "w-10",
            },
            {
              src: node,
              alt: "node js",
              label: "Node Js",
              delay: 1800,
              size: "w-10",
            },
            {
              src: mongoDB,
              alt: "mongodb",
              label: "MongoDB",
              delay: 1900,
              size: "w-10",
            },
            {
              src: python,
              alt: "python",
              label: "Python",
              delay: 2000,
              size: "w-10",
            },
            {
              src: java,
              alt: "java",
              label: "Java",
              delay: 2100,
              size: "w-10",
            },
          ].map((skill, index) => (
            <div
              key={index}
              data-aos="fade-right"
              data-aos-delay={skill.delay}
              className="flex justify-center gap-2 items-center font-bold rounded-full text-center"
            >
              <img src={skill.src} alt={skill.alt} className={skill.size} />
              {skill.label}
            </div>
          ))}
        </div>
      </section>

      <section
        className="max-w-5xl mx-auto sm:px-10 px-4 py-8 rounded-md md:mt-0 mt-28"
        id="experience"
      >
        <h1
          data-aos="fade-right"
          className="text-center mb-12 sm:text-4xl text-3xl font-bold"
        >
          Experience
        </h1>
        <div className="flex flex-col sm:flex-row justify-center items-center sm:gap-10 gap-6 text-center font-semibold">
          <div
            data-aos="fade-right"
            data-aos-delay="800"
            id="1"
            className="py-6 px-5 space-y-4 border-[3px] border-orange-500 w-full sm:w-[20rem] rounded-lg"
          >
            <img
              className="mx-auto w-32 h-32 object-contain border-b pb-3"
              src={itux}
              alt="itux solutions"
            />
            <h1>Full Stack Developer Trainee</h1>
            <p className="text-sm">
              July 2024 to -- <span className="text-orange-500">Present</span>
            </p>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-delay="1000"
            className="text-6xl font-bold hidden sm:block"
          >
            {"<<"}
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="1000"
            className="text-4xl font-bold block sm:hidden"
          >
            {"⇑"}
          </div>

          <div
            data-aos="fade-right"
            data-aos-delay="1500"
            id="2"
            className="py-6 px-5 space-y-4 border-[3px] border-orange-500 w-full sm:w-[20rem] h-auto rounded-lg"
          >
            <img
              className="mx-auto w-32 h-32 object-contain border-b pb-3"
              src={zummit}
              alt="Zummit infolabs"
            />
            <h1>Junior Web Developer Intern</h1>
            <p className="text-sm">
              May to Sep 2024 --{" "}
              <span className="text-orange-500">Present</span>
            </p>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-delay="1800"
            className="text-6xl font-bold hidden sm:block"
          >
            {"<<"}
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="1000"
            className="text-4xl font-bold block sm:hidden"
          >
            {"⇑"}
          </div>

          <div
            data-aos="fade-right"
            data-aos-delay="2200"
            id="3"
            className="py-6 px-5 space-y-4 border-[3px] border-orange-500 w-full sm:w-[20rem] rounded-lg"
          >
            <img
              className="mx-auto w-32 h-32 object-contain border-b pb-3"
              src={itux}
              alt="itux solutions"
            />
            <h1>FrontEnd Developer Intern</h1>
            <p className="text-sm">
              Jan to Apr 2024 <span className="text-orange-500">Completed</span>
            </p>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="max-w-5xl h-full mx-auto md:h-[80vh] py-12 my-28"
      >
        <h1
          data-aos="slide-right"
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Projects
        </h1>
        <div className="flex justify-center items-center">
          <div className="flex flex-col md:flex-row md:flex-wrap md:gap-10 gap-6 justify-center items-center px-4">
            {projects.map((project) => (
              <div
                data-aos={project.animation}
                data-aos-delay={project.delay}
                key={project.id}
                id="project_card"
                className="shadow-md w-full sm:w-[20rem] min-h-[20rem] text-justify rounded-lg mb-5 md:mb-0 transition-transform ease-in-out duration-300 hover:scale-110"
              >
                <Link to={project.link}>
                  <img
                    src={project.image}
                    alt={project.name}
                    className="my-2 h-[12rem] w-full object-cover rounded-t-lg"
                  />
                  <hr />
                  <div className="px-5 py-4">
                    <h1 className="text-xl font-semibold">{project.name}</h1>
                    <div className="flex flex-wrap justify-start gap-2 mt-4">
                      {project.skills.map((skill, index) => (
                        <i
                          key={index}
                          className={`${skill} bg-orange-500 bx-sm text-white`}
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
