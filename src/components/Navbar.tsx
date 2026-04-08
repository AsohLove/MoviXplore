import { NavLink } from "react-router-dom";
import { Search, Bell, User, Sun, Moon } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export default function Navbar() {
  const {dark, toggleTheme } = useTheme();

  const navLinkStyle = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? " font-semibold border-b-2 border-red-600 pb-0.5"
      : "hover:text-gray-700 transition font-semibold";

  return (
    <nav className="flex items-center justify-between bg-white dark:bg-black px-10 py-4 text-black dark:text-white">
      
      <div className="flex items-center gap-10">
        <span
          className="text-[#E50914] font-black tracking-tight text-3xl"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          MOVIXPLORE
        </span>

        
        <div className="flex gap-6 text-sm">
          <NavLink to="/" className={navLinkStyle}>Home</NavLink>
          <NavLink to="/tvshows" className={navLinkStyle}>TV Shows</NavLink>
          <NavLink to="/movies" className={navLinkStyle}>Movies</NavLink>
          <NavLink to="/popular" className={navLinkStyle}>New & Popular</NavLink>
          <NavLink to="/favorite" className={navLinkStyle}>My List</NavLink>
        </div>
      </div>

     
      <div className="flex items-center gap-4 text-black dark:text-white">
        <Search className="w-5 h-5 cursor-pointer hover:text-gray-300 transition" />

        <button onClick={toggleTheme}>
          {dark ? (
            <Sun className="w-5 h-5 cursor-pointer hover:text-gray-300 transition"/>
          ) : (
            <Moon className="w-5 h-5 cursor-pointer hover:text-gray-300 transition"/>
          )}
        </button>

        <Bell className="w-5 h-5 cursor-pointer hover:text-gray-300 transition" />
        <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center cursor-pointer">
          <User className="w-4 h-4" />
        </div>
      </div>
    </nav>
  );
}