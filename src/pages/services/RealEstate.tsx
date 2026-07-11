import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../../components/FadeIn';

export function RealEstate() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white text-slate-900 min-h-screen selection:bg-slate-950 selection:text-white pt-28 pb-20 px-6 md:px-12">
      <div className="w-full max-w-4xl mx-auto space-y-16">
        
        {/* Simple, Bold, Elegant Editorial Statement */}
        <FadeIn delay={0.1}>
          <div className="space-y-4 text-center md:text-left">
            <p className="text-xs font-bold tracking-[0.3em] text-slate-400 uppercase">
              Harrsha Global
            </p>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-950 uppercase leading-none">
              We Do Real Estate <br />
              & Infrastructure
            </h1>
            <p className="text-slate-500 text-sm md:text-base font-normal max-w-xl leading-relaxed pt-2">
              Precision general contracting, concrete framing, insulation, masonry, and exterior facade finishes.
            </p>
            <div className="w-16 h-[2px] bg-slate-900 mt-6 mx-auto md:mx-0" />
          </div>
        </FadeIn>

        {/* Clean, Full-Width High-Contrast Image */}
        <FadeIn delay={0.2} className="w-full">
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-slate-50">
            <img 
              src="https://vennky.sirv.com/ChatGPT%20Image%20Jul%205%2C%202026%2C%2008_56_57%20PM.png" 
              alt="Harrsha Global Real Estate & Infrastructure" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </FadeIn>

        {/* Architecture - Build and Finish Service */}
        <FadeIn delay={0.3}>
          <div className="border-t border-slate-100 pt-12 grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-5 space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block">
                Professional Service
              </span>
              <h2 className="text-xl md:text-2xl font-black tracking-tight text-slate-950 uppercase leading-tight">
                Architecture – <br />
                Build and Finish
              </h2>
            </div>
            <div className="md:col-span-7">
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                A professional turnkey construction service by Harrsha Global. Delivering engineered spaces through cohesive coordination, superior architectural alignments, and absolute structural compliance.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Scope of Work */}
        <FadeIn delay={0.35}>
          <div className="border-t border-slate-100 pt-12 space-y-8">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Scope of Work
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "Strong Structural Construction", desc: "Built with high-quality certified materials for permanent lifespan and resistance." },
                { title: "Expert Building Execution", desc: "Meticulous structural framing, pouring, solid masonry, and durable finishing layouts." },
                { title: "Premium Exterior Finishes", desc: "Facade insulation, state-of-the-art materials selection, and high-contrast panel finishes." },
                { title: "End-to-End Site Supervision", desc: "Complete architectural management, structural check gates, and professional on-site supervision." }
              ].map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <h4 className="text-sm font-bold text-slate-950 uppercase tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Work Phases & Process */}
        <FadeIn delay={0.4}>
          <div className="border-t border-slate-100 pt-12 space-y-8">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Work Phases & Process
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { num: "01", phase: "Earthwork & Foundation", desc: "Site grading, soil stabilization, and reinforced concrete footing." },
                { num: "02", phase: "Framing & Masonry", desc: "Erecting structural pillars, slabs, and solid outer partitions." },
                { num: "03", phase: "Facade Finishing", desc: "Installing premium insulated panels, glass curtain walls, and masonry panels." }
              ].map((phase, idx) => (
                <div key={idx} className="space-y-3 relative group">
                  <div className="text-3xl font-black text-slate-200 group-hover:text-slate-400 transition-colors duration-300 font-mono">
                    {phase.num}
                  </div>
                  <h4 className="text-sm font-bold text-slate-950 uppercase tracking-tight">
                    {phase.phase}
                  </h4>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                    {phase.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* High-End Service & Call to Action */}
        <FadeIn delay={0.45}>
          <div className="border-t border-slate-100 pt-12 pb-8">
            <div className="bg-slate-50 border border-slate-100 p-8 sm:p-12 rounded-2xl space-y-6 text-center">
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 block">
                High End Service
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-950 uppercase tracking-tight">
                Architecture – Build and Finish
              </h3>
              <p className="text-slate-600 text-sm max-w-xl mx-auto leading-relaxed">
                Begin your premium design or build journey with Harrsha Global. Submit your inquiry to schedule a customized architectural design consultation.
              </p>
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-slate-950 hover:bg-slate-800 text-white font-bold rounded-xl text-xs sm:text-sm uppercase tracking-widest shadow-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Send Inquiry
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>

      </div>
    </div>
  );
}
