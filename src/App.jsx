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
          path="/My-PortFolio"
          element={
            <>
              <Home />
              <About />
              <MyExpertise />
              <Services/>
              <Projects />
              <Contact />
              <Footer/>
            </>
          }
        />
        <Route path="/My-PortFolio/about" element={<About />} />
        <Route path="/My-PortFolio/about/readmore" element={<ReadMore />} />
        <Route path="/My-PortFolio/projects" element={<Projects />} />
        <Route path="/My-PortFolio/skills" element={<MyExpertise />} />
        <Route path="/My-PortFolio/services" element={<Services />} />
        <Route path="/My-PortFolio/contact" element={<Contact />} />
        <Route path="/My-PortFolio/contact/confirm" element={<Confirmation />} />
        <Route path="/My-PortFolio/contact/notconfirm" element={<Notconfirm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
