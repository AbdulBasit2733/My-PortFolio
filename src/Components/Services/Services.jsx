const Services = () => {
  return (
    <>
      <div className="main-container bg-gray-100 py-16 my-10">
        <h1 className="text-4xl font-bold text-center">Services</h1>
        <div className="services-container flex justify-center space-x-10 mt-12 px-10">
          <div className="service-1 bg-slate-200 text-center p-5 space-y-4 shadow-lg rounded-xl w-1/2 ">
            <div className="flex justify-center">
              <img src="/web.png" alt="web-icon" width={100} height={100} />
            </div>
            <h1 className="text-2xl text-center">FrontEnd Development</h1>
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
