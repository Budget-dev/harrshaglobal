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

  const isLightBg = isScrolled || !isHomePage || isMobileMenuOpen;
  const navbarBg = isLightBg 
    ? 'bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md shadow-sm py-2 border-b border-primary/10' 
    : 'bg-transparent py-3';
  const textColor = isLightBg ? 'text-primary' : 'text-white dark:text-primary';
  const textColorDim = isLightBg ? 'text-primary/70 hover:text-primary' : 'text-white/90 hover:text-white dark:text-primary/70 dark:hover:text-primary';

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${navbarBg}`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className={`flex items-center gap-3 ${textColor} transition-colors relative z-50`}>
            <img 
              src="https://vennky.sirv.com/ChatGPT%20Image%20Jul%201%2C%202026%2C%2012_23_05%20PM.png" 
              alt="Harrsha Logo" 
              className="h-8 md:h-10 object-contain"
            />
            <div className="flex flex-col justify-center">
              <span className="font-bold text-base md:text-lg tracking-[0.25em] uppercase leading-none mb-1">
                HARRSHA
              </span>
              <span className="font-medium text-[8px] md:text-[10px] tracking-[0.35em] uppercase leading-none opacity-80 pl-1">
                GLOBAL
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 relative z-50">
            <Link to="/" className={`${textColorDim} transition-colors text-xs font-medium tracking-widest uppercase`}>HOME</Link>
            <Link to="/about" className={`${textColorDim} transition-colors text-xs font-medium tracking-widest uppercase`}>ABOUT US</Link>
            
            <div className="relative group">
              <button className={`flex items-center gap-1 ${textColorDim} transition-colors text-xs font-medium tracking-widest uppercase py-6`}>
                SERVICES <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[800px] pt-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="bg-white dark:bg-zinc-950 border border-primary/10 p-8 grid grid-cols-2 gap-8 shadow-xl">
                  <Link to="/services/bulletproof-sheet-manufacturing" className="group/item">
                    <h4 className="text-primary font-medium mb-2 group-hover/item:text-primary/70 transition-colors">Bulletproof Sheet Manufacturing</h4>
                    <p className="text-primary/60 text-sm leading-relaxed">Advanced protective sheet manufacturing for defense, industrial safety, and high-security infrastructure.</p>
                  </Link>
                  <Link to="/services/real-estate-infrastructure" className="group/item">
                    <h4 className="text-primary font-medium mb-2 group-hover/item:text-primary/70 transition-colors">Real Estate & Infrastructure</h4>
                    <p className="text-primary/60 text-sm leading-relaxed">End-to-end real estate solutions – from planning to construction. We develop residential, commercial, and industrial properties with structural integrity and smart design.</p>
                  </Link>
                  <Link to="/services/granite" className="group/item">
                    <h4 className="text-primary font-medium mb-2 group-hover/item:text-primary/70 transition-colors">Granite</h4>
                    <p className="text-primary/60 text-sm leading-relaxed">Premium-grade granite extracted from certified quarries. Ideal for domestic use, exports, and commercial interiors.</p>
                  </Link>
                  <Link to="/services/mines-minerals" className="group/item">
                    <h4 className="text-primary font-medium mb-2 group-hover/item:text-primary/70 transition-colors">Mines & Minerals</h4>
                    <p className="text-primary/60 text-sm leading-relaxed">Sustainable exploration and extraction of essential minerals. We ensure regulatory compliance and ecological responsibility in every project.</p>
                  </Link>
                </div>
              </div>
            </div>

            <a href="/#blog" className={`${textColorDim} transition-colors text-xs font-medium tracking-widest uppercase`}>BLOG</a>
            <a href="/#contact" className={`${textColorDim} transition-colors text-xs font-medium tracking-widest uppercase`}>CONTACT US</a>
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
              <span className={`absolute left-0 block h-[2px] rounded-full transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'w-6 top-[6px] bg-primary dark:bg-white rotate-45' : 'w-6 top-0 bg-current'}`} />
              <span className={`absolute right-0 block h-[2px] rounded-full transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'w-0 top-[6px] opacity-0' : 'w-5 top-[6px] bg-current'}`} />
              <span className={`absolute left-0 block h-[2px] rounded-full transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'w-6 top-[6px] bg-primary dark:bg-white -rotate-45' : 'w-4 top-[12px] bg-current'}`} />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white dark:bg-zinc-950 z-[35] transition-transform duration-300 lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-28 px-6 pb-6 overflow-y-auto">
          <nav className="flex flex-col gap-6 text-primary dark:text-zinc-50">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium tracking-widest uppercase">HOME</Link>
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium tracking-widest uppercase">ABOUT US</Link>
            
            <div className="flex flex-col gap-4">
              <span className="text-primary/50 dark:text-zinc-400 text-sm font-medium tracking-widest uppercase">SERVICES</span>
              <Link to="/services/bulletproof-sheet-manufacturing" onClick={() => setIsMobileMenuOpen(false)} className="pl-4">Bulletproof Sheet Manufacturing</Link>
              <Link to="/services/real-estate-infrastructure" onClick={() => setIsMobileMenuOpen(false)} className="pl-4">Real Estate & Infrastructure</Link>
              <Link to="/services/granite" onClick={() => setIsMobileMenuOpen(false)} className="pl-4">Granite</Link>
              <Link to="/services/mines-minerals" onClick={() => setIsMobileMenuOpen(false)} className="pl-4">Mines & Minerals</Link>
            </div>

            <a href="/#blog" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium tracking-widest uppercase">BLOG</a>
            <a href="/#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium tracking-widest uppercase">CONTACT US</a>
          </nav>
        </div>
      </div>
    </>
  );
}
