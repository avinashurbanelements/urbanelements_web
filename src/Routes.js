import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Porfolio from "./pages/Portfolio";
import Gallery from "./pages/Gallery";
// import { ParallaxProvider } from 'react-scroll-parallax'

const NavRoutes = () => (
  // <ParallaxProvider scrollAxis='vertical'>
  <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/portfolio" element={<Porfolio/>} />
    <Route path="/gallery" element={<Gallery/>} />
  </Routes>
  // </ParallaxProvider>
);

export default NavRoutes;