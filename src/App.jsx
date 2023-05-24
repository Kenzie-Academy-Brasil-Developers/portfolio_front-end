import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Stack } from "./components/Stack";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero imgSrc="https://i.ibb.co/FDfKjb0/Vector.png" />
      <div className="flex flex-col gap-20 overflow-hidden">
        <Stack />
        <Projects />
        <Footer />
      </div>
    </>
  );
}

export default App;
