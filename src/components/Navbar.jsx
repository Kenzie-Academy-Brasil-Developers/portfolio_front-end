import { useState, useEffect } from "react";
import "/node_modules/flag-icons/css/flag-icons.min.css";

export function Navbar({ isLanguageSet, setLanguage }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOnAbout, setIsOnAbout] = useState(true);
  const [isOnStack, setIsOnStack] = useState(false);
  const [isOnProjects, setIsOnProjects] = useState(false);
  const [isOnContact, setIsOnContact] = useState(false);
  const [isNavbarVisible, setNavbarVisible] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    (async () => {
      await delay(1500);
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledComponent = document.elementFromPoint(
        window.innerWidth / 2,
        window.innerHeight / 2
      );
      const componentId = scrolledComponent?.id;

      const currentScrollPos = window.pageYOffset;
      const isScrolledDown = prevScrollPos > currentScrollPos;

      setNavbarVisible(!isScrolledDown || currentScrollPos < 100);
      setPrevScrollPos(currentScrollPos);

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
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isLoading);
  }, [isLoading]);

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

  function handleCheckboxChange() {
    setLoading(true);

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    (async () => {
      await delay(1500);
      setLanguage((prevLanguage) => !prevLanguage);
      await delay(1500);
      setLoading(false);
    })();
  }

  return (
    <>
      <nav
        className={`fixed left-0 right-0 z-10 shadow transition-all duration-300 md:-top-0 ${
          isScrolled ? "backdrop-blur-sm" : "bg-base-100"
        } ${isOnContact ? "opacity-0" : ""} ${
          isNavbarVisible ? "-top-full" : "top-0"
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
                className="menu menu-compact mt-3 dropdown-content p-2 shadow border w-52 bg-base-100 text-white border-white/30 rounded-none font-marlinge"
              >
                <li>
                  <a
                    onClick={() => {
                      const targetElement = document.querySelector("#about");
                      handleMobileNavbar(targetElement);
                    }}
                  >
                    {`${isLanguageSet ? "Sobre" : "About"}`}
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
                    {`${isLanguageSet ? "Projetos" : "Projects"}`}
                  </a>
                </li>
                <li className="border-b border-base-100">
                  <a
                    onClick={() => {
                      const targetElement = document.querySelector("#contact");
                      handleMobileNavbar(targetElement);
                    }}
                  >
                    {`${isLanguageSet ? "Contato" : "Contact"}`}
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
                  {`${isLanguageSet ? "Sobre" : "About"}`}
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
                  {`${isLanguageSet ? "Projetos" : "Projects"}`}
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar-end flex gap-5">
            <label className="swap swap-rotate">
              <input
                id="language-checkbox"
                defaultChecked={isLanguageSet}
                onChange={handleCheckboxChange}
                type="checkbox"
              />

              <span className="swap-off fi fi-br text-3xl"></span>
              <span className="swap-on fi fi-us text-3xl"></span>
            </label>
          </div>
        </div>
      </nav>
      <div
        className={`fixed inset-0 z-50 backdrop-blur-sm min-h-screen min-w-screen flex items-center justify-center ${
          isLoading ? "block" : "hidden"
        }`}
      >
        <div
          className="fixed left-1/2 top-80 items-center h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        ></div>
      </div>
    </>
  );
}
