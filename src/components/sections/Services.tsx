import { Card, CardContent } from "@/components/ui/card";
import { Database, Headphones, Calendar, Mail, Share2, Globe, ShoppingCart, Package } from "lucide-react";

export function Services() {
  const automationServices = [
    { icon: Database, title: "Lead Capture & CRM Integration" },
    { icon: Headphones, title: "Customer Support Ticket Management" },
    { icon: Calendar, title: "Appointment Setting" },
    { icon: Mail, title: "AI Outreach – Personalized Emails" },
    { icon: Share2, title: "AI Outreach – Social Media" },
  ];

  const creativeServices = [
  { 
    icon: Globe, 
    title: "Website UI/X", 
    description: "Crafting intuitive and visually engaging interfaces that enhance user experience and brand impact." 
  },
  { 
    icon: ShoppingCart, 
    title: "E-commerce Store Design & Setup", 
    description: "Building seamless, high-converting online stores tailored to your brand and customers." 
  },
  { 
    icon: Package, 
    title: "Product & Packaging Design", 
    description: "Creating impactful designs that elevate your product and make your brand stand out on shelves." 
  },
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
                <Card
                  key={index}
                  className="bg-gray-900 border-gray-800 hover:border-blue-500/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-lg bg-blue-500/20 group-hover:bg-blue-500/30 transition-all duration-300">
                        <service.icon className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-base">{service.title}</h4>
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
                <Card
                  key={index}
                  className="bg-gray-900 border-gray-800 hover:border-purple-500/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-lg bg-purple-500/20 group-hover:bg-purple-500/30 transition-all duration-300">
                        <service.icon className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-base">{service.title}</h4>
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