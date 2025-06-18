import { Link } from 'react-router-dom';
import { MapPin, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#05303c] text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">About TGA</h3>
            <p className="text-sm text-gray-300">The voice of licensed gaming operators in Tanzania, promoting responsible growth of the industry.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-[#ecb91e] transition-colors">About Us</Link></li>
              <li><Link to="/membership" className="hover:text-[#ecb91e] transition-colors">Become a Member</Link></li>
              <li><Link to="/responsible-gaming" className="hover:text-[#ecb91e] transition-colors">Responsible Gaming</Link></li>
              <li><Link to="/contact" className="hover:text-[#ecb91e] transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>84 Kinondoni, Kinondoni Road<br />P.O Box 13464, Dar es Salaam</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:info@tga.co.tz" className="hover:text-[#ecb91e] transition-colors">info@tga.co.tz</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#ecb91e] transition-colors" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" className="hover:text-[#ecb91e] transition-colors" aria-label="Twitter"><Twitter size={20} /></a>
              <a href="#" className="hover:text-[#ecb91e] transition-colors" aria-label="LinkedIn"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-[#ecb91e] transition-colors" aria-label="Instagram"><Instagram size={20} /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Tanzania Gaming Association. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;