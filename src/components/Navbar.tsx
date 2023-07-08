import { ReactNode, useContext } from "react";
import { MainContext } from "../provider/MainContext";
import { Link } from "react-router-dom";

interface INavbarProps {
  children: ReactNode;
}

export const Navbar = ({ children }: INavbarProps) => {
  const { NavbarDrawerRef, toggleDrawer } = useContext(MainContext);

  return (
    <div className="drawer drawer-end">
      <input
        ref={NavbarDrawerRef}
        id="my-drawer-3"
        type="checkbox"
        className="drawer-toggle"
      />
      <div className="drawer-content flex flex-col">
        <div className="w-full bg-base-100 shadow-lg">
          <div className="flex w-5/6 md:w-2/3 mx-auto items-center justify-between">
            <div className="flex-1 px-2 mx-2">
              <img
                className="w-10 py-2"
                src="https://i.postimg.cc/MHMKq6v7/logo.png"
              />
            </div>

            <div className="flex gap-5">
              <label className="swap swap-rotate">
                <input id="language-checkbox" type="checkbox" />
                <span className="swap-off fi fi-br text-2xl"></span>
                <span className="swap-on fi fi-us text-2xl"></span>
              </label>
              <label
                onClick={toggleDrawer}
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
          </div>
        </div>
        {children}
      </div>
      <div className="drawer-side">
        <label onClick={toggleDrawer} className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-100">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/stack">Technologies</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
