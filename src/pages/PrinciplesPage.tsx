import SEO from '../components/SEO';
import { Shield, Heart, ChevronRight, Users } from 'react-feather';

const PrinciplesPage = () => {
  return (
    <>
      <SEO 
        title="Principles"
        description="Our core principles include responsible gambling, zero tolerance for fraud, and preventing underage gambling."
        path="/principles"
      />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-[#05303c]">Our Principles</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-8 text-gray-700">
            The Tanzania Gaming Association is dedicated to promoting a safe, secure, and reliable environment for all games of chance in Tanzania. 
            TGA members adhere to the following standards:
          </p>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-[#05303c] flex items-center gap-3">
                <Shield className="text-[#ecb91e]" size={32} />
                Taxation
              </h2>
              <p className="text-gray-700">
                In collaboration with the GBT, TGA advocates for clearly defined taxes and fees in the Gaming Act.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-[#af4f41] flex items-center gap-3">
                <Shield className="text-[#af4f41]" size={32} />
                Zero Tolerance for Fraud
              </h2>
              <p className="text-gray-700">
                TGA members have robust anti-money laundering policies.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-[#05303c] flex items-center gap-3">
                <Heart className="text-[#ecb91e]" size={32} />
                Responsible Gambling
              </h2>
              <p className="text-gray-700 mb-4">TGA members prioritize responsible gambling:</p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-2">
                  <ChevronRight className="text-[#ecb91e] mt-1 flex-shrink-0" size={20} />
                  <div>
                    <strong>Educating Customers:</strong> We inform customers about potential risks associated with games of chance.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="text-[#ecb91e] mt-1 flex-shrink-0" size={20} />
                  <div>
                    <strong>Providing Help Lines:</strong> Customers have access to helplines for gambling addiction assistance.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="text-[#ecb91e] mt-1 flex-shrink-0" size={20} />
                  <div>
                    <strong>Setting Limits:</strong> Customers can define daily, weekly, or monthly betting/deposit limits.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="text-[#ecb91e] mt-1 flex-shrink-0" size={20} />
                  <div>
                    <strong>Self-Exclusion:</strong> Customers can self-exclude from betting if needed.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="text-[#ecb91e] mt-1 flex-shrink-0" size={20} />
                  <div>
                    <strong>Employee Training:</strong> We implement the "It is possible to quit" program (developed by the EOGL) and train employees to recognize signs of gambling addiction.
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-[#af4f41] flex items-center gap-3">
                <Users className="text-[#af4f41]" size={32} />
                Preventing Underage Gambling
              </h2>
              <p className="text-gray-700 mb-4">
                Gambling under 18 is strictly prohibited. TGA members rigorously verify customer age through registration and verification processes. 
                Age limitations are clearly displayed on websites and in stores.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-[#05303c] flex items-center gap-3">
                <Users className="text-[#ecb91e]" size={32} />
                Employment Policy
              </h2>
              <p className="text-gray-700">
                TGA members only employ individuals over 18. Identification documents are verified for accuracy. 
                Staff are trained to use additional verification methods if initial procedures are inconclusive.
              </p>
            </div>

            <div className="bg-[#05303c] text-white p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Legal Operating License for a Safe and Reliable Environment</h2>
              <p>
                All TGA members must provide proof of a valid operating license issued by the Gaming Board of Tanzania.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrinciplesPage;
