import { useState, useEffect } from 'react';
import { Search, Globe, Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const isDarkNavbar = isScrolled || !isHomePage || isMobileMenuOpen;
  
  // Floating pill layout styles matching the mobile layout screenshot
  const isTransparent = isHomePage && !isScrolled && !isMobileMenuOpen;
  
  // Attached full-width liquid glass header styles
  const headerClasses = isTransparent
    ? 'fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 bg-[#F5F7FA]/10 backdrop-blur-md text-slate-900 border-b border-slate-200/50 py-4 px-6 md:px-12 flex items-center justify-between'
    : 'fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 bg-white/90 backdrop-blur-xl text-slate-900 border-b border-slate-200 shadow-sm py-3.5 px-6 md:px-12 flex items-center justify-between';

  const textColor = 'text-slate-900';
  const textColorDim = 'text-slate-600 hover:text-slate-900';

  return (
    <>
      <header className={headerClasses}>
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className={`flex items-center gap-1.5 ${textColor} transition-colors relative z-50`}>
            <div className="w-10 h-10 md:w-11 md:h-11 overflow-hidden shrink-0 relative flex items-center justify-center">
              <img 
                src="https://vennky.sirv.com/ChatGPT%20Image%20Jul%208%2C%202026%2C%2007_31_28%20PM.png" 
                alt="Harrsha Logo" 
                className="h-full w-full object-contain scale-[2.1]"
              />
            </div>
            <span className="font-semibold tracking-[0.06em] text-sm md:text-base font-sans">
              HARRSHAGLOBAL
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 relative z-50">
            <Link to="/" className={`${textColorDim} transition-colors text-xs font-medium tracking-widest uppercase`}>HOME</Link>
            <Link to="/about" className={`${textColorDim} transition-colors text-xs font-medium tracking-widest uppercase`}>ABOUT US</Link>
            
            <div className="relative group">
              <button className={`flex items-center gap-1 ${textColorDim} transition-colors text-xs font-medium tracking-widest uppercase py-6`}>
                SERVICES <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[1050px] pt-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="bg-white border border-slate-200 p-8 grid grid-cols-3 gap-8 shadow-xl rounded-2xl mt-2">
                  <Link to="/services/bulletproof-sheet-manufacturing" className="group/item">
                    <h4 className="text-slate-900 font-medium mb-2 group-hover/item:text-blue-600 transition-colors">Bulletproof Sheet Manufacturing</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">Advanced protective sheet manufacturing for defense, industrial safety, and high-security infrastructure.</p>
                  </Link>
                  <Link to="/services/real-estate-infrastructure" className="group/item">
                    <h4 className="text-slate-900 font-medium mb-2 group-hover/item:text-blue-600 transition-colors">Real Estate & Infrastructure</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">End-to-end real estate solutions – from planning to construction. We develop residential, commercial, and industrial properties with structural integrity.</p>
                  </Link>
                  <Link to="/services/granite" className="group/item">
                    <h4 className="text-slate-900 font-medium mb-2 group-hover/item:text-blue-600 transition-colors">Granite</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">Premium-grade Black Galaxy & SK Blue granite extracted from certified quarries in Chimakurthi & Tekkali.</p>
                  </Link>
                  <Link to="/services/mines-minerals" className="group/item">
                    <h4 className="text-slate-900 font-medium mb-2 group-hover/item:text-blue-600 transition-colors">Mines & Minerals</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">Sustainable exploration and extraction of essential minerals. We ensure regulatory compliance and ecological responsibility.</p>
                  </Link>
                  <Link to="/services/sponge-iron" className="group/item">
                    <h4 className="text-slate-900 font-medium mb-2 group-hover/item:text-blue-600 transition-colors">Sponge Iron Mini Steel Plant</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">State-of-the-art 100,000 MT per year direct reduction iron (DRI) plant operating in Anakapalli, Visakhapatnam.</p>
                  </Link>
                </div>
              </div>
            </div>

            <Link to="/portfolio" className={`${textColorDim} transition-colors text-xs font-medium tracking-widest uppercase`}>PORTFOLIO</Link>
            <Link to="/blog" className={`${textColorDim} transition-colors text-xs font-medium tracking-widest uppercase`}>BLOG</Link>
            <Link to="/contact" className={`${textColorDim} transition-colors text-xs font-medium tracking-widest uppercase`}>CONTACT US</Link>
          </nav>

          {/* Right Icons */}
          <div className={`hidden lg:flex items-center gap-6 ${textColor} transition-colors relative z-50`}>
            <button className={`${textColorDim}`}>
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button className={`flex items-center gap-1 ${textColorDim}`}>
              <Globe size={20} strokeWidth={1.5} />
              <span className="text-sm font-medium">IN</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`lg:hidden ${textColor} relative z-50 w-10 h-10 flex items-center justify-center focus:outline-none transition-colors -mr-2`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="relative w-6 h-[14px]">
              <span className={`absolute left-0 block h-[2px] rounded-full transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'w-6 top-[6px] bg-slate-900 rotate-45' : 'w-6 top-0 bg-current'}`} />
              <span className={`absolute right-0 block h-[2px] rounded-full transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'w-0 top-[6px] opacity-0' : 'w-5 top-[6px] bg-current'}`} />
              <span className={`absolute left-0 block h-[2px] rounded-full transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'w-6 top-[6px] bg-slate-900 -rotate-45' : 'w-4 top-[12px] bg-current'}`} />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-[35] transition-transform duration-300 lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-28 px-6 pb-6 overflow-y-auto">
          <nav className="flex flex-col gap-6 text-slate-900">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium tracking-widest uppercase hover:text-blue-600 transition-colors">HOME</Link>
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium tracking-widest uppercase hover:text-blue-600 transition-colors">ABOUT US</Link>
            
            <div className="flex flex-col gap-4">
              <span className="text-slate-400 text-sm font-medium tracking-widest uppercase">SERVICES</span>
              <Link to="/services/bulletproof-sheet-manufacturing" onClick={() => setIsMobileMenuOpen(false)} className="pl-4 text-slate-700 hover:text-blue-600 transition-colors">Bulletproof Sheet Manufacturing</Link>
              <Link to="/services/real-estate-infrastructure" onClick={() => setIsMobileMenuOpen(false)} className="pl-4 text-slate-700 hover:text-blue-600 transition-colors">Real Estate & Infrastructure</Link>
              <Link to="/services/granite" onClick={() => setIsMobileMenuOpen(false)} className="pl-4 text-slate-700 hover:text-blue-600 transition-colors">Granite</Link>
              <Link to="/services/mines-minerals" onClick={() => setIsMobileMenuOpen(false)} className="pl-4 text-slate-700 hover:text-blue-600 transition-colors">Mines & Minerals</Link>
              <Link to="/services/sponge-iron" onClick={() => setIsMobileMenuOpen(false)} className="pl-4 text-slate-700 hover:text-blue-600 transition-colors">Sponge Iron</Link>
            </div>

            <Link to="/portfolio" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium tracking-widest uppercase hover:text-blue-600 transition-colors">PORTFOLIO</Link>
            <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium tracking-widest uppercase hover:text-blue-600 transition-colors">BLOG</Link>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium tracking-widest uppercase hover:text-blue-600 transition-colors">CONTACT US</Link>
          </nav>
        </div>
      </div>
    </>
  );
}
