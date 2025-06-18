import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
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

// Main App Component
function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;