import { useState, useEffect } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOnAbout, setIsOnAbout] = useState(true);
  const [isOnStack, setIsOnStack] = useState(false);
  const [isOnProjects, setIsOnProjects] = useState(false);
  const [isOnContact, setIsOnContact] = useState(false);
  const [isNavbarVisible, setNavbarVisible] = useState(false);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const scrolledComponent = document.elementFromPoint(
        window.innerWidth / 2,
        window.innerHeight / 2
      );
      const componentId = scrolledComponent?.id;

      const currentScrollPos = window.pageYOffset;
      const isScrolledDown = prevScrollPos < currentScrollPos;

      setNavbarVisible(isScrolledDown || currentScrollPos < 10);
      prevScrollPos = currentScrollPos;

      console.log(componentId);

      switch (componentId) {
        case "about":
          setIsOnAbout(true);
          setIsOnStack(false);
          setIsOnProjects(false);
          setIsOnContact(false);
          break;
        case "stack":
          setIsOnAbout(false);
          setIsOnStack(true);
          setIsOnProjects(false);
          setIsOnContact(false);
          break;
        case "projects":
          setIsOnAbout(false);
          setIsOnStack(false);
          setIsOnProjects(true);
          setIsOnContact(false);
          break;
        case "contact":
          setIsOnAbout(false);
          setIsOnStack(false);
          setIsOnProjects(false);
          setIsOnContact(true);
          break;
      }

      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
        setNavbarVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  function handleMobileNavbar(targetElement) {
    function hideDropdownMenu() {
      const dropdownButton = document.querySelector("#dropdown-btn");
      const dropdownMenu = document.querySelector("#dropdown-menu");
      dropdownButton.blur();
      dropdownMenu.blur();
    }

    targetElement.scrollIntoView({ behavior: "smooth" });
    hideDropdownMenu();
  }

  function handleNavbar(targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-10 shadow transition-all duration-300 ${
        isScrolled ? "backdrop-blur-sm" : "bg-base-100"
      } ${isOnContact ? "opacity-0" : ""} ${
        isNavbarVisible ? "-top-full sm:top-auto" : ""
      }`}
    >
      <div className="navbar md:w-2/3 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              id="dropdown-btn"
              tabIndex={0}
              className="btn btn-ghost md:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              id="dropdown-menu"
              tabIndex={0}
              className="menu menu-compact mt-3 dropdown-content p-2 shadow w-52 bg-base-300 rounded-none"
            >
              <li>
                <a
                  onClick={() => {
                    const targetElement = document.querySelector("#about");
                    handleMobileNavbar(targetElement);
                  }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    const targetElement = document.querySelector("#stack");
                    handleMobileNavbar(targetElement);
                  }}
                  className="justify-between"
                >
                  Stack
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    const targetElement = document.querySelector("#projects");
                    handleMobileNavbar(targetElement);
                  }}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    const targetElement = document.querySelector("#contact");
                    handleMobileNavbar(targetElement);
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <a href="/index.html" className="text-xl font-bold">
            <img
              src="https://i.postimg.cc/Kvp5ZvKV/logo.png"
              className="w-10"
            ></img>
          </a>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="flex gap-10 px-1">
            <li>
              <a
                className={`${
                  isOnAbout ? "border-opacity-100" : "border-opacity-0"
                } cursor-pointer border-b border-primary border-opacity-0 hover:border-opacity-100 transition-all duration-300`}
                onClick={() => {
                  const targetElement = document.querySelector("#about");
                  handleNavbar(targetElement);
                }}
              >
                About
              </a>
            </li>
            <li>
              <a
                className={`${
                  isOnStack ? "border-opacity-100" : "border-opacity-0"
                } cursor-pointer border-b border-primary border-opacity-0 hover:border-opacity-100 transition-all duration-300`}
                onClick={() => {
                  const targetElement = document.querySelector("#stack");
                  handleNavbar(targetElement);
                }}
              >
                Stack
              </a>
            </li>
            <li>
              <a
                className={`${
                  isOnProjects ? "border-opacity-100" : "border-opacity-0"
                } cursor-pointer border-b border-primary border-opacity-0 hover:border-opacity-100 transition-all duration-300`}
                onClick={() => {
                  const targetElement = document.querySelector("#projects");
                  handleNavbar(targetElement);
                }}
              >
                Projects
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a
            onClick={() => {
              const targetElement = document.querySelector("#contact");
              handleNavbar(targetElement);
            }}
            className="md:inline-flex hidden btn btn-primary btn-sm transition-all duration-300 rounded-none"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
