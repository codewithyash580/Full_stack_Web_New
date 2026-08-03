import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Footer from "./Footers/Footer";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      

      <Routes>
        {/* Home - Default Page */}
        <Route path="/" element={<Home />} />

        {/* Other Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;