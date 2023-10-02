import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from "./Components/About";
import Education from "./Components/Education";
import Contact from "./Components/Contact";
import PageNotFound from "./Components/PageNotFound";
const App = () => {
  return (
    <>
      <BrowserRouter basename="/My-PortFolio/">
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contactme" element={<Contact />} />
          <Route path="/education" element={<Education />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
