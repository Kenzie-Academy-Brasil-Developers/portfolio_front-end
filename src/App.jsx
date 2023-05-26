import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Stack } from "./components/Stack";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stack />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
