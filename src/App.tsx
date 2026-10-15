import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Blog } from './pages/Blog';
import { Portfolio } from './pages/Portfolio';
import { Gallery } from './pages/Gallery';
import { Careers } from './pages/Careers';
import { OfficeStaffRecruitment } from './pages/OfficeStaffRecruitment';
import { AdminApplications } from './pages/AdminApplications';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { NotFound } from './pages/NotFound';
import { BulletproofSheet } from './pages/services/BulletproofSheet';
import { RealEstate } from './pages/services/RealEstate';
import { Granite } from './pages/services/Granite';
import { MinesMinerals } from './pages/services/MinesMinerals';
import { SpongeIron } from './pages/services/SpongeIron';
import { MineralsTrading } from './pages/services/MineralsTrading';
import { ScrollToTop } from './components/ScrollToTop';
import { FooterCTA } from './components/FooterCTA';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-accent selection:text-primary">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          {/* Main Core Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/office-staff-recruitment" element={<OfficeStaffRecruitment />} />

          {/* Clean URL Structure for Divisions */}
          <Route path="/mining" element={<MinesMinerals />} />
          <Route path="/minerals" element={<MineralsTrading />} />
          <Route path="/sponge-iron" element={<SpongeIron />} />
          <Route path="/granite" element={<Granite />} />
          <Route path="/bulletproof-sheets" element={<BulletproofSheet />} />
          <Route path="/real-estate-infrastructure" element={<RealEstate />} />

          {/* Legacy /services routes with seamless mapping */}
          <Route path="/services/mines-minerals" element={<MinesMinerals />} />
          <Route path="/services/sponge-iron" element={<SpongeIron />} />
          <Route path="/services/granite" element={<Granite />} />
          <Route path="/services/bulletproof-sheet-manufacturing" element={<BulletproofSheet />} />
          <Route path="/services/real-estate-infrastructure" element={<RealEstate />} />

          {/* Projects & Media */}
          <Route path="/projects" element={<Portfolio />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/gallery" element={<Gallery />} />

          {/* News & Blog */}
          <Route path="/news" element={<Blog />} />
          <Route path="/blog" element={<Blog />} />

          {/* Legal Pages */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />

          {/* Admin Management */}
          <Route path="/admin" element={<AdminApplications />} />
          <Route path="/admin/applications" element={<AdminApplications />} />
          <Route path="/admin/jobs" element={<AdminApplications />} />

          {/* 404 Route */}
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <FooterCTA />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}
