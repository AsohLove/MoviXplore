import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import { useState } from "react";

export default function DashboardLayout() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="min-h-screen bg-white text-black dark:bg-[#141414] dark:text-white transition-colors duration-300">
        <Navbar 
          query={searchQuery}
          setQuery={setSearchQuery}
        />
        <main className="flex-1 px-4 py-6">
            <Outlet context={{searchQuery}}/>
        </main>
        <footer className="flex justify-between mx-4">
          <h3 className="font-bold text-red-500 text-xl mt-5">MoviXplore</h3>
          <h3 className=" mt-5 text-green-300">All Rights Reserved &copy; {new Date().getFullYear()}</h3>
        </footer>
    </div>
  )
}
