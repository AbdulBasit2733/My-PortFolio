import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import { Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Education from "./Components/Education";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contactme" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
