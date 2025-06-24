// App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, createContext, useContext, useState } from "react";
import Navigation from "./components/Navigation";
import GoogleAnalytics from "./components/GoogleAnalytics"; 
import HomePage from "./pages/HomePage"; 
import AboutPage from "./pages/AboutPage"; 
import RegulationsPage from "./pages/RegulationsPage"; 
import MembershipPage from "./pages/MembershipPage"; 
import CSRPage from "./pages/CSRPage"; 
import PrinciplesPage from "./pages/PrinciplesPage"; 
import NewsPage from "./pages/NewsPage"; 
import EventsPage from "./pages/EventsPage"; 
import ResponsibleGamingPage from "./pages/ResponsibleGamingPage"; 
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer"; 

// Import translations from separate file
import { translations, getTranslation } from "./locales/translations";

// Language Context
interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key
});

// Language Provider
const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  // Check for saved language preference or default to English
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('tga-language');
    return saved || 'en';
  });

  // Save language preference when it changes
  const handleSetLanguage = (lang: string) => {
    setLanguage(lang);
    localStorage.setItem('tga-language', lang);
  };

  // Translation function
  const t = (key: string) => getTranslation(language, key);

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage: handleSetLanguage, 
      t 
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Export the useTranslation hook
export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};

// Main App Component
function App() {
  return (
    <Router>
      <LanguageProvider>
        <div className="min-h-screen flex flex-col bg-gray-50">
          <Suspense fallback={null}>
            <GoogleAnalytics />
          </Suspense>
          
          <Navigation />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/regulations" element={<RegulationsPage />} />
              <Route path="/principles" element={<PrinciplesPage />} />
              <Route path="/membership" element={<MembershipPage />} />
              <Route path="/csr" element={<CSRPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/responsible-gaming" element={<ResponsibleGamingPage />} />
            </Routes>
          </main>
          
          <Footer />
        </div>
      </LanguageProvider>
    </Router>
  );
}

export default App;