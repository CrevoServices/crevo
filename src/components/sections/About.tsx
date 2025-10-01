import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Target, Rocket, CheckCircle, Cpu, Users, Globe } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-black text-white relative w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Crevo</h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              At Crevo, we combine AI-powered automation with creative design to help businesses work smarter and stand out. As a growing team, we focus on building solutions that are simple, effective, and visually engaging.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Sparkles className="w-6 h-6 text-blue-400" />
                <span className="text-gray-300">Innovation-Driven</span>
              </div>
              <div className="flex items-center space-x-3">
                <Target className="w-6 h-6 text-purple-400" />
                <span className="text-gray-300">Client-Centric</span>
              </div>
              <div className="flex items-center space-x-3">
                <Rocket className="w-6 h-6 text-cyan-400" />
                <span className="text-gray-300">Future-Ready</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6 text-center">
                <CheckCircle className="w-10 h-10 text-blue-400 mx-auto mb-3" />
                <div className="text-gray-300 font-medium">Early Projects Delivered</div>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6 text-center">
                <Cpu className="w-10 h-10 text-purple-400 mx-auto mb-3" />
                <div className="text-gray-300 font-medium">Creative + AI Expertise</div>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6 text-center">
                <Users className="w-10 h-10 text-green-400 mx-auto mb-3" />
                <div className="text-gray-300 font-medium">Agile & Flexible Team</div>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6 text-center">
                <Globe className="w-10 h-10 text-cyan-400 mx-auto mb-3" />
                <div className="text-gray-300 font-medium">Global Outlook</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}