import { useState, useEffect } from "react";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Stack } from "./components/Stack";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

function App() {
  const [isLanguageSet, setLanguage] = useState(false);

  return (
    <>
      <Navbar isLanguageSet={isLanguageSet} setLanguage={setLanguage} />
      <Hero isLanguageSet={isLanguageSet} />
      <Stack isLanguageSet={isLanguageSet} />
      <Projects isLanguageSet={isLanguageSet} />
      <Contact isLanguageSet={isLanguageSet} />
    </>
  );
}

export default App;
