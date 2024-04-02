export const Confirmation = () => {
  return (
    <div className="my-20">
      <h1 className="text-center text-2xl md:text-4xl text-green-500 font-extrabold">
        Thank You For Contacting
      </h1>
      <div className="flex justify-center mt-20">
        <a
          href="/"
          className="px-3 py-2 bg-orange-500 text-white font-semibold rounded-xl hover:bg-white hover:text-black duration-500 transition-all ease-in"
        >
          Home
        </a>
      </div>
    </div>
  );
};

export const Notconfirm = () => {
  return (
    <div className="my-20">
      <h1 className="text-center text-red-500 md:text-4xl text-2xl font-extrabold">
        Error In Contacting
      </h1>
      <div className="flex justify-center mt-20">
        <a
          href="/"
          className="px-3 py-2 bg-orange-500 text-white font-semibold rounded-xl hover:bg-white hover:text-black duration-500 transition-all ease-in"
        >
          Home
        </a>
      </div>
    </div>
  );
};
