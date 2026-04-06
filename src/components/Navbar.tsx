import { NavLink } from "react-router";

export default function Navbar() {
  const navLinkStyle = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-white underline-orange font-bold"
      : "text-gray-700 font-semibold";

  return (
    <div>
      <span
        className="text-[#E50914] font-black tracking-tight text-4xl"
        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
      >
        NETFLIX
      </span>
      <nav className="flex gap-4 bg-black p-4">
        <NavLink to="/" className={navLinkStyle}>
          Home
        </NavLink>
        <NavLink to="tvshow" className={navLinkStyle}>
          TV Shows
        </NavLink>
        <NavLink to="movies" className={navLinkStyle}>
          Movies
        </NavLink>
        <NavLink to="popular" className={navLinkStyle}>
          New & Popular
        </NavLink>
        <NavLink to="favorite" className={navLinkStyle}>
          My List
        </NavLink>
      </nav>
    </div>
  );
}
