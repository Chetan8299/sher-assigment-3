import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Stats from "./components/Stats";
import About from "./components/About";
import OurAdvantages from "./components/OurAdvantages";

const App = () => {
  return (
    <div className="parent bg-black text-white h-full w-full min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <About />
      <OurAdvantages />
    </div>
  );
};

export default App;
