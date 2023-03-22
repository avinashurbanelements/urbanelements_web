import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Porfolio from "./pages/Portfolio";
import Gallery from "./pages/Gallery";
import PageNotFound from "./pages/PageNotFound"
import Porject_1 from "./pages/gallery_components/Project_1";
import Porject_2 from "./pages/gallery_components/Project_2";
import Porject_3 from "./pages/gallery_components/Project_3";
import Porject_4 from "./pages/gallery_components/Project_4";
import Porject_5 from "./pages/gallery_components/Project_5";
import Porject_6 from "./pages/gallery_components/Project_6";
import Porject_7 from "./pages/gallery_components/Project_7";
import Porject_8 from "./pages/gallery_components/Project_8";
import Porject_9 from "./pages/gallery_components/Project_9";
import Porject_10 from "./pages/gallery_components/Project_10";
import Porject_11 from "./pages/gallery_components/Project_11";
// import { ParallaxProvider } from 'react-scroll-parallax'

const NavRoutes = () => (
  // <ParallaxProvider scrollAxis='vertical'>
  <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/portfolio" element={<Porfolio/>} />
    <Route path="/gallery" element={<Gallery/>} >
      <Route path="luxurious-brown" element={<Porject_1/>} />
      <Route path="office-essentials" element={<Porject_2/>} />
      <Route path="aesthetic-decor" element={<Porject_3/>} />
      <Route path="honeysuckle-decor" element={<Porject_4/>} />
      <Route path="woodland" element={<Porject_5/>} />
      <Route path="living-rooms-ideas-1" element={<Porject_6/>} />
      <Route path="living-rooms-ideas-2" element={<Porject_7/>} />
      <Route path="kitchen-ideas" element={<Porject_8/>} />
      <Route path="bedroom-ideas-1" element={<Porject_9/>} />
      <Route path="children-bedroom-ideas" element={<Porject_10/>} />
      <Route path="bathroom-ideas" element={<Porject_11/>} />
    </Route>
    <Route path="*" element={<PageNotFound />} />
  </Routes>
  // </ParallaxProvider>
);

export default NavRoutes;