import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import FeaturedProject from "./components/FeaturedProject";
import Footer from "./components/Footer";
import About from "./page/About";
import Project from "./page/Project";
import Contact from "./page/contact";
import { Routes, Route } from "react-router-dom";



function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <FeaturedProject />
            </>
          }
        />
         <Route path="/projects" element={<Project />} />
         <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
      </Routes>

      
      <Footer />



    </>
  );
}
export default App;