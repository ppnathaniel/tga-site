import { useState } from "react";
import SEO from "../components/SEO";
import { MapPin, Mail, Phone } from "react-feather";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon!');
  };

  return (
    <>
      <SEO 
        title="Contact Us"
        description="Contact Tanzania Gaming Association - Get in touch with us for membership, regulatory support, or general inquiries."
        path="/contact"
      />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-[#05303c]">Contact Us</h1>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-[#05303c]">Get in Touch</h2>
            <p className="text-gray-700 mb-8">
              Have questions about membership, regulations, or our initiatives? We're here to help. 
              Reach out to us using the contact information below or fill out the form.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="text-[#ecb91e] mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-[#05303c]">Address</h3>
                  <p className="text-gray-700">
                    84 Kinondoni, Kinondoni Road<br />
                    P.O Box 13464, Dar es Salaam
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Mail className="text-[#ecb91e] mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-[#05303c]">Email</h3>
                  <a href="mailto:info@tga.co.tz" className="text-[#ecb91e] hover:text-[#d4a51b]">
                    info@tga.co.tz
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="text-[#ecb91e] mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-[#05303c]">Phone</h3>
                  <p className="text-gray-700">+255 XX XXX XXXX</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-[#05303c]">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ecb91e] focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ecb91e] focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ecb91e] focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ecb91e] focus:border-transparent"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#ecb91e] text-[#05303c] py-3 rounded-lg font-semibold hover:bg-[#d4a51b] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;