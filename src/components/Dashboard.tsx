import React from "react";

const Dashboard = () => {
  return (
    <div className="flex flex-1 justify-center items-center">
      <img
        src="/svg/cccoil.svg"
        className="object-cover object-center w-2/4 relative brightness-50"
      />
      <div className="lg:max-w-3xl absolute z-10">
        <div className=" text-center text-primary font-extrabold">
          <h4 className="text-4xl text-start">Hi, I Am</h4>
          <h1 className=" text-6xl my-6">Abdul Basit Khan</h1>

          <h3 className="text-4xl text-end">Full Stack Developer</h3>
        </div>
        <div className="text-center mt-10 space-y-5 font-medium">
          <p className="text-xl">
            I specialize in Next.js, React.js, Node.js, and PostgreSQL, creating
            seamless user experiences and scalable backend solutions. Currently
            diving into Docker, Monorepos, and DevOps practices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
