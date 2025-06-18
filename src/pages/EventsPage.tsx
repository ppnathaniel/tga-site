import SEO from '../components/SEO';
import { ExternalLink } from 'react-feather';

const EventsPage = () => {
  return (
    <>
      <SEO 
        title="Events"
        description="View past and upcoming events hosted by Tanzania Gaming Association including AGMs and trade fairs."
        path="/events"
      />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-[#05303c]">Events</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-6 text-[#05303c]">Past Events</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src="https://via.placeholder.com/600x400/05303c/ecb91e?text=AGM+2023" 
                  alt="AGM 2023 Event"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-[#05303c]">AGM 2023</h3>
                  <p className="text-gray-700 mb-4">Annual General Meeting bringing together all TGA members for strategic planning and review.</p>
                  <a 
                    href="https://photos.google.com/share/AF1QipM5BGEcO14l_Gq28lEPhB4f3pvwvH_FkZfiR_fz-ezPEVEk__aY3Gg-4FMNbb-9bw?key=czEzT2E3OFIxTFh5ZjA2a1ZOWmlvVWpVLUZITDlR" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#ecb91e] hover:text-[#d4a51b] font-semibold"
                  >
                    View Photos <ExternalLink size={16} />
                  </a>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src="https://via.placeholder.com/600x400/af4f41/ffffff?text=Sabasaba+2024" 
                  alt="Sabasaba 2024 Trade Fair"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-[#05303c]">2024 Dar es Salaam International Trade Fair - Sabasaba</h3>
                  <p className="text-gray-700 mb-4">TGA participation in the annual Sabasaba trade fair showcasing responsible gaming initiatives.</p>
                  <a 
                    href="https://dstudioz89.pixieset.com/gbtsabasaba2024/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#ecb91e] hover:text-[#d4a51b] font-semibold"
                  >
                    View Photos <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          </section>
          
          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6 text-[#05303c]">Upcoming Events</h2>
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <p className="text-gray-600">Check back soon for announcements about upcoming events and conferences.</p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default EventsPage;