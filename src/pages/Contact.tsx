import { useEffect } from 'react';
import { FadeIn } from '../components/FadeIn';
import { User, Mail, ArrowRight } from 'lucide-react';

export function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12 flex flex-col items-center">
            <span className="inline-block bg-[#E5E9FF] text-[#6b66ff] px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1a202c] mb-4 tracking-tight">
              Let's Get In Touch.
            </h1>
            <p className="text-gray-500 text-lg">
              Or just reach out manually to us at{' '}
              <a href="mailto:Info@harrshaglobal.com" className="text-[#6b66ff] hover:underline">
                Info@harrshaglobal.com
              </a>
            </p>
          </div>

          <form className="space-y-6 max-w-[500px] mx-auto" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-semibold text-[#1a202c]">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
                  <User size={20} strokeWidth={1.5} />
                </div>
                <input
                  type="text"
                  id="name"
                  className="block w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-full text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6b66ff] focus:border-transparent transition-shadow"
                  placeholder="Enter your full name"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-semibold text-[#1a202c]">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
                  <Mail size={20} strokeWidth={1.5} />
                </div>
                <input
                  type="email"
                  id="email"
                  className="block w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-full text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6b66ff] focus:border-transparent transition-shadow"
                  placeholder="Enter your email address"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-semibold text-[#1a202c]">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="block w-full p-4 border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6b66ff] focus:border-transparent transition-shadow resize-none"
                placeholder="Enter your message"
                required
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#6b66ff] hover:bg-[#5a55ff] text-white py-4 rounded-full font-medium transition-colors text-base"
              >
                Submit Form <ArrowRight size={20} />
              </button>
            </div>
          </form>
        </FadeIn>
      </div>
    </div>
  );
}
