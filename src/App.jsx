import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from "./Components/About";
import Education from "./Components/Education";
import Contact from "./Components/Contact";
const App = () => {
  return (
    <>
      <BrowserRouter basename="/My-PortFolio/">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contactme" element={<Contact />} />
          <Route path="/education" element={<Education />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
