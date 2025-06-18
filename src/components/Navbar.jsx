import React from "react";
import { Link, useLocation } from "react-router-dom";

const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "Porn Videos", path: "/porn-videos" },
  { label: "Categories", path: "/category" },
  { label: "Live Cams", path: "/live-cams" },
  { label: "Pornstars", path: "/pornstars" },
  { label: "Fuck Now", path: "/fuck-now" },
  { label: "Community", path: "/community" },
  { label: "Photos & GIFs", path: "/photos-gifs" },
];

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const isActive = (path) =>
    location.pathname === path || location.pathname.startsWith(path + "/");

  // Close menu on route change
  React.useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Show nav links on mobile with a 'menu' icon (like a button)
  return (
    <nav className="bg-black text-white shadow-lg sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 py-2 flex flex-col gap-0 md:gap-2">
        {/* ROW 1: Logo + Search + Profile/Actions */}
        <div className="flex items-center justify-between py-2 w-full">
          {/* Menu Button (Mobile) */}
          <button
            aria-label="Open menu"
            className="text-orange-500 hover:text-orange-400 focus:outline-none md:hidden mr-2"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <svg
              className="w-9 h-9"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <rect x="3" y="6" width="18" height="2" rx="1" fill="currentColor" />
              <rect x="3" y="11" width="18" height="2" rx="1" fill="currentColor" />
              <rect x="3" y="16" width="18" height="2" rx="1" fill="currentColor" />
            </svg>
          </button>

          {/* Logo */}
          <Link
            to="/"
            className="text-2xl md:text-3xl font-extrabold flex items-center gap-1 tracking-tight"
          >
            <span>Porn</span>
            <span className="bg-orange-600 px-2 rounded text-black">hub</span>
          </Link>

          {/* Right Side Buttons */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <Link
              to="/login"
              className="bg-gray-800 hover:bg-gray-700 text-white font-medium px-3 md:px-4 py-1 md:py-1.5 rounded-md transition text-xs md:text-base border border-gray-700"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-orange-600 hover:bg-orange-500 text-black font-semibold px-3 md:px-4 py-1 md:py-1.5 rounded-md transition text-xs md:text-base"
            >
              Sign Up
            </Link>
          </div>
        </div>

        {/* Search Input (Mobile below logo, Desktop centered) */}
        <div className="w-full flex md:justify-center md:items-center mt-2 md:mt-0">
          <form className="relative w-full md:w-1/2 lg:w-1/3 mx-auto">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-900 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 transition shadow-sm text-sm"
              style={{ boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)' }}
            />
            <button
              type="submit"
              aria-label="Search"
              className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-orange-500 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M5 11a6 6 0 1112 0 6 6 0 01-12 0z" />
              </svg>
            </button>
          </form>
        </div>

        {/* ROW 2: Main Nav Links (responsive) */}
        <ul
          className={`flex-col md:flex-row flex-wrap md:flex justify-center space-y-2 md:space-y-0 space-x-0 md:space-x-6 text-xs md:text-sm font-semibold uppercase border-b border-gray-800 pb-1 md:pb-2 bg-black md:bg-transparent transition-all duration-300 ${
            menuOpen ? 'flex' : 'hidden md:flex'
          }`}
        >
          {NAV_ITEMS.map(({ label, path }) => (
            <li key={label} className="text-center">
              <Link
                to={path}
                className={`relative block px-2 py-2 md:px-3 md:py-2 rounded hover:text-orange-500 hover:bg-gray-900 transition-colors duration-200 ${
                  isActive(path)
                    ? "text-orange-500 bg-gray-900 after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-orange-500"
                    : "text-white"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
