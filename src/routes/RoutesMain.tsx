import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Stack } from "../pages/Stack";
import { Contact } from "../pages/Contact";
import { Projects } from "../pages/Projects";
import { Navbar } from "../components/Navbar";
import { useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { MainContext } from "../provider/MainContext";

export const RoutesMain = () => {
  const { NavbarDrawerRef } = useContext(MainContext);
  const location = useLocation();

  useEffect(() => {
    if (NavbarDrawerRef.current !== null)
      NavbarDrawerRef.current.checked = false;
  }, [location]);

  return (
    <Navbar>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/stack" element={<Stack />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Navbar>
  );
};
