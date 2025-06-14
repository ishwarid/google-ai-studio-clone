import { KeyRound, ExternalLink, Settings } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const TopNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-zinc-900 border-b border-zinc-800 px-6 py-3 flex items-center justify-between shadow-sm">
      {/* Logo */}
      <h1 className="text-lg font-sans bg-gradient-to-l from-blue-100 via-blue-100 to-cyan-100 bg-clip-text text-transparent">
        Google AI Studio
      </h1>

      {/* Right Controls */}
      <div className="flex items-center gap-4 text-sm text-zinc-300">
        {/* Get API Key Button */}
        <button className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-1.5 rounded-full transition focus:outline-none focus:ring-2 focus:ring-blue-600">
          <KeyRound size={14} />
          Get API key
        </button>

        {/* Navigation */}
        <nav className="flex items-center gap-3">
          <Link
            to="/"
            className={`transition cursor-pointer hover:text-white ${
              isActive("/") ? "text-white font-medium" : "text-zinc-400"
            }`}
          >
            Studio
          </Link>
          <Link
            to="/dashboard"
            className={`transition cursor-pointer hover:text-white ${
              isActive("/dashboard") ? "text-white font-medium" : "text-zinc-400"
            }`}
          >
            Dashboard
          </Link>
          <span className="hover:underline cursor-pointer flex items-center gap-1 text-zinc-400 hover:text-white transition">
            Documentation <ExternalLink size={12} />
          </span>
        </nav>

        {/* Settings */}
        <Settings className="cursor-pointer hover:text-white transition" size={18} />

        {/* Avatar */}
        <div className="relative">
          <button
            onClick={() => setShowMenu((prev) => !prev)}
            className="w-8 h-8 rounded-full bg-zinc-500 hover:bg-zinc-400 text-white flex items-center justify-center text-sm font-semibold transition"
          >
            I
          </button>

          {/* Dropdown */}
          {showMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-zinc-800 border border-zinc-700 rounded shadow-md py-2 text-sm">
              <div className="px-4 py-2 hover:bg-zinc-700 cursor-pointer">Profile</div>
              <div className="px-4 py-2 hover:bg-zinc-700 cursor-pointer">Settings</div>
              <div className="px-4 py-2 hover:bg-zinc-700 cursor-pointer text-red-400">Logout</div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default TopNavbar;
