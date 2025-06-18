import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { X, Menu } from "react-feather";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#05303c] text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-[#ecb91e] rounded flex items-center justify-center">
              <span className="text-[#05303c] font-bold text-xl">TGA</span>
            </div>
            <span className="font-semibold text-lg hidden sm:block">Tanzania Gaming Association</span>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className={`absolute top-20 left-0 right-0 bg-[#05303c] lg:static lg:block ${isOpen ? 'block' : 'hidden'}`}>
            <ul className="flex flex-col lg:flex-row lg:space-x-6 p-4 lg:p-0">
              <li><NavLink to="/" className={({ isActive }) => `block py-2 lg:py-0 hover:text-[#ecb91e] transition-colors ${isActive ? 'text-[#ecb91e]' : ''}`}>Home</NavLink></li>
              <li><NavLink to="/about" className={({ isActive }) => `block py-2 lg:py-0 hover:text-[#ecb91e] transition-colors ${isActive ? 'text-[#ecb91e]' : ''}`}>About Us</NavLink></li>
              <li><NavLink to="/regulations" className={({ isActive }) => `block py-2 lg:py-0 hover:text-[#ecb91e] transition-colors ${isActive ? 'text-[#ecb91e]' : ''}`}>Regulations</NavLink></li>
              <li><NavLink to="/principles" className={({ isActive }) => `block py-2 lg:py-0 hover:text-[#ecb91e] transition-colors ${isActive ? 'text-[#ecb91e]' : ''}`}>Principles</NavLink></li>
              <li><NavLink to="/membership" className={({ isActive }) => `block py-2 lg:py-0 hover:text-[#ecb91e] transition-colors ${isActive ? 'text-[#ecb91e]' : ''}`}>Membership</NavLink></li>
              <li><NavLink to="/csr" className={({ isActive }) => `block py-2 lg:py-0 hover:text-[#ecb91e] transition-colors ${isActive ? 'text-[#ecb91e]' : ''}`}>CSR</NavLink></li>
              <li><NavLink to="/news" className={({ isActive }) => `block py-2 lg:py-0 hover:text-[#ecb91e] transition-colors ${isActive ? 'text-[#ecb91e]' : ''}`}>News</NavLink></li>
              <li><NavLink to="/events" className={({ isActive }) => `block py-2 lg:py-0 hover:text-[#ecb91e] transition-colors ${isActive ? 'text-[#ecb91e]' : ''}`}>Events</NavLink></li>
              <li><NavLink to="/contact" className={({ isActive }) => `block py-2 lg:py-0 hover:text-[#ecb91e] transition-colors ${isActive ? 'text-[#ecb91e]' : ''}`}>Contact</NavLink></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;