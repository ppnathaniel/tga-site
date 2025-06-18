import SEO from '../components/SEO';
import { Calendar, ChevronRight } from 'react-feather';

const NewsPage = () => {
  const newsItems = [
    {
      id: 1,
      title: "Tanzania Gaming Industry Shows Significant Growth",
      date: "June 15, 2025",
      excerpt: "Latest reports indicate a 25% growth in the licensed gaming sector, demonstrating the positive impact of regulation and responsible gaming practices.",
      image: "https://via.placeholder.com/800x400/05303c/ecb91e?text=Gaming+Growth"
    },
    {
      id: 2,
      title: "TGA Launches New Responsible Gaming Initiative",
      date: "June 10, 2025",
      excerpt: "A comprehensive program to support players and promote safe gaming practices across all member operators.",
      image: "https://via.placeholder.com/800x400/af4f41/ffffff?text=Responsible+Gaming"
    },
    {
      id: 3,
      title: "Annual Gaming Conference Set for March 2025",
      date: "June 5, 2025",
      excerpt: "Industry leaders to gather for discussions on regulation, innovation, and the future of gaming in Tanzania.",
      image: "https://via.placeholder.com/800x400/ecb91e/05303c?text=Conference+2025"
    },
    {
      id: 4,
      title: "New Member Benefits Package Announced",
      date: "May 28, 2025",
      excerpt: "TGA introduces enhanced benefits for members including training programs and regulatory support services.",
      image: "https://via.placeholder.com/800x400/05303c/ecb91e?text=Member+Benefits"
    }
  ];

  return (
    <>
      <SEO 
        title="News"
        description="Stay updated with the latest news and developments from Tanzania Gaming Association and the gaming industry."
        path="/news"
      />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-[#05303c]">Latest News</h1>
        
        <div className="space-y-8">
          {newsItems.map(item => (
            <article key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="md:flex">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="md:w-1/3 h-48 md:h-auto object-cover"
                />
                <div className="p-6 md:w-2/3">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Calendar size={16} />
                    <time>{item.date}</time>
                  </div>
                  <h2 className="text-2xl font-bold mb-3 text-[#05303c]">{item.title}</h2>
                  <p className="text-gray-700 mb-4">{item.excerpt}</p>
                  <button className="text-[#ecb91e] hover:text-[#d4a51b] font-semibold flex items-center gap-2">
                    Read Full Article <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600">Stay updated with the latest industry news.</p>
        </div>
      </div>
    </>
  );
};

export default NewsPage;
