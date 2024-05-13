import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import ReadMore from "./Components/About/ReadMore.jsx";
import Projects from "./Components/Projects/Projects.jsx";
import MyExpertise from "./Components/Expertise/MyExpertise.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import { Confirmation } from "./Components/Contact/Confirmation.jsx";
import NotFound from "./Components/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
        children: [{ path: "/about/readmore", element: <ReadMore /> }],
      },
      { path: "/projects", element: <Projects /> },
      { path: "/skills", element: <MyExpertise /> },
      {
        path: "/contact",
        element: <Contact />,
        children: [{ path: "/contact/confirm", element: <Confirmation /> }],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
