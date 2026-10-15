export interface RouteSEOData {
  title: string;
  description: string;
  canonical: string;
  ogImage: string;
  schema?: object | object[];
  h1: string;
  eyebrow: string;
  breadcrumbs: { name: string; url: string }[];
  htmlContent: string;
  is404?: boolean;
}

const COMMON_NAV_HTML = `
<header class="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-7xl z-50 bg-white/95 backdrop-blur-xl text-slate-900 border border-slate-200/80 shadow-sm py-2.5 px-6 md:px-10 flex items-center justify-between rounded-full">
  <a href="/" class="flex items-center gap-2 text-slate-900 font-bold tracking-wider text-sm md:text-base">
    <span class="w-8 h-8 rounded-full bg-[#0B1530] text-white flex items-center justify-center font-black text-xs">HG</span>
    <span>HARRSHAGLOBAL</span>
  </a>
  <nav class="hidden lg:flex items-center gap-6 text-xs font-semibold tracking-wider uppercase text-slate-700">
    <a href="/" class="hover:text-blue-700 transition-colors">Home</a>
    <a href="/about" class="hover:text-blue-700 transition-colors">About Us</a>
    <a href="/mining" class="hover:text-blue-700 transition-colors">Mining</a>
    <a href="/minerals" class="hover:text-blue-700 transition-colors">Minerals</a>
    <a href="/sponge-iron" class="hover:text-blue-700 transition-colors">Sponge Iron</a>
    <a href="/granite" class="hover:text-blue-700 transition-colors">Granite</a>
    <a href="/bulletproof-sheets" class="hover:text-blue-700 transition-colors">Bulletproof Sheets</a>
    <a href="/real-estate-infrastructure" class="hover:text-blue-700 transition-colors">Infrastructure</a>
    <a href="/projects" class="hover:text-blue-700 transition-colors">Projects</a>
    <a href="/news" class="hover:text-blue-700 transition-colors">News</a>
    <a href="/careers" class="hover:text-blue-700 transition-colors">Careers</a>
    <a href="/contact" class="hover:text-blue-700 transition-colors text-blue-700 font-bold">Contact</a>
  </nav>
  <a href="/contact" class="px-4 py-2 bg-[#0B1530] hover:bg-blue-900 text-white rounded-full text-xs font-bold uppercase tracking-wider transition-colors">
    Get Quote
  </a>
</header>
`;

const COMMON_FOOTER_HTML = `
<footer class="border-t border-slate-200 bg-white text-slate-900 pt-16 pb-12 mt-20">
  <div class="max-w-7xl mx-auto px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      <div>
        <h3 class="text-xl font-black text-[#0B1530] tracking-tight mb-2">HARRSHA GLOBAL</h3>
        <p class="text-xs text-blue-700 font-bold uppercase tracking-wider mb-4">Private Limited &middot; Industrial Group</p>
        <p class="text-xs text-slate-600 leading-relaxed mb-4">
          Diversified Indian industrial conglomerate operating in iron ore mining, direct reduced iron (sponge iron), natural granite export, bulletproof sheet manufacturing, and real estate infrastructure.
        </p>
        <p class="text-xs text-slate-500">Also recognized as Harsha Global across commercial sourcing channels.</p>
      </div>
      <div>
        <h4 class="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">Core Divisions</h4>
        <ul class="space-y-2 text-xs text-slate-600">
          <li><a href="/mining" class="hover:text-blue-700 transition-colors">Iron Ore Mining & Beneficiation</a></li>
          <li><a href="/minerals" class="hover:text-blue-700 transition-colors">Minerals & Steam Coal Trading</a></li>
          <li><a href="/sponge-iron" class="hover:text-blue-700 transition-colors">Direct Reduced Sponge Iron (DRI)</a></li>
          <li><a href="/granite" class="hover:text-blue-700 transition-colors">Natural Granite & Dimensional Stone</a></li>
          <li><a href="/bulletproof-sheets" class="hover:text-blue-700 transition-colors">Ballistic Bulletproof Sheet Manufacturing</a></li>
          <li><a href="/real-estate-infrastructure" class="hover:text-blue-700 transition-colors">Real Estate Infrastructure & Mega Projects</a></li>
        </ul>
      </div>
      <div>
        <h4 class="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">Quick Links</h4>
        <ul class="space-y-2 text-xs text-slate-600">
          <li><a href="/about" class="hover:text-blue-700 transition-colors">About Harrsha Global</a></li>
          <li><a href="/projects" class="hover:text-blue-700 transition-colors">Projects & Engineering Portfolio</a></li>
          <li><a href="/gallery" class="hover:text-blue-700 transition-colors">Production & Facility Gallery</a></li>
          <li><a href="/news" class="hover:text-blue-700 transition-colors">Industry News & Insights</a></li>
          <li><a href="/careers" class="hover:text-blue-700 transition-colors font-bold text-blue-700">Careers & Job Openings (49 Active Posts)</a></li>
          <li><a href="/contact" class="hover:text-blue-700 transition-colors">Contact Corporate Headquarters</a></li>
        </ul>
      </div>
      <div>
        <h4 class="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">Corporate Headquarters (NAP)</h4>
        <address class="not-italic text-xs text-slate-600 space-y-2.5">
          <p class="font-bold text-slate-900">Harrsha Global Private Limited</p>
          <p>Muralinagar, Kancharapalem, Rushikonda IT SEZ, Visakhapatnam, Andhra Pradesh 530007, India</p>
          <p><strong>Tel:</strong> <a href="tel:9491750999" class="hover:text-blue-700">+91 9491750999</a> / <a href="tel:7396734389" class="hover:text-blue-700">+91 73967 34389</a></p>
          <p><strong>Email:</strong> <a href="mailto:info@harrshaglobal.com" class="hover:text-blue-700">info@harrshaglobal.com</a></p>
          <p class="pt-2"><a href="/admin" class="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-900 text-white rounded-md text-[11px] font-semibold hover:bg-blue-900 transition-colors">Admin Portal</a></p>
        </address>
      </div>
    </div>
    <div class="border-t border-slate-200 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
      <p>&copy; 2026 Harrsha Global Private Limited. All rights reserved.</p>
      <div class="flex flex-wrap gap-5">
        <a href="/privacy-policy" class="hover:text-slate-900 transition-colors">Privacy Policy</a>
        <a href="/terms" class="hover:text-slate-900 transition-colors">Terms of Service</a>
        <a href="https://www.harrshaglobal.com/sitemap.xml" class="hover:text-slate-900 transition-colors">Sitemap</a>
      </div>
    </div>
  </div>
</footer>
`;

function renderBreadcrumbNav(crumbs: { name: string; url: string }[]): string {
  if (!crumbs || crumbs.length === 0) return '';
  return `
  <nav aria-label="Breadcrumb" class="flex items-center gap-2 text-xs font-medium text-slate-500 mb-8">
    ${crumbs.map((c, i) => {
      const isLast = i === crumbs.length - 1;
      return isLast
        ? `<span class="text-slate-800 font-bold" aria-current="page">${c.name}</span>`
        : `<a href="${c.url.replace('https://www.harrshaglobal.com', '') || '/'}" class="hover:text-blue-700 transition-colors">${c.name}</a><span class="text-slate-400">&rsaquo;</span>`;
    }).join('')}
  </nav>
  `;
}

