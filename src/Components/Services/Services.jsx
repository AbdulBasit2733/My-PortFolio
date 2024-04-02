const Services = () => {
  return (
    <>
      <div className="main-container py-16">
        <h1 className="text-4xl font-bold text-center">Services</h1>
        <div className="services-container flex justify-center space-x-10 mt-12 px-10">
          <div className="service-1 bg-slate-100 text-center p-5 space-y-4 shadow-lg rounded-xl w-full sm:w-fit md:w-[30rem] lg:w-1/2 ">
            <div className="flex justify-center">
              <img src="/web.png" alt="web-icon" width={100} height={100} />
            </div>
            <h1 className="text-2xl text-center">FrontEnd Development</h1>
            <p>
              Crafting dynamic and responsive user interfaces using React.js, I
              bring designs to life with pixel-perfect precision.
            </p>
            <div className="flex justify-evenly">
              <i className="bx bxl-react bx-border-circle bg-orange-500 bx-sm text-white hover:bg-white hover:text-orange-500 duration-500 transition-all ease-in"></i>
              <i className="bx bxl-html5 bx-border-circle bg-orange-500 bx-sm text-white hover:bg-white hover:text-orange-500 duration-500 transition-all ease-in"></i>
              <i className="bx bxl-javascript bx-border-circle bg-orange-500 bx-sm text-white hover:bg-white hover:text-orange-500 duration-500 transition-all ease-in"></i>
              <i className="bx bxl-redux bx-border-circle bg-orange-500 bx-sm text-white hover:bg-white hover:text-orange-500 duration-500 transition-all ease-in"></i>
              <i className="bx bxl-bootstrap bx-border-circle bg-orange-500 bx-sm text-white hover:bg-white hover:text-orange-500 duration-500 transition-all ease-in"></i>
            </div>
            <button className="bg-orange-500 rounded-xl px-3 py-2 shadow-xl text-sm font-semibold text-white hover:bg-white hover:text-black duration-500 transition-all ease-in">
              Check
            </button>
          </div>
          {/* <div className="service-2 bg-slate-200 text-center p-5 space-y-4 shadow-lg rounded-xl ">
            <h1 className="text-2xl">Web Development</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <button className="bg-orange-500 rounded-full px-3 py-2 shadow-xl text-sm font-semibold">
              Check
            </button>
          </div> */}
          {/* <div className="service-3 bg-slate-200 text-center p-5 space-y-4 shadow-lg rounded-xl">
            <h1 className="text-2xl">Web Development</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <button className="bg-orange-500 rounded-full px-3 py-2 shadow-xl text-sm font-semibold">
              Check
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
};
export default Services;
