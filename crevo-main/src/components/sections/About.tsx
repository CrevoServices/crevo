import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Target, Zap } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-black text-white relative w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Crevo</h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              At Crevo, we merge AI-powered automation with creative design to deliver business solutions that are both efficient and beautiful. Our team of experts understands that modern businesses need more than just functionality—they need experiences that captivate and convert.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Sparkles className="w-6 h-6 text-blue-400" />
                <span className="text-gray-300">Innovation-driven approach</span>
              </div>
              <div className="flex items-center space-x-3">
                <Target className="w-6 h-6 text-purple-400" />
                <span className="text-gray-300">Results-focused solutions</span>
              </div>
              <div className="flex items-center space-x-3">
                <Zap className="w-6 h-6 text-yellow-400" />
                <span className="text-gray-300">Cutting-edge technology</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
                <div className="text-gray-400">Projects Completed</div>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
                <div className="text-gray-400">Client Satisfaction</div>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-400">Support Available</div>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">5+</div>
                <div className="text-gray-400">Years Experience</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}