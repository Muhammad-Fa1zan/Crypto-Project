const Navbar = () => {
    return (
      <nav className="w-full bg-zinc-900 text-zinc-100 shadow-md">
        <div className="w-full px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-xl font-bold text-zinc-100">CryptoTracker</div>
  
          {/* Nav Links */}
          <div className="hidden md:flex space-x-6 text-zinc-300 font-medium">
            <a href="#" className="hover:text-white transition">Home</a>
            <a href="#" className="hover:text-white transition">Market</a>
            <a href="#" className="hover:text-white transition">Portfolio</a>
            <a href="#" className="hover:text-white transition">About</a>
          </div>
  
          {/* Theme Toggle Placeholder */}
          <div className="flex items-center space-x-4">
            {/* Example Button */}
            <button className="bg-zinc-700 px-4 py-2 rounded-md text-sm hover:bg-zinc-600 transition">Connect Wallet</button>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  
