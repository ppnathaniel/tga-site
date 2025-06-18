import SEO from '../components/SEO';
import { ChevronRight } from 'lucide-react';

const ResponsibleGamingPage = () => {
  return (
    <>
      <SEO 
        title="Responsible Gaming"
        description="TGA's commitment to responsible gaming - education, support, and prevention of gambling addiction in Tanzania."
        path="/responsible-gaming"
      />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-[#05303c]">Responsible Gaming and Prevention of Addiction</h1>
        
        <div className="prose max-w-none">
          <div className="bg-[#af4f41] text-white p-8 rounded-lg mb-8">
            <p className="text-lg">
              TGA is committed to promoting a responsible gaming environment for all users, whether online or in-store. 
              Gaming should be a socially enjoyable source of entertainment. TGA members ensure access to safe and advanced gaming platforms 
              and provide responsible gaming education to both staff and players.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold mb-6 text-[#05303c]">Support for Players</h2>
            <p className="text-gray-700 mb-4">
              Measures are in place to support players exhibiting excessive gaming behaviors, including online and in-person counseling.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-6 text-[#05303c]">Player Guidelines</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <ChevronRight className="text-[#ecb91e] mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Set and adhere to budgets.</span>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="text-[#ecb91e] mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Set deposit and betting limits.</span>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="text-[#ecb91e] mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Take regular breaks to avoid compulsive gaming.</span>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="text-[#ecb91e] mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Seek help if a gaming problem is suspected.</span>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="text-[#ecb91e] mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Utilize self-exclusion options to control gaming habits.</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#05303c] text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
            <p className="mb-4">
              If you or someone you know is struggling with gambling addiction, help is available. 
              Contact our support services or speak with a trained professional.
            </p>
            <button className="bg-[#ecb91e] text-[#05303c] px-6 py-3 rounded-lg font-semibold hover:bg-[#d4a51b] transition-colors">
              Get Support Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResponsibleGamingPage;
