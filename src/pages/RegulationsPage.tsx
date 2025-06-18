import SEO from '../components/SEO';
import { FiDownload as Download } from 'react-icons/fi';

const RegulationsPage = () => {
  return (
    <>
      <SEO 
        title="Regulations"
        description="Access gaming regulations, acts, and constitution documents for Tanzania's gaming industry."
        path="/regulations"
      />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-[#05303c]">Regulations</h1>
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          <p className="text-lg mb-8 text-gray-700">
            Access important regulatory documents governing the gaming industry in Tanzania.
          </p>
          
          <div className="space-y-4">
            <div className="border-l-4 border-[#ecb91e] pl-6 py-4 hover:bg-gray-50 transition-colors">
              <h3 className="text-xl font-semibold mb-2 text-[#05303c]">Gaming Act</h3>
              <p className="text-gray-600 mb-3">The primary legislation governing gaming operations in Tanzania.</p>
              <a href="/documents/gaming-act.pdf" className="inline-flex items-center gap-2 text-[#ecb91e] hover:text-[#d4a51b] font-semibold">
                <Download size={20} />
                Download PDF
              </a>
            </div>
            
            <div className="border-l-4 border-[#ecb91e] pl-6 py-4 hover:bg-gray-50 transition-colors">
              <h3 className="text-xl font-semibold mb-2 text-[#05303c]">TGA Constitution</h3>
              <p className="text-gray-600 mb-3">The constitution governing the Tanzania Gaming Association.</p>
              <a href="/documents/tga-constitution.pdf" className="inline-flex items-center gap-2 text-[#ecb91e] hover:text-[#d4a51b] font-semibold">
                <Download size={20} />
                Download PDF
              </a>
            </div>
            
            <div className="border-l-4 border-[#ecb91e] pl-6 py-4 hover:bg-gray-50 transition-colors">
              <h3 className="text-xl font-semibold mb-2 text-[#05303c]">Other Regulatory Documents</h3>
              <p className="text-gray-600 mb-3">Additional regulations and guidelines for the gaming industry.</p>
              <a href="/documents/other-regulations.pdf" className="inline-flex items-center gap-2 text-[#ecb91e] hover:text-[#d4a51b] font-semibold">
                <Download size={20} />
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegulationsPage;
