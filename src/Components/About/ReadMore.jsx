import React, { useState } from "react";

const ReadMore = () => {
  const [data, setData] = useState({
    image: "/2.jpg",
    title: "FrontEnd Developer",
    desc1: `I am Abdul Basit Khan, a dedicated frontend developer based in Aurangabad, India. Currently pursuing my Bachelor of Technology (B.Tech) at MIT Aurangabad, I hold a strong academic record with a 7.23 CGPA. Prior to this, I completed my Diploma in Electrical Engineering from Government Polytechnic Aurangabad with an impressive 86.53%.`,
    desc2: `Driven by a passion for technology, I achieved notable success during my academic years, scoring 87.6% in the 10th Standard (SSC) examinations, including a remarkable 99 out of 100 in Mathematics.

    My journey into the world of frontend development began with a deep fascination for creating engaging and responsive web applications. This passion led me to master technologies like React.js, HTML, CSS, and JavaScript, enabling me to craft dynamic user interfaces and seamless user experiences.`,
  });
  return (
    <div className=" px-10 py-20 md:pt-28 text-center sm:px-20">
      <div className="flex justify-center items-center">
        <img
          src={data.image}
          className="rounded-md sm:rounded-lg hover:scale-75 duration-500 sm:h-[18rem]"
        />
      </div>
      <h1 className="text-3xl font-bold capitalize my-5">{data.title}</h1>
      <div className="md:space-y-6 md:px-32 space-y-5">
        <p>{data.desc1}</p>
        <p>{data.desc2}</p>
      </div>
    </div>
  );
};

export default ReadMore;
