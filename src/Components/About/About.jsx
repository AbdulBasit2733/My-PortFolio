import { useState } from "react";
import { Link } from "react-router-dom";

const About = () => {
  const [data, setData] = useState({
    image: "/2.jpg",
    title: "FrontEnd Developer",
    desc1: `I am Abdul Basit Khan, a dedicated frontend developer based in Aurangabad, India. Currently pursuing my Bachelor of Technology (B.Tech) at MIT Aurangabad, I hold a strong academic record with a 7.23 CGPA. Prior to this, I completed my Diploma in Electrical Engineering from Government Polytechnic Aurangabad with an impressive 86.53%.`,
    desc2: `Driven by a passion for technology, I achieved notable success during my academic years, scoring 87.6% in the 10th Standard (SSC) examinations, including a remarkable 99 out of 100 in Mathematics.

    My journey into the world of frontend development began with a deep fascination for creating engaging and responsive web applications. This passion led me to master technologies like React.js, HTML, CSS, and JavaScript, enabling me to craft dynamic user interfaces and seamless user experiences.`,
    actionButton: {
      title: "Read More..",
      link: "/about/readmore",
    },
  });
  return (
    <div className="about-section mt-28 pb-10">
      <h1 className="text-center pb-16 text-4xl font-bold">About Me</h1>
      <div className="md:flex items-center justify-center">
        {/* Image */}
        <div className="lg:w-[30vw] flex justify-center">
          <img
            src={data.image}
            className="md:rounded-full rounded-md mb-3 w-[400px] sm:w-[300px] md:w-full
            "
            alt="about-image"
          />
        </div>

        {/* Text */}
        <div className="lg:w-[50vw] sm:flex md:justify-start flex justify-center md:px-4 sm:px-10">
          <div className="space-y-5 w-[25rem] sm:w-full text-center md:text-left md:px-10">
            <h1 className="text-3xl font-bold capitalize">{data.title}</h1>
            <p>{data.desc1}</p>
            <p>{data.desc2}</p>
            <br />
            {/* <Link
              to={data.actionButton.link}
              className="text-white px-3 py-2 mt-5 rounded-xl shadow-xl bg-orange-500 font-semibold hover:bg-white duration-500 transition-all ease-in hover:text-black"
            >
              {data.actionButton.title}
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
