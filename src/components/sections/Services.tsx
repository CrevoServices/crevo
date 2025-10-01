import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Palette, MessageSquare, Calendar, Phone, CreditCard, Brush, Package } from "lucide-react";

export function Services() {
  const automationServices = [
    { icon: Bot, title: "CRM Integration", description: "Seamlessly connect your customer data" },
    { icon: MessageSquare, title: "Chatbots", description: "24/7 intelligent customer support" },
    { icon: CreditCard, title: "Lead Capture", description: "Automated lead generation systems" },
    { icon: Calendar, title: "Appointment Scheduling", description: "Smart booking and calendar management" },
    { icon: Phone, title: "Automated Callers", description: "AI-powered voice interactions" },
  ];

  const creativeServices = [
    { icon: Palette, title: "Logo Design", description: "Memorable brand identities" },
    { icon: Brush, title: "Brochures", description: "Professional marketing materials" },
    { icon: Package, title: "Packaging", description: "Product packaging that sells" },
    { icon: Bot, title: "Branding", description: "Complete brand strategy and design" },
    { icon: MessageSquare, title: "Website UI/UX", description: "User-centered digital experiences" },
  ];

  return (
    <section id="services" className="py-20 bg-black text-white relative w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We combine cutting-edge AI automation with creative design to deliver comprehensive solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* AI Automation */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                AI Automation
              </span>
            </h3>
            <div className="space-y-4">
              {automationServices.map((service, index) => (
                <Card key={index} className="bg-gray-900 border-gray-800 hover:border-blue-500/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 rounded-lg bg-blue-500/20">
                        <service.icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{service.title}</h4>
                        <p className="text-gray-400 text-sm">{service.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Creative Design */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Creative Design
              </span>
            </h3>
            <div className="space-y-4">
              {creativeServices.map((service, index) => (
                <Card key={index} className="bg-gray-900 border-gray-800 hover:border-purple-500/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 rounded-lg bg-purple-500/20">
                        <service.icon className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{service.title}</h4>
                        <p className="text-gray-400 text-sm">{service.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}