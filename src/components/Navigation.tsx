// Navigation.tsx
import { NavLink } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "../App";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useTranslation();

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/regulations', label: t('nav.regulations') },
    { path: '/principles', label: t('nav.principles') },
    { path: '/membership', label: t('nav.membership') },
    { path: '/csr', label: t('nav.csr') },
    { path: '/news', label: t('nav.news') },
    { path: '/events', label: t('nav.events') },
    { path: '/contact', label: t('nav.contact') }
  ];

  return (
    <nav className="bg-[#05303c] text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-[#ecb91e] rounded flex items-center justify-center">
              <span className="text-[#05303c] font-bold text-xl">TGA</span>
            </div>
            <span className="font-semibold text-lg hidden sm:block">Tanzania Gaming Association</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            {navItems.map(item => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => 
                  `hover:text-[#ecb91e] transition-colors text-sm xl:text-base whitespace-nowrap ${isActive ? 'text-[#ecb91e]' : ''}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            
            {/* Language Dropdown */}
            <div className="relative group ml-2">
              <button 
                className="flex items-center gap-1.5 px-3 py-1.5 bg-[#ecb91e] text-[#05303c] rounded-md hover:bg-[#d4a51b] transition-all duration-200 text-sm font-medium"
                aria-label="Select language"
              >
                <Globe size={16} />
                <span>{language === 'en' ? 'EN' : 'SW'}</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className="absolute right-0 mt-1 w-32 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <button
                  onClick={() => setLanguage('en')}
                  className={`block w-full text-left px-3 py-2 text-sm font-medium transition-colors ${
                    language === 'en' 
                      ? 'bg-[#ecb91e] text-[#05303c]' 
                      : 'text-gray-700 hover:bg-gray-50'
                  } first:rounded-t-md`}
                >
                  English
                </button>
                <button
                  onClick={() => setLanguage('sw')}
                  className={`block w-full text-left px-3 py-2 text-sm font-medium transition-colors ${
                    language === 'sw' 
                      ? 'bg-[#ecb91e] text-[#05303c]' 
                      : 'text-gray-700 hover:bg-gray-50'
                  } last:rounded-b-md`}
                >
                  Kiswahili
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-700">
            <ul className="py-4">
              {navItems.map(item => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) => 
                      `block py-2 px-4 hover:text-[#ecb91e] transition-colors ${isActive ? 'text-[#ecb91e]' : ''}`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            
            {/* Language Dropdown Mobile */}
            <div className="px-4 pb-4">
              <div className="relative group">
                <button 
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-[#ecb91e] text-[#05303c] rounded-md hover:bg-[#d4a51b] transition-all duration-200 text-sm font-medium w-full justify-center"
                  aria-label="Select language"
                >
                  <Globe size={16} />
                  <span>{language === 'en' ? 'English' : 'Kiswahili'}</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div className="absolute left-0 right-0 mt-1 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <button
                    onClick={() => {
                      setLanguage('en');
                      setIsOpen(false);
                    }}
                    className={`block w-full text-center px-3 py-2 text-sm font-medium transition-colors ${
                      language === 'en' 
                        ? 'bg-[#ecb91e] text-[#05303c]' 
                        : 'text-gray-700 hover:bg-gray-50'
                    } first:rounded-t-md`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => {
                      setLanguage('sw');
                      setIsOpen(false);
                    }}
                    className={`block w-full text-center px-3 py-2 text-sm font-medium transition-colors ${
                      language === 'sw' 
                        ? 'bg-[#ecb91e] text-[#05303c]' 
                        : 'text-gray-700 hover:bg-gray-50'
                    } last:rounded-b-md`}
                  >
                    Kiswahili
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;