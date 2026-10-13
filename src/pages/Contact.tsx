import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../components/FadeIn';
import { User, Mail, ArrowRight, Phone, MapPin, Clock, Building2, ChevronRight, CheckCircle2 } from 'lucide-react';
import { SEO } from '../components/SEO';

export function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formSubmitted, setFormSubmitted] = React.useState(false);

  const breadcrumbs = [
    { name: 'Home', url: 'https://www.harrshaglobal.com/' },
    { name: 'Contact Us', url: 'https://www.harrshaglobal.com/contact' },
  ];

  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.harrshaglobal.com/contact#localbusiness',
    name: 'Harrsha Global Private Limited',
    alternateName: 'Harsha Global',
    url: 'https://www.harrshaglobal.com/contact',
    telephone: '+91 9491750999',
    email: 'info@harrshaglobal.com',
    priceRange: '₹₹₹₹',
    image: 'https://www.harrshaglobal.com/favicon.svg',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Muralinagar, Kancharapalem, Rushikonda IT SEZ',
      addressLocality: 'Visakhapatnam',
      addressRegion: 'Andhra Pradesh',
      postalCode: '530007',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '17.7289',
      longitude: '83.3022',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:30',
      },
    ],
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((b, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: b.name,
        item: b.url,
      })),
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <>
      <SEO 
        title="Contact Harrsha Global | Mining & Industrial Sourcing India"
        description="Connect with Harrsha Global Private Limited headquarters in Visakhapatnam, India. Sourcing for sponge iron, granite, bulletproof glass, and mining."
        url="/contact"
        schema={contactSchema}
      />

      <div className="pt-28 pb-20 min-h-screen bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-8">
            <Link to="/" className="hover:text-blue-700 transition-colors">Home</Link>
            <ChevronRight size={14} className="text-slate-400" />
            <span className="text-slate-800 font-semibold">Contact Us</span>
          </nav>

          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                Global Headquarters & Procurement
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1530] tracking-tight mb-4">
                Contact Harrsha Global Private Limited
              </h1>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light">
                For commercial trade inquiries, bulk raw material contracts (iron ore lumps, sponge iron, granite dimensional stone), defense ballistic laminates, or site partnerships across India and internationally.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* NAP Office Details & Operating Hours */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-xs space-y-6">
                <div className="border-b border-slate-100 pb-4">
                  <h2 className="text-xl font-bold text-[#0B1530]">Corporate Office Details</h2>
                  <p className="text-xs text-slate-500 mt-1">Official registered NAP (Name, Address, Phone)</p>
                </div>

                <div className="space-y-4 text-xs md:text-sm">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center shrink-0">
                      <Building2 size={20} />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block">Harrsha Global Private Limited</span>
                      <span className="text-slate-600 text-xs">CIN: Registered Industrial Enterprise</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block">Registered Physical Address:</span>
                      <p className="text-slate-600 text-xs leading-relaxed mt-0.5">
                        Muralinagar, Kancharapalem, Rushikonda IT SEZ,<br />
                        Visakhapatnam, Andhra Pradesh, PIN 530007, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block">Direct Telephone Numbers:</span>
                      <div className="flex flex-col gap-1 mt-1 text-xs font-semibold text-slate-800">
                        <a href="tel:9491750999" className="hover:text-blue-700">+91 9491750999 (General & Careers)</a>
                        <a href="tel:7396734389" className="hover:text-blue-700">+91 73967 34389 (Sales & Sourcing)</a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block">Official Email Addresses:</span>
                      <div className="flex flex-col gap-0.5 mt-1 text-xs font-semibold text-blue-700">
                        <a href="mailto:info@harrshaglobal.com" className="hover:underline">info@harrshaglobal.com</a>
                        <a href="mailto:Info@harrshaglobal.com" className="hover:underline">Info@harrshaglobal.com</a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 pt-2 border-t border-slate-100">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center shrink-0">
                      <Clock size={20} />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block">Working Business Hours:</span>
                      <p className="text-slate-600 text-xs mt-0.5">
                        Monday &ndash; Saturday: 9:00 AM &ndash; 6:30 PM IST<br />
                        <span className="text-slate-400">Sunday: Closed (Emergency Dispatch Available)</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Embedded Google Map */}
              <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs">
                <div className="p-4 bg-slate-50 border-b border-slate-100 text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <MapPin size={14} className="text-blue-700" /> Visakhapatnam Corporate Hub Location
                </div>
                <div className="aspect-16/9 w-full">
                  <iframe
                    title="Harrsha Global Visakhapatnam Headquarters"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121575.46237255855!2d83.21848154564571!3d17.73864016738902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39431389e6973f%3A0x92d9c20395498468!2sVisakhapatnam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

            {/* Direct Contact & Sourcing Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl border border-slate-200 p-8 md:p-12 shadow-xs">
                <div className="mb-6">
                  <h2 className="text-xl md:text-2xl font-bold text-[#0B1530]">Send Sourcing or Commercial Inquiry</h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Receive technical data sheets, price quotes, and delivery schedules within 24 business hours.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 size={36} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Inquiry Received Successfully!</h3>
                    <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                      Thank you for contacting Harrsha Global Private Limited. Our commercial industrial sales team will review your requirements and respond promptly.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="mt-4 px-6 py-2.5 bg-[#0B1530] text-white rounded-xl text-xs font-semibold"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form className="space-y-4 text-xs md:text-sm" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label htmlFor="contact-name" className="block font-semibold text-slate-800">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="contact-name"
                          required
                          className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0B1530] bg-slate-50/50"
                          placeholder="e.g. Rahul Sharma"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="contact-company" className="block font-semibold text-slate-800">
                          Company / Organization *
                        </label>
                        <input
                          type="text"
                          id="contact-company"
                          required
                          className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0B1530] bg-slate-50/50"
                          placeholder="e.g. Jindal Steel / AP Infrastructure"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label htmlFor="contact-email" className="block font-semibold text-slate-800">
                          Business Email *
                        </label>
                        <input
                          type="email"
                          id="contact-email"
                          required
                          className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0B1530] bg-slate-50/50"
                          placeholder="name@company.com"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="contact-phone" className="block font-semibold text-slate-800">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="contact-phone"
                          required
                          className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0B1530] bg-slate-50/50"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-division" className="block font-semibold text-slate-800">
                        Division of Interest *
                      </label>
                      <select
                        id="contact-division"
                        required
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0B1530] bg-slate-50/50 cursor-pointer"
                      >
                        <option value="">Select an industrial division...</option>
                        <option value="iron-ore">Mining & Calibrated Iron Ore Lumps</option>
                        <option value="sponge-iron">Direct Reduced Sponge Iron (DRI)</option>
                        <option value="granite">Granite Dimensional Stone & Export Slabs</option>
                        <option value="bulletproof">Bulletproof Sheets & Ballistic Polymers</option>
                        <option value="real-estate">Real Estate & Infrastructure Development</option>
                        <option value="solar">Solar Energy Park Investments</option>
                        <option value="careers">Careers & HR Inquiry</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-message" className="block font-semibold text-slate-800">
                        Specification & Sourcing Requirements *
                      </label>
                      <textarea
                        id="contact-message"
                        rows={5}
                        required
                        className="w-full p-4 border border-slate-200 rounded-2xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0B1530] bg-slate-50/50 resize-none"
                        placeholder="Detail material grade (e.g. Fe 64.5%), required monthly volume, delivery destination port/terminal, or project requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-[#0B1530] hover:bg-blue-950 text-white py-4 rounded-xl font-bold transition-all text-sm shadow-md cursor-pointer"
                    >
                      <span>Submit Official Inquiry</span>
                      <ArrowRight size={18} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
