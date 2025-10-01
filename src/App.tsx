import { Hero } from "./components/sections/Hero";
import { Services } from "./components/sections/Services";
import { Portfolio } from "./components/sections/Portfolio";
import { About } from "./components/sections/About";
import { Contact } from "./components/sections/Contact";
import { Component as EtheralShadow } from "@/components/ui/etheral-shadow";
import './App.css';

function App() {
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
      <footer className="py-8 bg-black border-t border-gray-800 w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-xl font-bold text-white mb-4 md:mb-0">Crevo.</div>
            <div className="text-gray-400 text-sm">
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