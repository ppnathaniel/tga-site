import SEO from '../components/SEO';
import { Heart, Shield, Users, ChevronRight } from 'react-feather';

const CSRPage = () => {
  return (
    <>
      <SEO 
        title="Corporate Social Responsibility"
        description="TGA's CSR programs focus on health, environment, responsible gaming, and sports initiatives in Tanzania."
        path="/csr"
      />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-[#05303c]">Corporate Social Responsibility</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-8 text-gray-700">
            We actively support social causes with a positive impact on Tanzanian society through various CSR programs.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="text-[#af4f41]" size={32} />
                <h2 className="text-2xl font-bold text-[#05303c]">Health</h2>
              </div>
              <p className="text-gray-700">Supporting healthcare initiatives and promoting healthy lifestyles in communities across Tanzania.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="text-[#ecb91e]" size={32} />
                <h2 className="text-2xl font-bold text-[#05303c]">Environment</h2>
              </div>
              <p className="text-gray-700">Environmental conservation efforts and sustainable practices for a greener Tanzania.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Users className="text-[#af4f41]" size={32} />
                <h2 className="text-2xl font-bold text-[#05303c]">Responsible Gaming</h2>
              </div>
              <p className="text-gray-700">Addressing mental health issues among youth and promoting responsible gaming practices.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="text-[#ecb91e]" size={32} />
                <h2 className="text-2xl font-bold text-[#05303c]">Sports</h2>
              </div>
              <p className="text-gray-700">Supporting local sports development and youth athletic programs throughout Tanzania.</p>
            </div>
          </div>

          <div className="bg-[#05303c] text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Notable Initiatives</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <ChevronRight className="text-[#ecb91e] mt-1 flex-shrink-0" size={20} />
                <span>Support for Tembo Warriors and Twiga Stars in their respective 2021 World Cup Tournaments</span>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="text-[#ecb91e] mt-1 flex-shrink-0" size={20} />
                <span>Sponsorship of the 2024 Tulia Marathon</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CSRPage;
