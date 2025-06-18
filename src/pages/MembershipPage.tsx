import SEO from '../components/SEO';
import { ChevronRight } from 'react-feather';
import { Link } from 'react-router-dom';

const MembershipPage = () => {
  return (
    <>
      <SEO 
        title="TGA Membership"
        description="Join Tanzania Gaming Association - requirements, benefits, and application process for licensed gaming operators."
        path="/membership"
      />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-[#05303c]">TGA Membership</h1>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-[#05303c]">Membership Requirements</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <ChevronRight className="text-[#ecb91e] mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Certificate of Incorporation</span>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="text-[#ecb91e] mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">TIN Certificate</span>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="text-[#ecb91e] mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Principal Business License</span>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="text-[#ecb91e] mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Memorandum and Articles of Association</span>
              </li>
            </ul>
            <p className="mt-6 text-gray-600">
              The Board of Directors will review your application, and upon approval, you will be required to pay a minimum six-month fee.
            </p>
          </div>

          <div className="bg-[#ecb91e] text-[#05303c] p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Membership Benefits</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <ChevronRight className="mt-1 flex-shrink-0" size={20} />
                <span>Networking opportunities with industry professionals, experts, and stakeholders</span>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="mt-1 flex-shrink-0" size={20} />
                <span>Regulatory support to navigate complex regulations and compliance issues</span>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="mt-1 flex-shrink-0" size={20} />
                <span>Advocacy and representation to address industry challenges</span>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="mt-1 flex-shrink-0" size={20} />
                <span>Training opportunities on industry trends and best practices</span>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="mt-1 flex-shrink-0" size={20} />
                <span>Collaboration on projects that benefit the sports betting ecosystem</span>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="mt-1 flex-shrink-0" size={20} />
                <span>Enhanced credibility and reputation within the industry</span>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="mt-1 flex-shrink-0" size={20} />
                <span>Industry updates on the latest developments and market trends</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-[#05303c] text-white p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Become a Member and Join a Strong Voice</h2>
          <p className="text-lg mb-6">
            Are you a licensed sports betting operator seeking industry support and a strong voice? Apply for TGA membership today!
          </p>
          <Link to="/contact" className="inline-block bg-[#ecb91e] text-[#05303c] px-8 py-3 rounded-lg font-semibold hover:bg-[#d4a51b] transition-colors">
            Apply Now
          </Link>
        </div>
      </div>
    </>
  );
};

export default MembershipPage;
