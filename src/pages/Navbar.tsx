
import ModeToggle from "@/Context-theme/ModeToggle";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <nav className="w-full bg-zinc-900 text-zinc-100 shadow-md pr-[55px] ">
      <div className="w-full px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <NavLink to={'/'}><div className=" cursor-pointer text-xl font-bold text-zinc-100">CryptoTracker</div></NavLink>

        {/* Nav Links */}
        <div className=" cursor-pointer hidden md:flex space-x-6 text-zinc-300 font-medium">
          <a href="#" className="hover:text-white transition">Home</a>
          <a href="#" className="hover:text-white transition">Market</a>
          <a href="#" className="hover:text-white transition">Portfolio</a>
          <a href="#" className="hover:text-white transition">About</a>
        </div>

        {/* Theme Toggle Placeholder */}
        <div className="flex items-center space-x-4 cursor-pointer">
          {/* Example Button */}
          {isLoggedIn ?
            <NavLink onClick={() => setIsLoggedIn(false)} to={'/'}> <button className="bg-zinc-700 px-4 cursor-pointer py-2 rounded-md text-sm hover:bg-zinc-600 transition">Home</button></NavLink>
            : (
             <NavLink onClick={() => setIsLoggedIn(true)} to={'/login'}> <button className="bg-zinc-700 cursor-pointer px-4 py-2 rounded-md text-sm hover:bg-zinc-600 transition">Connect Wallet</button></NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

