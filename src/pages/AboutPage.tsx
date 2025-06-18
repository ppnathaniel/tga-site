import SEO from '../components/SEO';

const AboutPage = () => {
  return (
    <>
      <SEO 
        title="About Us"
        description="Learn about Tanzania Gaming Association - established in 2017 as the voice of licensed gaming operators in Tanzania."
        path="/about"
      />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-[#05303c]">About Tanzania Gaming Association</h1>
        
        <div className="prose max-w-none">
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <p className="text-lg mb-6 text-gray-700">
              Established in 2017, the Tanzania Gaming Association (TGA) is the voice of licensed gaming operators in Tanzania. 
              We work closely with the Gaming Board of Tanzania (GBT) to promote the responsible growth of the industry.
            </p>
            <p className="text-gray-700 mb-6">
              Our association is governed by a council of up to eight members who oversee operations, with a dedicated staff managing day-to-day activities.
            </p>
            <p className="text-gray-700">
              <strong>About Our Members:</strong> TGA's members include slot, land-based casino and sports betting operators in Tanzania.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-[#05303c] text-white p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p>
                To create a level playing field for all operators, fostering fair competition and a sustainable future. 
                We prioritize responsible gaming practices and believe our contributions enhance Tanzania's sports culture and infrastructure.
              </p>
            </div>
            
            <div className="bg-[#ecb91e] text-[#05303c] p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <ul className="space-y-3">
                <li><strong>Responsible Gaming:</strong> Champion responsible practices</li>
                <li><strong>Industry Excellence:</strong> Drive innovation and standards</li>
                <li><strong>Collaboration:</strong> Work with regulators and members</li>
                <li><strong>Community Impact:</strong> Support social causes</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#05303c]">Mission Statements</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-[#af4f41] mb-2">Responsible Gaming</h3>
                <p className="text-gray-700">
                  We champion responsible gaming practices, educating and protecting customers. 
                  We believe sports betting should be enjoyed as entertainment, within one's means.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#af4f41] mb-2">Industry Excellence and Innovation</h3>
                <p className="text-gray-700">
                  TGA drives innovation in sports betting, leveraging technology and best practices. 
                  We promote customer experience, data security, responsible gaming tools, and industry standards with stakeholders.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#af4f41] mb-2">Collaboration with Regulators and Members</h3>
                <p className="text-gray-700">
                  We collaborate with regulators and members to ensure fairness, voluntary compliance, equity, and accountability. 
                  We believe a strong industry benefits all.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#af4f41] mb-2">Community and Social Responsibility</h3>
                <p className="text-gray-700">
                  We actively support social causes with a positive impact on Tanzanian society.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
