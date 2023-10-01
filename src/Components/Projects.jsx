const Projects = () => {
  return (
    <>
        <div className=" max-w-full md:max-h-screen mx-auto bg-gradient-to-r from-gray-700 via-gray-900 to-black ">
          <h1 className=" text-4xl text-center text-white pt-10 font-bold">Projects</h1>
        </div>
        {/* // card */}
        <div className="mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 px-[100px] pt-20 pb-10 bg-gradient-to-r from-gray-700 via-gray-900 to-black">
          <div className=" shadow-md shadow-white rounded mb-10 justify-center items-center ">
            <div className=" overflow-hidden">
              <img
                src="./meme.jpg"
                alt=""
                className=" hover:scale-125 duration-700"
              />
            </div>
            <div className=" px-6 py-4">
              <h3 className=" py-2 text-2xl text-lime-400 font-semibold">
                Meme Generator
              </h3>
              <div className=" grid grid-cols-3 pb-2 px-6">
                <span className=" items-center">
                  <img width="50%" src="./reacticon.png" />
                </span>
                <span className=" items-center">
                  <img width="50%" src="./javascript.png" />
                </span>
                <span className=" items-center">
                  <img width="50%" src="./Node.png" />
                </span>
              </div>
              <p className=" py-2 text-xl text-white">lorem ipsum hdshnkjadh</p>
            </div>
          </div>
          <div className="shadow-md shadow-white rounded mb-10 justify-center items-center">
            <div className=" overflow-hidden">
              <img
                src="https://www.telpo.com.cn/uploadfiles/2022/02/C68-01.png"
                alt=""
                className=" hover:scale-125 duration-700"
              />
            </div>
            <div className="px-6 py-4">
              <h3 className=" py-2 text-2xl text-lime-400 font-semibold">
                Cash Register
              </h3>
              <div className=" grid grid-cols-3 pb-2 px-6">
                <span className=" items-center">
                  <img width="50%" src="./javascript.png" />
                </span>
              </div>
              <p className=" py-2 text-xl text-white">lorem ipsum hdshnkjadh</p>
            </div>
          </div>
          <div className=" shadow-md shadow-white rounded mb-10 justify-center items-center">
            <div className=" overflow-hidden">
              <img
                src="./weatherforcast.png"
                alt=""
                className=" hover:scale-125 duration-700"
              />
            </div>
            <div className=" px-6 py-4">
              <h3 className=" py-2 text-2xl text-lime-400 font-semibold">
                Weather Forcast
              </h3>
              <div className=" grid grid-cols-3 pb-2 px-6">
                <span className=" items-center">
                  <img width="50%" src="./reacticon.png" />
                </span>
                <span className=" items-center">
                  <img width="50%" src="./javascript.png" />
                </span>
                <span className=" items-center">
                  <img width="50%" src="./Node.png" />
                </span>
              </div>
              <p className=" py-2 text-xl text-white">lorem ipsum hdshnkjadh</p>
            </div>
          </div>
        </div>
    </>
  );
};

export default Projects;
