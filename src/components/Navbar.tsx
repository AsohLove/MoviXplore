import { NavLink } from "react-router";

export default function Navbar(){
    return (
        <div>
            <h1>NETFLIX</h1>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/">TV Shows</NavLink>
                <NavLink to="/">Movies</NavLink>
                <NavLink to="/">New & Popular</NavLink>
                <NavLink to="favorite">My List</NavLink>
            </nav>
        </div>
    )
}