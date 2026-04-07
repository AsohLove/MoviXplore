import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-[#141414] dark:text-white transition-colors duration-300">
        <Navbar />
        <main>
            <Outlet />
        </main>
    </div>
  )
}
