import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Instagram Clone",
      image: "/instagram.png",
      link: "https://insta-clone-abdulbasit.vercel.app/",
      skills: [
        "bx bxl-react bx-border-circle ",
        "bx bxl-html5 bx-border-circle ",
        "bx bxl-css3 bx-border-circle ",
        "bx bxl-javascript bx-border-circle ",
      ],
    },
    {
      id: 2,
      name: "HomelyHub",
      image: "./homelyhub.png",
      link: "https://youtu.be/iXNaXGNeZ6c?si=6LzcT_ekosS3KZ8H",
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
  return (
    <div className="pt-20 h-fit md:h-[41.9rem]">
      <h1 className="text-3xl md:text-4xl font-bold text-center">Projects</h1>
      <div className="my-10 md:flex md:flex-row md:space-y-0 md:space-x-10  flex flex-col justify-center space-y-20 items-center px-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="shadow-xl w-[20rem] text-justify rounded-lg"
          >
            <Link to={project.link}>
              <img src={project.image} alt="instagram-clone" className="my-2" />
              <hr />
              <div className="px-5 py-2">
                <h1 className="text-xl font-semibold">{project.name}</h1>
                <div className="flex justify-evenly my-5">
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
  );
};

export default Projects;
