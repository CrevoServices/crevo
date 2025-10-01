import { Component as EtheralShadow } from "@/components/ui/etheral-shadow";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col relative w-full overflow-hidden">
      {/* Navigation */}
      <nav className="p-6 md:p-8 relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/nobg crevo.png"  
              alt="Crevo Logo" 
              className="h-12 md:h-10 lg:h-24 w-auto"
            />
            <div className="text-4xl font-bold">Crevo.</div>
          </div>
          
          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              onClick={() => scrollToSection('services')}
              className="text-gray-300 hover:text-white transition-all duration-300 font-medium cursor-pointer relative pb-1 hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-white after:w-0 after:transition-all after:duration-300"
            >
              Services
            </a>
            <a
              onClick={() => scrollToSection('portfolio')}
              className="text-gray-300 hover:text-white transition-all duration-300 font-medium cursor-pointer relative pb-1 hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-white after:w-0 after:transition-all after:duration-300"
            >
              Portfolio
            </a>
            <a
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-white transition-all duration-300 font-medium cursor-pointer relative pb-1 hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-white after:w-0 after:transition-all after:duration-300"
            >
              About Us
            </a>
            <a
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-white transition-all duration-300 font-medium cursor-pointer relative pb-1 hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-white after:w-0 after:transition-all after:duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="flex-1 flex items-center relative z-10">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Creativity Meets 
                <span className="block bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  Automation
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-xl">
                We help businesses grow with AI automation and stunning creative design.
              </p>
              <Button 
                className="bg-transparent border-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-600 p-[2px] rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                <span className="bg-black px-8 py-3 rounded-md text-white hover:bg-gray-900 transition-colors">
                  Get in Touch
                </span>
              </Button>
            </div>

            {/* Right Visual Element - Spline Scene */}
            <div className="relative h-[500px] lg:h-[600px]">
              <div className="w-full h-full relative">
                <Spotlight
                  className="-top-40 left-0 md:left-20 md:-top-20"
                  fill="white"
                />
                
                {/* Spline Scene */}
                <div className="absolute inset-0 z-10">
                  <SplineScene 
                    scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                    className="w-full h-full border-none bg-transparent"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}