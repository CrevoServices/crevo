import { Hero } from "./components/sections/Hero";
import { Services } from "./components/sections/Services";
import { Portfolio } from "./components/sections/Portfolio";
import { About } from "./components/sections/About";
import { Contact } from "./components/sections/Contact";
import { Component as EtheralShadow } from "@/components/ui/etheral-shadow";
import { Linkedin, Instagram } from "lucide-react";
import './App.css';

function App() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black w-full overflow-x-hidden relative">
      {/* Global Ethereal Background */}
      <div className="fixed inset-0 z-0">
        <EtheralShadow
          color="rgba(20, 20, 30, 0.4)"
          animation={{ scale: 15, speed: 60 }}
          noise={{ opacity: 0.3, scale: 0.6 }}
          sizing="fill"
          className="opacity-30"
          hideTitle={true}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Contact />

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-gray-800 w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-xl font-bold text-white">Crevo.</div>

              <nav className="flex items-center gap-2 text-gray-400 text-sm" aria-label="Footer navigation">
                <button
                  onClick={scrollToTop}
                  className="hover:text-white transition-colors cursor-pointer"
                  aria-label="Scroll to home"
                >
                  Home
                </button>
                <span className="text-gray-600">|</span>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-white transition-colors cursor-pointer"
                  aria-label="Navigate to services"
                >
                  Services
                </button>
                <span className="text-gray-600">|</span>
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="hover:text-white transition-colors cursor-pointer"
                  aria-label="Navigate to portfolio"
                >
                  Portfolio
                </button>
                <span className="text-gray-600">|</span>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                  aria-label="Navigate to contact"
                >
                  Contact
                </button>
              </nav>

              <div className="flex items-center gap-4">
                <a
                  href="https://linkedin.com/company/crevo-agency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gray-900 hover:bg-gray-800 transition-all duration-300 group"
                  aria-label="Visit our LinkedIn page"
                >
                  <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                </a>
                <a
                  href="https://instagram.com/crevo.agency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gray-900 hover:bg-gray-800 transition-all duration-300 group"
                  aria-label="Visit our Instagram page"
                >
                  <Instagram className="w-5 h-5 text-gray-400 group-hover:text-pink-400 transition-colors" />
                </a>
              </div>
            </div>

            <div className="text-center text-gray-400 text-sm border-t border-gray-800 pt-6">
              © 2025 Crevo Agency. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}

export default App;