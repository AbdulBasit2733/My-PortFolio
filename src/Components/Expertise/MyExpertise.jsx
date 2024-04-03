import { Link } from "react-router-dom";

const MyExpertise = () => {
  // const [skills,setSkills] = useState({

  // })
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
            <br/>
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
          <p className="bg-slate-300 w-fit px-3 py-2 rounded-full hover:bg-orange-500 hover:text-white text-sm font-semibold cursor-pointer duration-500">
            HTML
          </p>
          <p className="bg-slate-300 w-fit px-3 py-2 rounded-full hover:bg-orange-500 hover:text-white text-sm font-semibold cursor-pointer duration-500">
            CSS
          </p>
          <p className="bg-slate-300 w-fit px-3 py-2 rounded-full hover:bg-orange-500 hover:text-white text-sm font-semibold cursor-pointer duration-500">
            Tailwind CSS
          </p>
          <p className="bg-slate-300 w-fit px-3 py-2 rounded-full hover:bg-orange-500 hover:text-white text-sm font-semibold cursor-pointer duration-500">
            JavaScript
          </p>
          <p className="bg-slate-300 w-fit px-3 py-2 rounded-full hover:bg-orange-500 hover:text-white text-sm font-semibold cursor-pointer duration-500">
            React Js
          </p>
          <p className="bg-slate-300 w-fit px-3 py-2 rounded-full hover:bg-orange-500 hover:text-white text-sm font-semibold cursor-pointer duration-500">
            Redux Toolkit
          </p>
          <p className="bg-slate-300 w-fit px-3 py-2 rounded-full hover:bg-orange-500 hover:text-white text-sm font-semibold cursor-pointer duration-500">
            Python
          </p>
          <p className="bg-slate-300 w-fit px-3 py-2 rounded-full hover:bg-orange-500 hover:text-white text-sm font-semibold cursor-pointer duration-500">
            SQL
          </p>
          <p className="bg-slate-300 w-fit px-3 py-2 rounded-full hover:bg-orange-500 hover:text-white text-sm font-semibold cursor-pointer duration-500">
            VSCode
          </p>
          <p className="bg-slate-300 w-fit px-3 py-2 rounded-full hover:bg-orange-500 hover:text-white text-sm font-semibold cursor-pointer duration-500">
            Git
          </p>
          <p className="bg-slate-300 w-fit px-3 py-2 rounded-full hover:bg-orange-500 hover:text-white text-sm font-semibold cursor-pointer duration-500">
            GitHub
          </p>
          <p className="bg-slate-300 w-fit px-3 py-2 rounded-full hover:bg-orange-500 hover:text-white text-sm font-semibold cursor-pointer duration-500">
            Microsoft Office
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyExpertise;