export const ROUTES_PRERENDER_MAP: Record<string, RouteSEOData> = {
  '/': {
    title: 'Harrsha Global | Mining, Sponge Iron, Granite & Infrastructure Company in India',
    description: 'Harrsha Global is a diversified industrial conglomerate in India specializing in iron ore mining, sponge iron, granite, bulletproof sheets & real estate.',
    canonical: 'https://www.harrshaglobal.com/',
    ogImage: 'https://vennky.sirv.com/ChatGPT%20Image%20Jul%208%2C%202026%2C%2007_31_28%20PM.png',
    h1: 'Harrsha Global Private Limited',
    eyebrow: 'Mining · Sponge Iron · Granite · Infrastructure',
    breadcrumbs: [],
    htmlContent: `
      <section class="relative pt-36 pb-20 md:pt-44 md:pb-28 bg-[#F8FAFC]">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="max-w-3xl">
            <span class="inline-block px-3 py-1 rounded-md bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-bold uppercase tracking-wider mb-4">
              Mining &middot; Sponge Iron &middot; Granite &middot; Infrastructure
            </span>
            <h1 class="text-4xl sm:text-5xl md:text-6xl font-black text-[#0B1530] tracking-tight uppercase mb-6 leading-tight">
              HARRSHAGLOBAL PVT LTD
            </h1>
            <p class="text-xl sm:text-2xl text-slate-700 font-medium leading-relaxed mb-8">
              Connecting Global Resources, Engineering Sustainable Industrial Excellence.
            </p>
            <p class="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
              Harrsha Global Private Limited (frequently searched as Harsha Global) is a premier Indian diversified industrial conglomerate headquartered in Visakhapatnam, Andhra Pradesh. We operate heavy-scale extraction in iron ore mining, direct reduced iron (sponge iron) rotary kilns, quarrying of world-renowned Black Galaxy granite, advanced ballistic-grade bulletproof sheet manufacturing, utility-scale solar generation, and landmark real estate infrastructure across India and international markets.
            </p>
            <div class="flex flex-wrap gap-4">
              <a href="/mining" class="px-6 py-3.5 bg-[#0B1530] text-white rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-blue-900 transition-colors">
                Explore Mining Divisions &rarr;
              </a>
              <a href="/contact" class="px-6 py-3.5 bg-white text-slate-900 border border-slate-300 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-slate-50 transition-colors">
                Contact Procurement &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="py-16 bg-white border-y border-slate-200">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="text-center max-w-3xl mx-auto mb-14">
            <h2 class="text-2xl sm:text-3xl font-black text-[#0B1530] mb-3">Core Industrial Operating Sectors</h2>
            <p class="text-slate-600 text-sm">Engineered for high-volume output, stringent metallurgical assay standards, and zero-defect global supply chains.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article class="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white transition-colors">
              <h3 class="text-lg font-bold text-slate-900 mb-2"><a href="/mining" class="hover:text-blue-700">Iron Ore Mining &amp; Screening</a></h3>
              <p class="text-xs text-slate-600 leading-relaxed mb-4">High-volume iron ore excavation in Ballari, Karnataka. Supplying Fe 64.5% calibrated lumps and fines with shatter-resistant mechanical strength for blast furnaces and sponge iron kilns.</p>
              <a href="/mining" class="text-xs font-bold text-blue-700 hover:underline">&rarr; Mining Details &amp; Specifications</a>
            </article>
            <article class="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white transition-colors">
              <h3 class="text-lg font-bold text-slate-900 mb-2"><a href="/sponge-iron" class="hover:text-blue-700">Direct Reduced Sponge Iron (DRI)</a></h3>
              <p class="text-xs text-slate-600 leading-relaxed mb-4">150,000 MT annual production rotary kilns delivering 82%&ndash;84% metallic iron content. The premium raw material feed for secondary induction furnaces and continuous casting billets.</p>
              <a href="/sponge-iron" class="text-xs font-bold text-blue-700 hover:underline">&rarr; Sponge Iron Plant &amp; Capacity</a>
            </article>
            <article class="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white transition-colors">
              <h3 class="text-lg font-bold text-slate-900 mb-2"><a href="/granite" class="hover:text-blue-700">Natural Granite Quarries &amp; Export</a></h3>
              <p class="text-xs text-slate-600 leading-relaxed mb-4">Exclusive quarry concessions in Chimakkurthy and Tekkali. Quarrying and exporting Black Galaxy, Tan Brown, and SK Blue granite gangsaw slabs worldwide.</p>
              <a href="/granite" class="text-xs font-bold text-blue-700 hover:underline">&rarr; Granite Finishes &amp; Slabs</a>
            </article>
            <article class="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white transition-colors">
              <h3 class="text-lg font-bold text-slate-900 mb-2"><a href="/bulletproof-sheets" class="hover:text-blue-700">Ballistic Bulletproof Sheets</a></h3>
              <p class="text-xs text-slate-600 leading-relaxed mb-4">Precision ceramic and UHMWPE composite sheets certified to NIJ Level III and Level IV ballistic standards for armored vehicles, tactical vests, and safe-rooms.</p>
              <a href="/bulletproof-sheets" class="text-xs font-bold text-blue-700 hover:underline">&rarr; Ballistic Protection Standards</a>
            </article>
            <article class="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white transition-colors">
              <h3 class="text-lg font-bold text-slate-900 mb-2"><a href="/real-estate-infrastructure" class="hover:text-blue-700">Real Estate &amp; Mega Infrastructure</a></h3>
              <p class="text-xs text-slate-600 leading-relaxed mb-4">Industrial park development, logistics hubs, commercial complexes, and 100-acre solar utility generation projects across Andhra Pradesh and Telangana.</p>
              <a href="/real-estate-infrastructure" class="text-xs font-bold text-blue-700 hover:underline">&rarr; Real Estate Infrastructure Projects</a>
            </article>
            <article class="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white transition-colors">
              <h3 class="text-lg font-bold text-slate-900 mb-2"><a href="/minerals" class="hover:text-blue-700">Minerals &amp; Steam Coal Trading</a></h3>
              <p class="text-xs text-slate-600 leading-relaxed mb-4">Bulk commodity supply of high-calorific non-coking steam coal, metallurgical manganese ore, and flux dolomite with reliable railway rake and port logistics.</p>
              <a href="/minerals" class="text-xs font-bold text-blue-700 hover:underline">&rarr; Minerals &amp; Coal Supply</a>
            </article>
          </div>
        </div>
      </section>
    `,
  },

  '/about': {
    title: 'About Harrsha Global | Mining, Sponge Iron & Industrial Group India',
    description: 'Learn about Harrsha Global Private Limited (also searched as Harsha Global), an Indian conglomerate in iron ore mining, sponge iron, granite & infrastructure.',
    canonical: 'https://www.harrshaglobal.com/about',
    ogImage: 'https://vennky.sirv.com/ChatGPT%20Image%20Jul%208%2C%202026%2C%2007_31_28%20PM.png',
    h1: 'About Harrsha Global Private Limited',
    eyebrow: 'Industrial Heritage · National Capability · Global Scale',
    breadcrumbs: [
      { name: 'Home', url: 'https://www.harrshaglobal.com/' },
      { name: 'About Us', url: 'https://www.harrshaglobal.com/about' },
    ],
    htmlContent: `
      <section class="pt-32 pb-16 bg-[#F8FAFC]">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="max-w-3xl">
            <span class="inline-block bg-blue-50 text-blue-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              Corporate Heritage &amp; Operations
            </span>
            <h1 class="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1530] tracking-tight mb-6">
              About Harrsha Global Private Limited
            </h1>
            <p class="text-slate-600 text-sm md:text-base leading-relaxed mb-6 font-light">
              <strong>Harrsha Global Private Limited</strong> (also searched as <strong>Harsha Global</strong>) is a diversified Indian industrial conglomerate with deep multi-decade operational foundations across mining, metallurgy, stone quarrying, defense ballistic materials, and large-scale infrastructure engineering.
            </p>
            <p class="text-slate-600 text-sm leading-relaxed mb-6">
              Headquartered in the coastal port city of Visakhapatnam, Andhra Pradesh, Harrsha Global operates certified extraction sites and industrial processing plants in Ballari (Karnataka), Chimakkurthy (Andhra Pradesh), and Hyderabad (Telangana). We are distinct from Harsha Engineers; our corporate focus lies in heavy natural resources extraction, core metallurgical supplies, and advanced composite manufacturing.
            </p>
          </div>
        </div>
      </section>

      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div class="p-6 rounded-2xl border border-slate-200 bg-slate-50">
              <h2 class="text-xl font-bold text-slate-900 mb-2">500,000+ MT</h2>
              <p class="text-xs text-slate-600 leading-relaxed">Annual iron ore excavation, dry screening, and calibrated lump handling capacity across Ballari and Barbil concessions.</p>
            </div>
            <div class="p-6 rounded-2xl border border-slate-200 bg-slate-50">
              <h2 class="text-xl font-bold text-slate-900 mb-2">150,000 TPA</h2>
              <p class="text-xs text-slate-600 leading-relaxed">Direct reduced sponge iron (DRI) rotary kiln manufacturing output with 82%&ndash;84% metallization purity.</p>
            </div>
            <div class="p-6 rounded-2xl border border-slate-200 bg-slate-50">
              <h2 class="text-xl font-bold text-slate-900 mb-2">100% DGMS &amp; ISO</h2>
              <p class="text-xs text-slate-600 leading-relaxed">Zero-harm safety track record adhering to Directorate General of Mines Safety and ISO 9001 quality management benchmarks.</p>
            </div>
          </div>

          <div class="max-w-3xl">
            <h2 class="text-2xl font-bold text-[#0B1530] mb-6">Frequently Asked Questions About Harrsha Global</h2>
            <div class="space-y-4">
              <div class="p-5 rounded-xl border border-slate-200">
                <h3 class="text-sm font-bold text-slate-900 mb-2">What industries does Harrsha Global operate in?</h3>
                <p class="text-xs text-slate-600 leading-relaxed">Harrsha Global operates across core industrial sectors: iron ore mining and dry screening, direct-reduced sponge iron manufacturing, natural granite quarrying and export, ballistic-grade bulletproof sheet manufacturing, 100-acre solar utility generation, and real estate infrastructure developments across India.</p>
              </div>
              <div class="p-5 rounded-xl border border-slate-200">
                <h3 class="text-sm font-bold text-slate-900 mb-2">Where is Harrsha Global headquartered?</h3>
                <p class="text-xs text-slate-600 leading-relaxed">Harrsha Global is headquartered in Visakhapatnam, Andhra Pradesh (with corporate offices at Muralinagar, Kancharapalem, and Rushikonda IT SEZ). Active mining complexes operate in Ballari, Karnataka, with dimensional granite quarries in Chimakkurthy, Andhra Pradesh.</p>
              </div>
              <div class="p-5 rounded-xl border border-slate-200">
                <h3 class="text-sm font-bold text-slate-900 mb-2">Is Harrsha Global the same as Harsha Global or Harsha Engineers?</h3>
                <p class="text-xs text-slate-600 leading-relaxed">Harrsha Global Private Limited (spelled with a double "r", and also searched as Harsha Global) is an independent Indian diversified industrial conglomerate. We are distinct from Harsha Engineers; our corporate focus lies in heavy mining, metallurgical raw materials, defense polymers, stone export, and infrastructure development.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    `,
  },

  '/mining': {
    title: 'Iron Ore Mining & Mineral Processing India | Harrsha Global',
    description: 'Harrsha Global operates iron ore mining concessions in Ballari & Barbil, supplying Fe 64.5% calibrated lumps, fines & steam coal for steel plants.',
    canonical: 'https://www.harrshaglobal.com/mining',
    ogImage: 'https://vennky.sirv.com/iron%20spongs/ballari/WhatsApp%20Image%202026-07-03%20at%207.14.01%20PM.jpeg',
    h1: 'Iron Ore Mining & Mineral Processing in India',
    eyebrow: 'Ballari Reserves · Calibrated Fe 64.5% Lumps · Heavy Excavation',
    breadcrumbs: [
      { name: 'Home', url: 'https://www.harrshaglobal.com/' },
      { name: 'Mining & Minerals', url: 'https://www.harrshaglobal.com/mining' },
    ],
    htmlContent: `
      <section class="pt-32 pb-16 bg-[#F8FAFC]">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="max-w-3xl">
            <span class="inline-block bg-blue-50 text-blue-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              Core Extraction Division
            </span>
            <h1 class="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1530] tracking-tight mb-6">
              Iron Ore Mining &amp; Mineral Processing in India
            </h1>
            <p class="text-slate-600 text-sm md:text-base leading-relaxed mb-6 font-light">
              <strong>Harrsha Global</strong> operates high-yielding iron ore mining concessions and dry screening complexes in Ballari, Karnataka and the Barbil belt. Characterized by high thermal shatter resistance and low silica/alumina ratios, our iron ore supplies are the feedstock of choice for primary blast furnaces and direct-reduction sponge iron kilns across India.
            </p>
          </div>
        </div>
      </section>

      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div class="p-5 rounded-2xl border border-slate-200 bg-slate-50">
              <h2 class="text-base font-bold text-slate-900 mb-1">Calibrated Lumps</h2>
              <p class="text-xs text-slate-600 mb-3">Fe 64.5% Basis &middot; 5mm&ndash;18mm sizing. Perfect direct reduction kiln feed with minimal degradation.</p>
              <span class="text-xs font-bold text-blue-700">Moisture &lt; 2.0%</span>
            </div>
            <div class="p-5 rounded-2xl border border-slate-200 bg-slate-50">
              <h2 class="text-base font-bold text-slate-900 mb-1">Premium Fines</h2>
              <p class="text-xs text-slate-600 mb-3">Fe 62.0% Basis &middot; 0mm&ndash;10mm. Mechanical screening optimized for sintering and pelletization lines.</p>
              <span class="text-xs font-bold text-blue-700">Silica &lt; 3.5%</span>
            </div>
            <div class="p-5 rounded-2xl border border-slate-200 bg-slate-50">
              <h2 class="text-base font-bold text-slate-900 mb-1">Steam Coal</h2>
              <p class="text-xs text-slate-600 mb-3">5800&ndash;6400 Kcal/Kg non-coking coal for DRI kilns, captive power plants, and industrial calciners.</p>
              <span class="text-xs font-bold text-blue-700">Ash 12%&ndash;15%</span>
            </div>
            <div class="p-5 rounded-2xl border border-slate-200 bg-slate-50">
              <h2 class="text-base font-bold text-slate-900 mb-1">Manganese Ore</h2>
              <p class="text-xs text-slate-600 mb-3">Mn 38%&ndash;46% silico grade for structural steel alloying and ferro-manganese production.</p>
              <span class="text-xs font-bold text-blue-700">Mn 42.0% Basis</span>
            </div>
          </div>
          <p class="text-xs text-slate-500 text-center">Inquire about bulk iron ore rake loadings and coastal vessel dispatches through our Visakhapatnam headquarters.</p>
        </div>
      </section>
    `,
  },

  '/minerals': {
    title: 'Industrial Minerals & Coal Trading India | Harrsha Global',
    description: 'Harrsha Global supplies steam coal, metallurgical manganese ore, iron ore fines, and dolomite to steel plants and power utilities across India and worldwide.',
    canonical: 'https://www.harrshaglobal.com/minerals',
    ogImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1200',
    h1: 'Industrial Minerals & Coal Trading in India',
    eyebrow: 'Bulk Commodity Supply · Steam Coal · Manganese Ore · Sinter Feed',
    breadcrumbs: [
      { name: 'Home', url: 'https://www.harrshaglobal.com/' },
      { name: 'Minerals & Coal', url: 'https://www.harrshaglobal.com/minerals' },
    ],
    htmlContent: `
      <section class="pt-32 pb-16 bg-[#F8FAFC]">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="max-w-3xl">
            <span class="inline-block bg-blue-50 text-blue-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              Bulk Commodity Sourcing &amp; Trading
            </span>
            <h1 class="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1530] tracking-tight mb-6">
              Industrial Minerals &amp; Coal Trading in India
            </h1>
            <p class="text-slate-600 text-sm md:text-base leading-relaxed mb-6 font-light">
              <strong>Harrsha Global Private Limited</strong> oversees large-scale bulk procurement, mechanical screening, and multimodal logistics for high-calorific non-coking steam coal, manganese ore, calibrated fines, and fluxing dolomite. We supply power utilities, DRI kilns, and integrated steelworks across India and export destinations.
            </p>
          </div>
        </div>
      </section>
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div class="p-6 rounded-2xl border border-slate-200 bg-slate-50">
              <h2 class="text-xl font-bold text-slate-900 mb-2">High-Calorific Steam Coal (5800&ndash;6400 Kcal/Kg)</h2>
              <p class="text-xs text-slate-600 leading-relaxed mb-4">Grade G3&ndash;G7 non-coking coal with low moisture and controlled volatile matter, optimized for sponge iron rotary kiln reduction and captive power generators.</p>
            </div>
            <div class="p-6 rounded-2xl border border-slate-200 bg-slate-50">
              <h2 class="text-xl font-bold text-slate-900 mb-2">Metallurgical Manganese Ore (Mn 42% Basis)</h2>
              <p class="text-xs text-slate-600 leading-relaxed mb-4">Essential ferroalloy raw material for high-tensile structural steel, stainless rebar manufacturing, and industrial foundry crucibles.</p>
            </div>
          </div>
        </div>
      </section>
    `,
  },

  '/sponge-iron': {
    title: 'Sponge Iron Manufacturer India | DRI Steel | Harrsha Global',
    description: 'Harrsha Global produces 150,000 MT/year direct reduced sponge iron (DRI) with 82-84% metallic iron content at our state-of-the-art plant in India.',
    canonical: 'https://www.harrshaglobal.com/sponge-iron',
    ogImage: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200',
    h1: 'Direct Reduced Sponge Iron (DRI) Manufacturing in India',
    eyebrow: 'Rotary Kiln Technology · 82%-84% Metallic Fe · 150,000 TPA',
    breadcrumbs: [
      { name: 'Home', url: 'https://www.harrshaglobal.com/' },
      { name: 'Sponge Iron', url: 'https://www.harrshaglobal.com/sponge-iron' },
    ],
    htmlContent: `
      <section class="pt-32 pb-16 bg-[#F8FAFC]">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="max-w-3xl">
            <span class="inline-block bg-blue-50 text-blue-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              Metallurgical Steel Division
            </span>
            <h1 class="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1530] tracking-tight mb-6">
              Sponge Iron Manufacturer in India (DRI Steel)
            </h1>
            <p class="text-slate-600 text-sm md:text-base leading-relaxed mb-6 font-light">
              <strong>Harrsha Global</strong> operates a 150,000 MT per year Direct Reduced Iron (DRI) manufacturing complex in Anakapalli / Visakhapatnam, Andhra Pradesh. Using coal-based rotary kiln technology, iron ore lumps are solid-state reduced to remove oxygen, yielding premium sponge iron with 82%&ndash;84% metallic iron content.
            </p>
          </div>
        </div>
      </section>
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div class="p-6 rounded-2xl border border-slate-200 bg-slate-50">
              <h2 class="text-lg font-bold text-slate-900 mb-2">High Metallization</h2>
              <p class="text-xs text-slate-600">82.0% to 84.5% metallic iron (FeM) ensures rapid melting and reduced electric arc energy consumption.</p>
            </div>
            <div class="p-6 rounded-2xl border border-slate-200 bg-slate-50">
              <h2 class="text-lg font-bold text-slate-900 mb-2">Low Residual Gangue</h2>
              <p class="text-xs text-slate-600">Silica and alumina tightly controlled below 4.0% total, yielding minimal slag volumes in induction furnaces.</p>
            </div>
            <div class="p-6 rounded-2xl border border-slate-200 bg-slate-50">
              <h2 class="text-lg font-bold text-slate-900 mb-2">Continuous Bulk Supply</h2>
              <p class="text-xs text-slate-600">Daily dispatch capabilities via dedicated tip-trailers and rail sidings connecting directly to steel rolling mills.</p>
            </div>
          </div>
        </div>
      </section>
    `,
  },

  '/granite': {
    title: 'Granite Supplier India | Black Galaxy Stone Export | Harrsha Global',
    description: 'Harrsha Global quarries & exports premium Black Galaxy & SK Blue granite from Chimakurthi, India. Gangsaw slabs, tiles & monuments worldwide.',
    canonical: 'https://www.harrshaglobal.com/granite',
    ogImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    h1: 'Granite Supplier & Natural Stone Exporter in India',
    eyebrow: 'Chimakurthi Quarries · Black Galaxy Gold Fleck · Gangsaw Slabs',
    breadcrumbs: [
      { name: 'Home', url: 'https://www.harrshaglobal.com/' },
      { name: 'Granite & Natural Stone', url: 'https://www.harrshaglobal.com/granite' },
    ],
    htmlContent: `
      <section class="pt-32 pb-16 bg-[#F8FAFC]">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="max-w-3xl">
            <span class="inline-block bg-blue-50 text-blue-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              Dimensional Stone Division
            </span>
            <h1 class="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1530] tracking-tight mb-6">
              Granite Supplier &amp; Natural Stone Exporter in India
            </h1>
            <p class="text-slate-600 text-sm md:text-base leading-relaxed mb-6 font-light">
              <strong>Harrsha Global</strong> owns and operates certified dimensional granite quarries in Chimakurthi (Prakasam District) and Tekkali (Srikakulam), Andhra Pradesh. We process and export world-renowned Black Galaxy granite (Star Galaxy), SK Blue, Steel Grey, and Absolute Black gangsaw slabs, tiles, and monument blocks to architects, fabricators, and stone distributors across 25+ countries.
            </p>
          </div>
        </div>
      </section>
    `,
  },

  '/bulletproof-sheets': {
    title: 'Bulletproof Sheet Manufacturer India | Ballistic Armor | Harrsha Global',
    description: 'Harrsha Global manufactures certified bulletproof sheets, ballistic composite panels & vehicle armor adhering to NIJ Level III and Level IV standards.',
    canonical: 'https://www.harrshaglobal.com/bulletproof-sheets',
    ogImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&q=80&w=1200',
    h1: 'Bulletproof Sheet Manufacturer in India (Ballistic Armor Panels)',
    eyebrow: 'NIJ Level III & IV Certified · Ceramic & UHMWPE Composites',
    breadcrumbs: [
      { name: 'Home', url: 'https://www.harrshaglobal.com/' },
      { name: 'Bulletproof Sheets', url: 'https://www.harrshaglobal.com/bulletproof-sheets' },
    ],
    htmlContent: `
      <section class="pt-32 pb-16 bg-[#F8FAFC]">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="max-w-3xl">
            <span class="inline-block bg-blue-50 text-blue-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              Defense &amp; Ballistic Composites
            </span>
            <h1 class="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1530] tracking-tight mb-6">
              Bulletproof Sheet Manufacturer in India
            </h1>
            <p class="text-slate-600 text-sm md:text-base leading-relaxed mb-6 font-light">
              <strong>Harrsha Global</strong> engineers ballistic-grade protective sheets and composite armor solutions for defense, executive vehicle armoring, VIP residences, bank vaults, and critical infrastructure. Manufactured using layered ultra-high-molecular-weight polyethylene (UHMWPE) and silicon carbide ceramic matrices, our panels provide certified multi-hit defeat against armor-piercing rifle rounds (NIJ Level III and Level IV).
            </p>
          </div>
        </div>
      </section>
    `,
  },

  '/real-estate-infrastructure': {
    title: 'Real Estate Infrastructure & Mega Projects India | Harrsha Global',
    description: 'Harrsha Global develops industrial parks, commercial complexes, logistics hubs & 100-acre solar utilities with structural engineering integrity.',
    canonical: 'https://www.harrshaglobal.com/real-estate-infrastructure',
    ogImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    h1: 'Real Estate Infrastructure & Mega Projects in India',
    eyebrow: 'Industrial Parks · Logistics Hubs · 100-Acre Solar Generation',
    breadcrumbs: [
      { name: 'Home', url: 'https://www.harrshaglobal.com/' },
      { name: 'Real Estate & Infrastructure', url: 'https://www.harrshaglobal.com/real-estate-infrastructure' },
    ],
    htmlContent: `
      <section class="pt-32 pb-16 bg-[#F8FAFC]">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="max-w-3xl">
            <span class="inline-block bg-blue-50 text-blue-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              Infrastructure &amp; Land Engineering
            </span>
            <h1 class="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1530] tracking-tight mb-6">
              Real Estate Infrastructure &amp; Mega Projects in India
            </h1>
            <p class="text-slate-600 text-sm md:text-base leading-relaxed mb-6 font-light">
              <strong>Harrsha Global</strong> delivers end-to-end master-planned industrial parks, cold storage logistics terminals, commercial business centers, and 100-acre clean solar utilities across Andhra Pradesh, Telangana, and Southern India.
            </p>
          </div>
        </div>
      </section>
    `,
  },

  '/projects': {
    title: 'Industrial Projects & Infrastructure Portfolio | Harrsha Global',
    description: 'Explore completed & ongoing heavy industrial projects by Harrsha Global: iron ore screening plants, DRI kilns, granite quarries & solar utilities.',
    canonical: 'https://www.harrshaglobal.com/projects',
    ogImage: 'https://vennky.sirv.com/ChatGPT%20Image%20Jul%208%2C%202026%2C%2007_31_28%20PM.png',
    h1: 'Industrial Projects & Infrastructure Engineering Portfolio',
    eyebrow: 'Heavy Industry · EPC Execution · Sustainable Scaling',
    breadcrumbs: [
      { name: 'Home', url: 'https://www.harrshaglobal.com/' },
      { name: 'Projects Portfolio', url: 'https://www.harrshaglobal.com/projects' },
    ],
    htmlContent: `
      <section class="pt-32 pb-16 bg-[#F8FAFC]">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="max-w-3xl">
            <span class="inline-block bg-blue-50 text-blue-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              Project Execution &amp; Assets
            </span>
            <h1 class="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1530] tracking-tight mb-6">
              Industrial Projects &amp; Infrastructure Portfolio
            </h1>
            <p class="text-slate-600 text-sm md:text-base leading-relaxed mb-6 font-light">
              A comprehensive showcase of heavy engineering assets commissioned and operated by <strong>Harrsha Global</strong>: Ballari iron ore sizing facilities, Anakapalli DRI rotary reduction lines, Chimakurthi gangsaw granite factories, and 100-acre utility solar parks.
            </p>
          </div>
        </div>
      </section>
    `,
  },

  '/gallery': {
    title: 'Industrial Media & Operations Photo Gallery | Harrsha Global',
    description: 'View photographic documentation of Harrsha Global operations: iron ore mining grids, sponge iron rotary kilns, granite quarries & ballistic tests.',
    canonical: 'https://www.harrshaglobal.com/gallery',
    ogImage: 'https://vennky.sirv.com/iron%20spongs/ballari/WhatsApp%20Image%202026-07-03%20at%207.14.01%20PM.jpeg',
    h1: 'Industrial Media & Operations Photo Gallery',
    eyebrow: 'Operational Sites · Production Lines · Verified Imagery',
    breadcrumbs: [
      { name: 'Home', url: 'https://www.harrshaglobal.com/' },
      { name: 'Photo Gallery', url: 'https://www.harrshaglobal.com/gallery' },
    ],
    htmlContent: `
      <section class="pt-32 pb-16 bg-[#F8FAFC]">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="max-w-3xl">
            <span class="inline-block bg-blue-50 text-blue-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              Visual Documentation
            </span>
            <h1 class="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1530] tracking-tight mb-6">
              Industrial Media &amp; Operations Photo Gallery
            </h1>
            <p class="text-slate-600 text-sm md:text-base leading-relaxed mb-6 font-light">
              Explore ground-level photography from Harrsha Global active operations: heavy excavator lines in Ballari, rotary kilns discharging sponge iron, granite block extraction in Chimakurthi, and composite armor test protocols.
            </p>
          </div>
        </div>
      </section>
    `,
  },

  '/news': {
    title: 'Industry News, Mining Insights & Steel Updates | Harrsha Global',
    description: 'Latest market news, commodity trends, metallurgical reports & corporate announcements from Harrsha Global Private Limited.',
    canonical: 'https://www.harrshaglobal.com/news',
    ogImage: 'https://vennky.sirv.com/ChatGPT%20Image%20Jul%208%2C%202026%2C%2007_31_28%20PM.png',
    h1: 'Industry News, Mining Insights & Corporate Announcements',
    eyebrow: 'Market Intelligence · Technical Papers · Press Releases',
    breadcrumbs: [
      { name: 'Home', url: 'https://www.harrshaglobal.com/' },
      { name: 'News & Insights', url: 'https://www.harrshaglobal.com/news' },
    ],
    htmlContent: `
      <section class="pt-32 pb-16 bg-[#F8FAFC]">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="max-w-3xl">
            <span class="inline-block bg-blue-50 text-blue-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              Intelligence &amp; Updates
            </span>
            <h1 class="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1530] tracking-tight mb-6">
              Industry News &amp; Mining Insights
            </h1>
            <p class="text-slate-600 text-sm md:text-base leading-relaxed mb-6 font-light">
              Stay updated with analytical commodity reports, iron ore benchmark indices, green steel technologies, natural stone market demand in GCC/Europe, and corporate updates from Harrsha Global Private Limited.
            </p>
          </div>
        </div>
      </section>
    `,
  },

  '/blog': {
    title: 'Industry News, Mining Insights & Steel Updates | Harrsha Global',
    description: 'Latest market news, commodity trends, metallurgical reports & corporate announcements from Harrsha Global Private Limited.',
    canonical: 'https://www.harrshaglobal.com/news',
    ogImage: 'https://vennky.sirv.com/ChatGPT%20Image%20Jul%208%2C%202026%2C%2007_31_28%20PM.png',
    h1: 'Industry News, Mining Insights & Corporate Announcements',
    eyebrow: 'Market Intelligence · Technical Papers · Press Releases',
    breadcrumbs: [
      { name: 'Home', url: 'https://www.harrshaglobal.com/' },
      { name: 'News & Insights', url: 'https://www.harrshaglobal.com/news' },
    ],
    htmlContent: `
      <section class="pt-32 pb-16 bg-[#F8FAFC]">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="max-w-3xl">
            <span class="inline-block bg-blue-50 text-blue-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              Intelligence &amp; Updates
            </span>
            <h1 class="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1530] tracking-tight mb-6">
              Industry News &amp; Mining Insights
            </h1>
            <p class="text-slate-600 text-sm md:text-base leading-relaxed mb-6 font-light">
              Stay updated with analytical commodity reports, iron ore benchmark indices, green steel technologies, natural stone market demand in GCC/Europe, and corporate updates from Harrsha Global Private Limited.
            </p>
          </div>
        </div>
      </section>
    `,
  },

  '/careers': {
    title: 'Careers & Job Openings at Harrsha Global | Industrial Hiring',
    description: 'Explore 49 open career opportunities at Harrsha Global across mining operations, mechanical engineering, metallurgists & project management in India.',
    canonical: 'https://www.harrshaglobal.com/careers',
    ogImage: 'https://vennky.sirv.com/ChatGPT%20Image%20Jul%208%2C%202026%2C%2007_31_28%20PM.png',
    h1: 'Careers & Job Openings at Harrsha Global',
    eyebrow: '49 Active Positions · Heavy Industry Careers · Equal Opportunity',
    breadcrumbs: [
      { name: 'Home', url: 'https://www.harrshaglobal.com/' },
      { name: 'Careers', url: 'https://www.harrshaglobal.com/careers' },
    ],
    htmlContent: `
      <section class="pt-32 pb-16 bg-[#F8FAFC]">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="max-w-3xl">
            <span class="inline-block bg-blue-50 text-blue-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              Talent Acquisition
            </span>
            <h1 class="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1530] tracking-tight mb-6">
              Careers &amp; Job Openings at Harrsha Global
            </h1>
            <p class="text-slate-600 text-sm md:text-base leading-relaxed mb-6 font-light">
              Join one of India&rsquo;s most dynamic industrial conglomerates. Harrsha Global offers exciting career pathways for mining engineers, metallurgical specialists, rotary kiln managers, quarry geologists, composite material scientists, civil infrastructure planners, and corporate leaders across Visakhapatnam, Ballari, Hyderabad, and overseas branches.
            </p>
            <p class="text-xs text-blue-800 font-bold uppercase tracking-wider">
              49 verified positions currently accepting applications with direct online candidate submission.
            </p>
          </div>
        </div>
      </section>
    `,
  },

  '/office-staff-recruitment': {
    title: 'Office Staff Recruitment | A to Z Corporate Job Roles | Harrsha Global',
    description: 'Explore and apply for A to Z corporate office and operational positions at Harrsha Global Private Limited across India. Direct online job applications.',
    canonical: 'https://www.harrshaglobal.com/office-staff-recruitment',
    ogImage: 'https://vennky.sirv.com/ChatGPT%20Image%20Jul%208%2C%202026%2C%2007_31_28%20PM.png',
    h1: 'Office Staff Recruitment (A to Z Corporate Job Roles)',
    eyebrow: 'Corporate & Operational Expansion · Visakhapatnam HQ · Pan-India',
    breadcrumbs: [
      { name: 'Home', url: 'https://www.harrshaglobal.com/' },
      { name: 'Careers', url: 'https://www.harrshaglobal.com/careers' },
      { name: 'Office Staff Recruitment', url: 'https://www.harrshaglobal.com/office-staff-recruitment' },
    ],
    htmlContent: `
      <section class="pt-32 pb-16 bg-[#F8FAFC]">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="max-w-4xl">
            <span class="inline-block bg-blue-50 text-blue-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              Corporate &amp; Operational Expansion
            </span>
            <h1 class="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1530] tracking-tight mb-6">
              Office Staff Recruitment (A to Z Job Roles)
            </h1>
            <p class="text-slate-600 text-sm md:text-base leading-relaxed mb-6 font-light">
              In alignment with <strong>Harrsha Global Private Limited</strong> corporate scaling across mining, sponge iron, granite export, bulletproof defense manufacturing, and infrastructure, we are inviting applications across our complete A to Z roster of corporate office, operational management, and administrative positions.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
              <div class="p-5 rounded-2xl border border-slate-200 bg-white">
                <span class="text-xs font-bold text-blue-700 block mb-1">A &ndash; D</span>
                <p class="text-xs text-slate-700 leading-relaxed font-semibold">Accountant &bull; Administrative Officer &bull; Assistant Manager &bull; Business Development Manager &bull; Billing Executive &bull; CEO &bull; CFO &bull; COO &bull; Director &bull; Data Entry Operator &bull; Digital Marketing Specialist</p>
              </div>
              <div class="p-5 rounded-2xl border border-slate-200 bg-white">
                <span class="text-xs font-bold text-blue-700 block mb-1">E &ndash; H</span>
                <p class="text-xs text-slate-700 leading-relaxed font-semibold">Executive Assistant &bull; Electrical Engineer &bull; Environmental Compliance Officer &bull; Finance Manager &bull; Facility Manager &bull; Front Desk Executive &bull; General Manager &bull; Geologist &bull; Graphic Designer &bull; HR Manager &bull; Head of Operations &bull; Heavy Vehicle Driver</p>
              </div>
              <div class="p-5 rounded-2xl border border-slate-200 bg-white">
                <span class="text-xs font-bold text-blue-700 block mb-1">I &ndash; L</span>
                <p class="text-xs text-slate-700 leading-relaxed font-semibold">IT Support Engineer &bull; Internal Auditor &bull; Inventory Manager &bull; Junior Accountant &bull; Junior Engineer &bull; Junior Executive &bull; Key Account Manager &bull; Knowledge Management Specialist &bull; Legal Advisor &bull; Logistics Manager &bull; Lab Chemist</p>
              </div>
              <div class="p-5 rounded-2xl border border-slate-200 bg-white">
                <span class="text-xs font-bold text-blue-700 block mb-1">M &ndash; P</span>
                <p class="text-xs text-slate-700 leading-relaxed font-semibold">Managing Director &bull; Mining Engineer &bull; Marketing Head &bull; Network Administrator &bull; Non-Executive Staff &bull; Operations Manager &bull; Office Assistant &bull; Quality Officer &bull; Plant Manager &bull; Purchase Manager &bull; Project Coordinator</p>
              </div>
              <div class="p-5 rounded-2xl border border-slate-200 bg-white">
                <span class="text-xs font-bold text-blue-700 block mb-1">Q &ndash; T</span>
                <p class="text-xs text-slate-700 leading-relaxed font-semibold">Quality Control Inspector &bull; Quality Assurance Lead &bull; Regional Sales Manager &bull; Receptionist &bull; R&amp;D Lead &bull; Supply Chain Manager &bull; Site Supervisor &bull; Security Officer &bull; Technical Lead &bull; Transport Manager &bull; Territory Sales Executive</p>
              </div>
              <div class="p-5 rounded-2xl border border-slate-200 bg-white">
                <span class="text-xs font-bold text-blue-700 block mb-1">U &ndash; Z</span>
                <p class="text-xs text-slate-700 leading-relaxed font-semibold">Utilities Engineer &bull; Unit Head &bull; Vendor Management Specialist &bull; Vigilance Officer &bull; Warehouse Manager &bull; Weighbridge Operator &bull; X-Ray/NDT Testing Technician &bull; Yard Supervisor &bull; Zonal Head &bull; Zonal Operations Coordinator</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    `,
  },

  '/contact': {
    title: 'Contact Harrsha Global | Mining & Industrial Sourcing India',
    description: 'Connect with Harrsha Global Private Limited headquarters in Visakhapatnam, India. Sourcing for sponge iron, granite, bulletproof glass, and mining.',
    canonical: 'https://www.harrshaglobal.com/contact',
    ogImage: 'https://vennky.sirv.com/ChatGPT%20Image%20Jul%208%2C%202026%2C%2007_31_28%20PM.png',
    h1: 'Contact Harrsha Global Private Limited',
    eyebrow: 'Corporate Headquarters · Procurement · Commercial Trade',
    breadcrumbs: [
      { name: 'Home', url: 'https://www.harrshaglobal.com/' },
      { name: 'Contact Us', url: 'https://www.harrshaglobal.com/contact' },
    ],
    htmlContent: `
      <section class="pt-32 pb-16 bg-[#F8FAFC]">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="max-w-3xl">
            <span class="inline-block bg-blue-50 text-blue-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              Global Headquarters &amp; Procurement
            </span>
            <h1 class="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1530] tracking-tight mb-6">
              Contact Harrsha Global Private Limited
            </h1>
            <p class="text-slate-600 text-sm md:text-base leading-relaxed mb-6 font-light">
              For commercial inquiries, bulk raw material contracts (iron ore lumps, sponge iron, granite dimensional stone), defense ballistic laminates, or site partnerships across India and internationally.
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
            <div class="p-6 rounded-2xl border border-slate-200 bg-white">
              <h2 class="text-lg font-bold text-slate-900 mb-2">Corporate Office Address</h2>
              <address class="not-italic text-xs text-slate-600 space-y-2">
                <p class="font-bold text-slate-900">Harrsha Global Private Limited</p>
                <p>Muralinagar, Kancharapalem, Rushikonda IT SEZ, Visakhapatnam, Andhra Pradesh, PIN 530007, India</p>
                <p><strong>Telephone:</strong> +91 9491750999 (General &amp; Careers) / +91 73967 34389 (Sales &amp; Procurement)</p>
                <p><strong>Email:</strong> info@harrshaglobal.com</p>
                <p><strong>Working Hours:</strong> Monday &ndash; Saturday: 9:00 AM &ndash; 6:30 PM IST</p>
              </address>
            </div>
            <div class="p-6 rounded-2xl border border-slate-200 bg-white flex flex-col justify-center">
              <h2 class="text-lg font-bold text-slate-900 mb-2">Immediate Sourcing Assistance</h2>
              <p class="text-xs text-slate-600 mb-4">Direct dispatch coordination for railway rakes and coastal vessel charters.</p>
              <a href="tel:9491750999" class="inline-block px-5 py-3 bg-[#0B1530] text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-blue-900 transition-colors text-center">
                Call Headquarters: +91 9491750999
              </a>
            </div>
          </div>
        </div>
      </section>
    `,
  },

  '/privacy-policy': {
    title: 'Privacy Policy | Harrsha Global Private Limited',
    description: 'Read the privacy policy of Harrsha Global Private Limited regarding data protection, user information, and industrial trade compliance.',
    canonical: 'https://www.harrshaglobal.com/privacy-policy',
    ogImage: 'https://vennky.sirv.com/ChatGPT%20Image%20Jul%208%2C%202026%2C%2007_31_28%20PM.png',
    h1: 'Privacy Policy',
    eyebrow: 'Legal Compliance · Data Protection',
    breadcrumbs: [
      { name: 'Home', url: 'https://www.harrshaglobal.com/' },
      { name: 'Privacy Policy', url: 'https://www.harrshaglobal.com/privacy-policy' },
    ],
    htmlContent: `
      <section class="pt-32 pb-16 bg-[#F8FAFC]">
        <div class="max-w-4xl mx-auto px-6 lg:px-8">
          <h1 class="text-3xl font-black text-[#0B1530] mb-6">Privacy Policy</h1>
          <p class="text-xs text-slate-500 mb-8">Effective Date: October 2026 &middot; Harrsha Global Private Limited</p>
          <div class="prose prose-slate text-xs leading-relaxed space-y-4 text-slate-600">
            <p>Harrsha Global Private Limited (&ldquo;Harrsha Global&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;) is committed to protecting your corporate and personal privacy. This Privacy Policy details how we collect, process, and safeguard information submitted through https://www.harrshaglobal.com.</p>
            <p>We collect information you submit directly via commercial inquiry forms, career applications, and newsletter subscriptions (such as name, phone number, corporate email, and resume documents).</p>
            <p>For any privacy inquiries, reach us at info@harrshaglobal.com or our corporate headquarters in Visakhapatnam, Andhra Pradesh.</p>
          </div>
        </div>
      </section>
    `,
  },

  '/terms': {
    title: 'Terms of Service | Harrsha Global Private Limited',
    description: 'Review terms and conditions governing the use of Harrsha Global Private Limited commercial portal, raw material sourcing & infrastructure services.',
    canonical: 'https://www.harrshaglobal.com/terms',
    ogImage: 'https://vennky.sirv.com/ChatGPT%20Image%20Jul%208%2C%202026%2C%2007_31_28%20PM.png',
    h1: 'Terms of Service',
    eyebrow: 'Legal Framework · Commercial Agreements',
    breadcrumbs: [
      { name: 'Home', url: 'https://www.harrshaglobal.com/' },
      { name: 'Terms of Service', url: 'https://www.harrshaglobal.com/terms' },
    ],
    htmlContent: `
      <section class="pt-32 pb-16 bg-[#F8FAFC]">
        <div class="max-w-4xl mx-auto px-6 lg:px-8">
          <h1 class="text-3xl font-black text-[#0B1530] mb-6">Terms of Service</h1>
          <p class="text-xs text-slate-500 mb-8">Effective Date: October 2026 &middot; Harrsha Global Private Limited</p>
          <div class="prose prose-slate text-xs leading-relaxed space-y-4 text-slate-600">
            <p>Welcome to the official digital portal of Harrsha Global Private Limited. By accessing and using https://www.harrshaglobal.com, you agree to comply with and be bound by the following terms of service.</p>
            <p>All mineral specifications, chemical assay values, technical datasheets, photographic media, and architectural renderings are the intellectual property of Harrsha Global Private Limited.</p>
          </div>
        </div>
      </section>
    `,
  },
};

