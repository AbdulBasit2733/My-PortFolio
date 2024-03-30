const Home = () => {
  return (
    <>
      <div className="main-container flex">
        <div className="w-full flex items-center justify-center">
          {/* Text Section */}
          <div className="w-2/3 ms-11">
            <h3 className="text-xl font-semibold uppercase">
              hello ! <span></span>
            </h3>
            <h1 className="text-5xl text-orange-500 mt-4 font-bold">
              Abdul Basit Khan
            </h1>
            <h2 className="text-3xl mt-4 font-semibold">
              And I am a <span>FrontEnd</span> Developer
            </h2>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "}
            </p>
            <div className="icons-container space-x-8 my-5">
              <a
                href="/"
                className="bx bxl-linkedin bx-sm bx-border-circle bg-orange-500 text-white hover:bg-white hover:text-orange-500"
              ></a>
              <a
                href="/"
                className="bx bxl-github bx-sm bx-border-circle bg-orange-500 text-white hover:bg-white hover:text-orange-500"
              ></a>
              <a
                href="/"
                className="bx bxl-gmail bx-sm bx-border-circle bg-orange-500 text-white hover:bg-white hover:text-orange-500"
              ></a>
            </div>
            <br />
            <a
              href="/contact"
              className=" text-white px-3 py-2 mt-5 rounded-xl shadow-xl shadow-orange-200 bg-orange-500 font-semibold hover:bg-white hover:border hover:border-orange-100 hover:text-black"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="w-full flex justify-center mt-4">
          {/* Image Section */}
          <img
            src="/Hero.jpg"
            className="rounded-full shadow-lg shadow-orange-300  w-2/3"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
