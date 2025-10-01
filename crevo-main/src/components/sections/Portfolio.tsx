import { Card, CardContent } from "@/components/ui/card";

export function Portfolio() {
  const portfolioItems = [
    {
      title: "Website Mockup",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      category: "Web Design"
    },
    {
      title: "Logo Design",
      image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=400&h=300&fit=crop",
      category: "Branding"
    },
    {
      title: "Packaging Concept",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop",
      category: "Packaging"
    },
    {
      title: "Automation Dashboard",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      category: "AI Automation"
    },
    {
      title: "Brochure Design",
      image: "https://images.unsplash.com/photo-1586281010691-43d418424431?w=400&h=300&fit=crop",
      category: "Print Design"
    },
    {
      title: "Branding Kit",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      category: "Branding"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-950 text-white relative w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Portfolio</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcase of our latest work across automation and creative design
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800 overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.category}</p>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-600"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}