import SEO from '../components/SEO';
import { Shield, Users, Heart, ChevronRight } from 'react-feather';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <SEO 
        title="Home"
        description="Tanzania Gaming Association - The voice of licensed gaming operators in Tanzania, promoting responsible growth of the industry."
        path="/"
      />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#05303c] to-[#0a4f64] text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to Tanzania Gaming Association</h1>
              <p className="text-xl mb-8">The voice of licensed gaming operators in Tanzania, working closely with the Gaming Board of Tanzania to promote responsible industry growth.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/membership" className="bg-[#ecb91e] text-[#05303c] px-8 py-3 rounded-lg font-semibold hover:bg-[#d4a51b] transition-colors">
                  Become a Member
                </Link>
                <Link to="/about" className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#05303c] transition-colors">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#05303c]">Our Commitment</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Shield className="text-[#ecb91e] mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-3 text-[#05303c]">Responsible Gaming</h3>
                <p className="text-gray-600">We champion responsible gaming practices, educating and protecting customers across Tanzania.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Users className="text-[#ecb91e] mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-3 text-[#05303c]">Industry Excellence</h3>
                <p className="text-gray-600">Driving innovation and best practices in the gaming industry through collaboration and standards.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Heart className="text-[#ecb91e] mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-3 text-[#05303c]">Community Impact</h3>
                <p className="text-gray-600">Actively supporting social causes with a positive impact on Tanzanian society.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Recent News */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#05303c]">Latest News</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img src="https://via.placeholder.com/400x250/05303c/ecb91e?text=News+1" alt="Tanzania gaming industry growth" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-[#05303c]">Tanzania Gaming Industry Shows Significant Growth</h3>
                  <p className="text-gray-600 mb-4">Latest reports indicate a 25% growth in the licensed gaming sector...</p>
                  <Link to="/news" className="text-[#ecb91e] hover:text-[#d4a51b] font-semibold flex items-center gap-2">
                    Read More <ChevronRight size={16} />
                  </Link>
                </div>
              </article>
              <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img src="https://via.placeholder.com/400x250/05303c/ecb91e?text=News+2" alt="New responsible gaming initiatives" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-[#05303c]">TGA Launches New Responsible Gaming Initiative</h3>
                  <p className="text-gray-600 mb-4">A comprehensive program to support players and promote safe gaming...</p>
                  <Link to="/news" className="text-[#ecb91e] hover:text-[#d4a51b] font-semibold flex items-center gap-2">
                    Read More <ChevronRight size={16} />
                  </Link>
                </div>
              </article>
              <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img src="https://via.placeholder.com/400x250/05303c/ecb91e?text=News+3" alt="Annual gaming conference" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-[#05303c]">Annual Gaming Conference Set for March 2025</h3>
                  <p className="text-gray-600 mb-4">Industry leaders to gather for discussions on regulation and innovation...</p>
                  <Link to="/news" className="text-[#ecb91e] hover:text-[#d4a51b] font-semibold flex items-center gap-2">
                    Read More <ChevronRight size={16} />
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
