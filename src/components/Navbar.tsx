// components/Navbar.tsx
import { NavLink } from "react-router-dom";
import { Search, Bell, User } from "lucide-react";

export default function Navbar() {
  const navLinkStyle = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-white font-semibold border-b-2 border-red-600 pb-0.5"
      : "text-gray-300 hover:text-white transition font-semibold";

  return (
    <nav className="flex items-center justify-between bg-black px-10 py-4">
      {/* Logo */}
      <div className="flex items-center gap-10">
        <span
          className="text-[#E50914] font-black tracking-tight text-3xl"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          MOVIXPLORE
        </span>

        {/* Links */}
        <div className="flex gap-6 text-sm">
          <NavLink to="/" className={navLinkStyle}>Home</NavLink>
          <NavLink to="/tvshows" className={navLinkStyle}>TV Shows</NavLink>
          <NavLink to="/movies" className={navLinkStyle}>Movies</NavLink>
          <NavLink to="/popular" className={navLinkStyle}>New & Popular</NavLink>
          <NavLink to="/favorite" className={navLinkStyle}>My List</NavLink>
        </div>
      </div>

      {/* Right icons */}
      <div className="flex items-center gap-4 text-white">
        <Search className="w-5 h-5 cursor-pointer hover:text-gray-300 transition" />
        <Bell className="w-5 h-5 cursor-pointer hover:text-gray-300 transition" />
        <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center cursor-pointer">
          <User className="w-4 h-4" />
        </div>
      </div>
    </nav>
  );
}