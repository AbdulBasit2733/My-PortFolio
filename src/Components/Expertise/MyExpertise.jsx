import { Link } from "react-router-dom";

const MyExpertise = () => {
  const skills = [
    {
      name: "HTML",
    },
    {
      name: "CSS",
    },
    {
      name: "Javascript",
    },
    {
      name: "Tailwind CSS",
    },
    {
      name: "React Js",
    },
    {
      name: "Redux Toolkit",
    },
    {
      name: "VSCode",
    },
    {
      name: "Git",
    },
    {
      name: "Github",
    },
    {
      name: "Microsoft Office",
    },
  ];
  return (
    <div className="bg-slate-100 md:h-[42.7rem] sm:h-full py-16 mt-10">
      <h1 className=" lg:pb-10 text-3xl font-bold text-center pt-5">
        My Skills
      </h1>
      <div className="box-container md:flex md:justify-center items-center md:items-center lg:py-12 py-10">
        <div className="flex justify-center items-center w-fit md:px-16 px-10 ">
          <div className="text-center space-y-4 md:flex-col md:justify-center md:items-center my-10 h-[10rem] ">
            {/* Text Section */}
            <h1 className="text-4xl font-semibold">
              I Love These Technologies
            </h1>
            <p>
              Passionate about JavaScript and React.js, crafting dynamic and
              responsive web applications with HTML and CSS.
            </p>
            <p>
              Enthusiastic about state management with Redux Toolkit, and
              committed to efficient version control with Git and GitHub.
            </p>
            <br />
            {/* This Button Should Download The CV */}
            <Link
              href="https://drive.google.com/file/d/188-WB2dcYF2LiKuS7hBFPl9wGWGACbGB/view?usp=drive_link"
              className="px-3 py-2 mt-5 rounded-xl shadow-xl bg-orange-500 font-semibold text-white hover:bg-white hover:text-black duration-500 transition-all ease-in"
            >
              Hire Me
            </Link>
          </div>
        </div>
        <div className="flex justify-center  items-center gap-4 flex-wrap h-fit px-10 py-20 mt-20 md:mt-0">
          {/* Skills Section */}
          {skills.map((skill, id) => (
            <p
              key={id}
              className="bg-slate-300 w-fit px-3 py-2 rounded-full hover:bg-orange-500 hover:text-white text-sm font-semibold cursor-pointer duration-500"
            >
              {skill.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyExpertise;
