import React from "react";

const Contact = () => {
  return (
    <div className=" h-screen text-white bg-gradient-to-r from-gray-700 via-gray-900 to-black">
      <h1 className=" text-4xl font-bold text-center mb-10">Contact Me</h1>
      <div className=" mx-auto w-96 shadow-md shadow-white ">
        <div className=" p-5">
          <h1 className=" text-2xl font-bold mb-2">Reach Out to me!</h1>
          <h1 className=" text-xl font-light uppercase mb-4">Have Something for me even cricket, reach out to me!</h1>
          <p className=" flex mb-1 ">
            <img className="" width="30px" height="40px" src="/location.png"  alt="location"/>{" "}
            <span className=" px-2 text-lg">MIT, Aurangabad India</span>
          </p>
          <p className=" mb-1 text-lg">Open For Opportunities: Yes</p>
        </div>
        <div className=" flex gap-5 mt-5 p-10">
          <a className="" href="https://github.com/AbdulBasit2733">
            <img className=" border-black border-2 bg-white rounded-full" width="40px" src="https://www.freeiconspng.com/uploads/git-github-hub-icon-25.png" />
          </a>
          <a href="https://www.linkedin.com/in/abdul-basit-khan-2b6a3318b/">
            <img width="40px" src="https://www.freeiconspng.com/uploads/linkedin-logo-3.png" />
          </a>
          <a href="mailto:abdulbasitkhan2733@gmail.com">
            <img width="40px" src="https://www.freeiconspng.com/uploads/gmail-logo-icon-4.png" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
