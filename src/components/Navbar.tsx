import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Search, Bell, User, Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export default function Navbar() {
  const { dark, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkStyle = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "font-semibold border-b-2 border-red-600 pb-0.5"
      : "hover:text-gray-700 dark:hover:text-gray-300 transition font-semibold";

  const mobileStyle = ({ isActive }: { isActive: boolean }) =>
    `py-2 px-3 rounded transition ${
      isActive
        ? "text-red-600 font-semibold bg-gray-100 dark:bg-gray-800"
        : "hover:bg-gray-100 dark:hover:bg-gray-800 font-semibold"
    }`;

  return (
    <nav className="flex items-center justify-between bg-white dark:bg-black px-4 sm:px-6 md:px-10 py-4 text-black dark:text-white relative">
      <span
        className="text-[#E50914] font-black tracking-tight text-2xl sm:text-3xl whitespace-nowrap"
        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
      >
        MOVIXPLORE
      </span>

      <div className="hidden md:flex gap-6 text-sm lg:text-base">
        <NavLink to="/" className={navLinkStyle}>
          Home
        </NavLink>
        <NavLink to="/tvshows" className={navLinkStyle}>
          TV Shows
        </NavLink>
        <NavLink to="/movies" className={navLinkStyle}>
          Movies
        </NavLink>
        <NavLink to="/popular" className={navLinkStyle}>
          New & Popular
        </NavLink>
        <NavLink to="/favorite" className={navLinkStyle}>
          My List
        </NavLink>
      </div>

      <div className="flex items-center gap-3 sm:gap-4">
        <Search className="w-5 h-5 cursor-pointer hover:text-gray-300 transition" />

        <button onClick={toggleTheme}>
          {dark ? (
            <Sun className="w-5 h-5 cursor-pointer hover:text-gray-300 transition" />
          ) : (
            <Moon className="w-5 h-5 cursor-pointer hover:text-gray-300 transition" />
          )}
        </button>

        <Bell className="hidden sm:block w-5 h-5 cursor-pointer hover:text-gray-300 transition" />

        <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center cursor-pointer hover:bg-gray-500 transition">
          <User className="w-4 h-4" />
        </div>

        <button
          className="md:hidden ml-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 md:hidden z-50">
          <div className="flex flex-col gap-0 px-4 py-4">
            <NavLink
              to="/"
              className={mobileStyle}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/tvshows"
              className={mobileStyle}
              onClick={() => setMenuOpen(false)}
            >
              TV Shows
            </NavLink>
            <NavLink
              to="/movies"
              className={mobileStyle}
              onClick={() => setMenuOpen(false)}
            >
              Movies
            </NavLink>
            <NavLink
              to="/popular"
              className={mobileStyle}
              onClick={() => setMenuOpen(false)}
            >
              New & Popular
            </NavLink>
            <NavLink
              to="/favorite"
              className={mobileStyle}
              onClick={() => setMenuOpen(false)}
            >
              My List
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
