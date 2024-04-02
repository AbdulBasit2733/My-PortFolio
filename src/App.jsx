import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./Components/Services/Services";
import MyExpertise from "./Components/Expertise/MyExpertise";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import {Confirmation, Notconfirm} from "./Components/Contact/Confirmation";
import ReadMore from "./Components/About/ReadMore";
import Projects from "./Components/Projects/Projects";
const App = () => {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route
            path="/" 
            exact
            element={
              <>
                <Home />
                <About />
                <Services />
                <MyExpertise />
                <Projects/>
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          {/* <Route path="/blogs" element={<Home />} /> */}
          {/* <Route path="/education" element={<Home />} /> */}
          <Route path="/myskills" element={<MyExpertise />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/confirmation" element={<Confirmation />} />
          <Route path="/contact/error" element={<Notconfirm />} />
          <Route path="/about/readmore" element={<ReadMore />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
