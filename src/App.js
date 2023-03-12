import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HeaderNav from "./components/Navbar"
import Routes from "./Routes";
import './App.css'
import AOS from 'aos'
import { useLocation } from "react-router-dom";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])
  
  function GoToTop() {
    const routePath = useLocation();
    const onTop = () => {
      window.scrollTo(0, 0);
    }
    useEffect(() => {
      onTop()
    }, [routePath]);
    
    return null;
  }
  return (
    <Router>
      <HeaderNav>
        <Routes />
      </HeaderNav>
      <GoToTop/>
    </Router>
  );
}

export default App;