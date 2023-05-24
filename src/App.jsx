import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import { Info } from "./components/Info";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Info />
      <Footer />
    </>
  );
}

export default App;
