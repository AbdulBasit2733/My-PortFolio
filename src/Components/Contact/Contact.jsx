import React from "react";
import Footer from "../Footer/Footer";

const Contact = () => {
  return (
    <div className="my-5">
      <h1 className="text-3xl font-bold text-center">Contact Me</h1>
      <div className="flex justify-center mt-10">
        <form className="flex-col flex-wrap shadow-xl rounded-md space-y-6 p-10">
          <div>
            <input className="w-[20rem] rounded-md px-2 py-2 border-2 hover:border-orange-500 font-semibold" type="text" placeholder="Name" required />
          </div>
          <div>
            <input className="w-[20rem] rounded-md px-2 py-2 border-2 hover:border-orange-500 font-semibold" type="email" placeholder="Email" required />
          </div>
          <div>
            <textarea className="w-[20rem] rounded-md px-2 py-2 border-2 hover:border-orange-500 font-semibold" placeholder="Have A Project"></textarea>
          </div>
          <div>
            <button className="px-3 py-2 bg-orange-500 text-white font-semibold rounded-xl hover:bg-white hover:text-black">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
