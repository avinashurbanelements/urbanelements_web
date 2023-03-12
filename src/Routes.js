import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Porfolio from "./pages/Portfolio";
import Gallery from "./pages/Gallery";
import Porject_1 from "./pages/gallery_components/Project_1";
import Porject_2 from "./pages/gallery_components/Project_2";
import Porject_3 from "./pages/gallery_components/Project_3";
// import { ParallaxProvider } from 'react-scroll-parallax'

const NavRoutes = () => (
  // <ParallaxProvider scrollAxis='vertical'>
  <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/portfolio" element={<Porfolio/>} />
    <Route path="/gallery" element={<Gallery/>} >
      <Route index path="luxurious-brown" element={<Porject_1/>} />
      <Route path="office-essentials" element={<Porject_2/>} />
      <Route path="aesthetic-decor" element={<Porject_3/>} />
    </Route>
  </Routes>
  // </ParallaxProvider>
);

export default NavRoutes;