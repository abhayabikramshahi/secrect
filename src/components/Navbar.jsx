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
    <nav className="bg-black text-white shadow-lg sticky top-0 z-50 border-b border-gray-900 font-sans">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 py-2 flex flex-col gap-0 md:gap-2">
        {/* ROW 1: Logo + Profile/Actions (no search) */}
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
            className="text-3xl md:text-4xl font-black flex items-center gap-1 tracking-tight leading-tight select-none"
            style={{ letterSpacing: '-0.04em' }}
          >
            <span className="text-white drop-shadow-lg">Porn</span>
            <span className="bg-gradient-to-r from-orange-500 to-yellow-400 px-2 rounded text-black font-extrabold shadow">hub</span>
          </Link>

          {/* Right Side Buttons */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <Link
              to="/login"
              className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-4 py-1.5 rounded-lg transition text-xs md:text-base border border-gray-800 shadow-sm tracking-wide"
              style={{ letterSpacing: '0.02em' }}
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-orange-500 hover:bg-orange-400 text-black font-bold px-4 py-1.5 rounded-lg transition text-xs md:text-base shadow tracking-wide"
              style={{ letterSpacing: '0.02em' }}
            >
              Sign Up
            </Link>
          </div>
        </div>

        {/* ROW 2: Main Nav Links (responsive) */}
        <ul
          className={`flex-col md:flex-row flex-wrap md:flex justify-center space-y-2 md:space-y-0 space-x-0 md:space-x-8 text-sm md:text-base font-bold uppercase border-b border-gray-900 pb-1 md:pb-2 bg-black md:bg-transparent transition-all duration-300 ${
            menuOpen ? 'flex' : 'hidden md:flex'
          }`}
        >
          {NAV_ITEMS.map(({ label, path }) => (
            <li key={label} className="text-center">
              <Link
                to={path}
                className={`relative block px-3 py-2 md:px-4 md:py-2 rounded-lg hover:text-orange-500 hover:bg-gray-900 transition-colors duration-200 ${
                  isActive(path)
                    ? "text-orange-500 bg-gray-900 after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-orange-500"
                    : "text-white"
                } font-semibold tracking-wide`}
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
