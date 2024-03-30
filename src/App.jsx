import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./Components/Services/Services";
import MyExpertise from "./Components/Expertise/MyExpertise";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
const App = () => {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Services />
                <MyExpertise/>
                <Contact/>
                <Footer/>
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          {/* <Route path="/blogs" element={<Home />} /> */}
          {/* <Route path="/education" element={<Home />} /> */}
          <Route path="/myexpertise" element={<MyExpertise />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