export function getPrerenderedPage(urlPath: string, rawHtmlTemplate: string): { html: string; status: number } {
  // Normalize path
  const cleanPath = urlPath.split('?')[0].replace(/\/$/, '') || '/';

  // Check 404
  const routeData = ROUTES_PRERENDER_MAP[cleanPath];

  if (!routeData) {
    // Return custom 404 page with status 404!
    const notFoundHtml = `
      <div class="min-h-screen flex flex-col justify-between bg-[#F8FAFC]">
        ${COMMON_NAV_HTML}
        <main class="pt-40 pb-20 max-w-3xl mx-auto px-6 text-center">
          <span class="inline-block px-4 py-1.5 rounded-full bg-red-100 text-red-800 text-xs font-bold uppercase tracking-wider mb-4">
            Error 404 &middot; Page Not Found
          </span>
          <h1 class="text-4xl sm:text-5xl font-black text-[#0B1530] mb-4">404 - Page Not Found</h1>
          <p class="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
            The page you requested could not be located on the Harrsha Global portal. Please explore our industrial divisions or return to the homepage.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <a href="/" class="px-6 py-3 bg-[#0B1530] text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-blue-900 transition-colors">
              Return to Homepage
            </a>
            <a href="/mining" class="px-6 py-3 bg-white border border-slate-300 text-slate-900 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-slate-50 transition-colors">
              Mining &amp; Minerals
            </a>
            <a href="/contact" class="px-6 py-3 bg-white border border-slate-300 text-slate-900 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-slate-50 transition-colors">
              Contact Us
            </a>
          </div>
        </main>
        ${COMMON_FOOTER_HTML}
      </div>
    `;

    let html = rawHtmlTemplate;
    html = html.replace(/<title>.*?<\/title>/i, `<title>404 Page Not Found | Harrsha Global Private Limited</title>`);
    html = html.replace(/<meta\s+name="robots"\s+content=".*?"\s*\/?>/i, `<meta name="robots" content="noindex, follow" />`);
    html = html.replace('<div id="root"></div>', `<div id="root">${notFoundHtml}</div>`);
    return { html, status: 404 };
  }

  // Construct complete prerendered HTML body
  const bodyContent = `
    <div class="min-h-screen flex flex-col justify-between bg-[#F8FAFC] font-sans">
      ${COMMON_NAV_HTML}
      <main class="grow">
        <div class="max-w-7xl mx-auto px-6 lg:px-8 pt-24">
          ${renderBreadcrumbNav(routeData.breadcrumbs)}
        </div>
        ${routeData.htmlContent}
      </main>
      ${COMMON_FOOTER_HTML}
    </div>
  `;

  let html = rawHtmlTemplate;

  // Replace Title
  html = html.replace(/<title>.*?<\/title>/i, `<title>${routeData.title}</title>`);

  // Replace Meta Description
  html = html.replace(
    /<meta\s+name="description"\s+content=".*?"\s*\/?>/i,
    `<meta name="description" content="${routeData.description}" />`
  );

  // Replace Canonical Link
  html = html.replace(
    /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i,
    `<link rel="canonical" href="${routeData.canonical}" />`
  );

  // Update Open Graph tags
  html = html.replace(
    /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/i,
    `<meta property="og:title" content="${routeData.title}" />`
  );
  html = html.replace(
    /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/i,
    `<meta property="og:description" content="${routeData.description}" />`
  );
  html = html.replace(
    /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/i,
    `<meta property="og:url" content="${routeData.canonical}" />`
  );
  if (routeData.ogImage) {
    html = html.replace(
      /<meta\s+property="og:image"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:image" content="${routeData.ogImage}" />`
    );
  }

  // Update Twitter tags
  html = html.replace(
    /<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/i,
    `<meta name="twitter:title" content="${routeData.title}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/i,
    `<meta name="twitter:description" content="${routeData.description}" />`
  );

  // Inject prerendered content into <div id="root">
  html = html.replace('<div id="root"></div>', `<div id="root">${bodyContent}</div>`);

  return { html, status: 200 };
}
