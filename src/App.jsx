import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/Services/Services";
import MyExpertise from "./Components/Expertise/MyExpertise";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import { Confirmation, Notconfirm } from "./Components/Contact/Confirmation";
import ReadMore from "./Components/About/ReadMore";
import Projects from "./Components/Projects/Projects";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Home />
              <About />
              <MyExpertise />
              <Services />
              <Projects />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/about/readmore" element={<ReadMore />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<MyExpertise />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/confirm" element={<Confirmation />} />
        <Route path="/contact/notconfirm" element={<Notconfirm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
