import React from "react";
import { useForm, ValidationError } from "@formspree/react";
// import { useNavigate } from "react-router-dom";
import { Notconfirm, Confirmation } from "./Confirmation";
const Contact = () => {
  const [state, handleSubmit] = useForm("mkndqqor");
  if (state.succeeded) {
    return <Confirmation />;
  } else {
    <Notconfirm />;
  }
  return (
    <div className="pt-20 h-[91vh]">
      <h1 className="text-3xl font-bold text-center">Contact Me</h1>
      <div className="flex justify-center mt-5 h-fit">
        <form
          className="flex-col flex-wrap shadow-xl rounded-md space-y-6 p-10 h-[28rem] bg-slate-50"
          action="https://formspree.io/f/mkndqqor"
          method="POST"
          onSubmit={handleSubmit}
        >
          <div>
            <input
              className="w-[20rem] rounded-md px-2 py-2 border-2 hover:border-orange-500 font-semibold"
              type="text"
              id="name"
              placeholder="Name"
              required
              autoComplete="off"
              name="name"
              autoCapitalize="true"
            />
          </div>
          <div>
            <input
              className="w-[20rem] rounded-md px-2 py-2 border-2 hover:border-orange-500 font-semibold"
              type="email"
              id="email"
              placeholder="Email"
              required
              autoComplete="off"
              name="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div>
            <textarea
              className="w-[20rem] rounded-md px-2 py-2 border-2 hover:border-orange-500 font-semibold"
              placeholder="Have A Project"
              autoComplete="off"
              name="message"
              cols={30}
              rows={6}
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <div>
            <button
              disabled={state.submitting}
              type="submit"
              value={"send"}
              className="px-3 py-2 shadow-xl bg-orange-500 text-white font-semibold rounded-xl hover:bg-white hover:text-black duration-500 transition-all ease-in "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
