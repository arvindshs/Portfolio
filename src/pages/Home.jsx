import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Scroll from "../components/Scroll";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Scroll />
      <Contacts />
      <Footer />
    </>
  );
}

export default Home;
