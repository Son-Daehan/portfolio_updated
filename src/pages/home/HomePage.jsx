import React from "react";
import Projects from "../../components/projects/Projects";
import MainHeader from "../../components/header/MainHeader";
import "./home.css";
import About from "../../components/about/About";

const HomePage = () => {
  return (
    <div className="container">
      <MainHeader />
      <div className="body_container">
        <About />
        <Projects />
        <hr className="footer_line" />
      </div>
    </div>
  );
};

export default HomePage;
