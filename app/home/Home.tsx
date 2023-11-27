"use client";

import React from "react";
import About from "../components/About";
import BodyPage from "../components/BodyPage";
import Navbar from "../components/navbar/Navbar";
import Contact from "../components/Contact";
import ProjectPage from "../components/ProjectPage";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      {" "}
      <Navbar />
      <BodyPage />
      <About />
      <ProjectPage />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
