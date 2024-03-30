import { useState } from "react";

const About = () => {
  const [data, setData] = useState({
    image: "/2.jpg",
    title: "FrontEnd Devloper",
    desc1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    desc2: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    actionButton: {
      title: "Read More..",
      link: "/readmore",
    },
  });
  return (
    <div className="about-section py-16 bg-gray-100 my-10">
      <h1 className="text-center pb-16 text-4xl font-bold">About Me</h1>
      <div className="flex items-center">
        {/* Image */}
        <div className=" w-full flex justify-center">
          <img
            src={data.image}
            className="rounded-full border w-2/4"
            alt="about-image"
          />
        </div>

        {/* Text */}
        <div className="w-full flex justify-start">
          <div className="space-y-5 w-2/3">
            <h1 className="text-3xl font-bold capitalize">{data.title}</h1>
            <p>{data.desc1}</p>
            <p>{data.desc2}</p>
            <br />
            <a
              href={data.actionButton.link}
              className="bg-orange-500 text-sm px-3 py-2 font-bold rounded-full shadow-xl"
            >
              {data.actionButton.title}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
