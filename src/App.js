import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HeaderNav from "./components/Navbar"
import Routes from "./Routes";
import './App.css'
import AOS from 'aos'
import GoToTop from "./components/GoToTop";
function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])
  
  return (
    <Router>
      <GoToTop/>
      <HeaderNav>
        <Routes />
      </HeaderNav>
    </Router>
  );
}

export default App;