import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Blog } from './pages/Blog';
import { Portfolio } from './pages/Portfolio';
import { BulletproofSheet } from './pages/services/BulletproofSheet';
import { RealEstate } from './pages/services/RealEstate';
import { Granite } from './pages/services/Granite';
import { MinesMinerals } from './pages/services/MinesMinerals';
import { SpongeIron } from './pages/services/SpongeIron';
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
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services/bulletproof-sheet-manufacturing" element={<BulletproofSheet />} />
          <Route path="/services/real-estate-infrastructure" element={<RealEstate />} />
          <Route path="/services/granite" element={<Granite />} />
          <Route path="/services/mines-minerals" element={<MinesMinerals />} />
          <Route path="/services/sponge-iron" element={<SpongeIron />} />
        </Routes>
      </main>
      <FooterCTA />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}
