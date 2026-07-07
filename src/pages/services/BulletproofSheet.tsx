import { FadeIn } from '../../components/FadeIn';
import { Link } from 'react-router-dom';
import { Shield, ChevronRight } from 'lucide-react';

export function BulletproofSheet() {
  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="aspect-[21/9] w-full overflow-hidden mb-16 rounded-2xl">
            <img 
              src="https://vennky.sirv.com/iron%20spongs/ballari/Microsoft_%20Project%20Silica.jpg" 
              alt="Bulletproof Sheet Manufacturing" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-12 text-center">
              Bulletproof Sheet Manufacturing
            </h1>
            
            <div className="space-y-16">
              {/* Introduction */}
              <section>
                <h2 className="text-2xl font-semibold text-primary mb-6 flex items-center gap-3">
                  <Shield className="text-primary" size={28} />
                  Bulletproof Sheet
                </h2>
                <div className="text-lg text-primary/70 leading-relaxed space-y-4">
                  <p>
                    At Harrshaglobal Pvt Ltd, we specialize in the manufacturing of bulletproof sheets designed to meet the highest standards of security and durability.
                  </p>
                  <p>
                    Our facility is equipped with advanced machinery and follows rigorous quality control to produce ballistic-resistant materials trusted by defense, security, and infrastructure sectors.
                  </p>
                </div>
              </section>

              {/* What We Manufacture */}
              <section className="bg-primary/5 p-8 md:p-12 rounded-3xl border border-primary/10">
                <h2 className="text-2xl font-semibold text-primary mb-6">What We Manufacture</h2>
                <p className="text-lg text-primary/70 mb-8">
                  We produce bulletproof sheets in a variety of specifications, including:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {[
                    "Multi-layered Polycarbonate Panels",
                    "Kevlar-Reinforced Composite Sheets",
                    "Ballistic-Grade Steel Plates",
                    "Glass-Clad Laminates"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-primary/5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-primary font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg text-primary/70 italic bg-white p-6 rounded-xl border border-primary/5">
                  Each sheet is tested for ballistic impact resistance as per international standards (NIJ, BIS, and ISO).
                </p>
              </section>

              {/* Applications */}
              <section>
                <h2 className="text-2xl font-semibold text-primary mb-6">Applications</h2>
                <p className="text-lg text-primary/70 mb-6">
                  Our bulletproof materials are used in:
                </p>
                <ul className="space-y-4">
                  {[
                    "Security cabins & guardrooms",
                    "Military bunkers and defense vehicles",
                    "Safe rooms and private security doors",
                    "Banks, ATMs, and government buildings",
                    "Data centers and embassies"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-lg text-primary/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
