export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-base-100 shadow">
      <div className="navbar lg:w-2/3 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52"
            >
              <li>
                <a>About</a>
              </li>
              <li>
                <a className="justify-between">Stack</a>
              </li>
              <li>
                <a>Projects</a>
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
              <a>About</a>
            </li>
            <li>
              <a>Stack</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-primary btn-sm rounded-xl px-8 text-white">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
