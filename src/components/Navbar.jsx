import { useState, useEffect } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

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
      }`}
    >
      <div className="navbar lg:w-2/3 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              id="dropdown-btn"
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-primary text-white"
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
            </ul>
          </div>
          <a
            href="/index.html"
            className="btn btn-ghost normal-case text-xl font-bold"
          >
            Portfolio
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-10 px-1">
            <li>
              <a
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
              const targetElement = document.querySelector("#footer");
              handleNavbar(targetElement);
            }}
            className="btn btn-primary btn-sm rounded-xl px-8 text-white"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
