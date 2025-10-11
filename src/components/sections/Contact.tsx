import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";
import { useState } from "react";

// ✅ 1. Import Supabase client
import { createClient } from "@supabase/supabase-js";

// ✅ 2. Initialize Supabase client (replace with your real values)
const supabaseUrl = "https://ikeorrpduvmjlocjwzep.supabase.co"; // e.g. https://abcd.supabase.co
const supabaseAnonKey = "sb_publishable_LrPmdEWeuD4txahm8VDJvw_8UBBmkBl"; // from Supabase → Settings → API
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    service: "",
    projectInfo: "",
    additionalInfo: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    "Lead Capture & CRM Integration",
    "Customer Support Ticket Management",
    "Appointment Setting",
    "AI Outreach – Personalized Emails",
    "AI Outreach – Social Media",
    "Website UI/UX",
    "E-commerce Store Design & Setup",
    "Product & Packaging Design",
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    if (!formData.projectInfo.trim()) {
      newErrors.projectInfo = "Project information is required";
    } else if (formData.projectInfo.trim().length < 50) {
      newErrors.projectInfo = "Please provide at least 50 characters describing your project";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ 3. Modified handleSubmit to push data to Supabase
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      // Insert into Supabase
      const { error } = await supabase.from("form_submissions").insert([
        {
          full_name: formData.fullName,
          email: formData.email,
          company_name: formData.companyName,
          service_selected: formData.service,
          project_info: formData.projectInfo,
          additional_info: formData.additionalInfo,
        },
      ]);

      if (error) {
        console.error("Supabase insert error:", error);
        alert("There was an error submitting the form. Please try again.");
      } else {
        alert("Thank you for your message! We'll get back to you within 24 hours.");
        setFormData({
          fullName: "",
          email: "",
          companyName: "",
          service: "",
          projectInfo: "",
          additionalInfo: "",
        });
        setErrors({});
      }

      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-950 text-white relative w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to transform your business? Let's discuss how we can help you grow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-blue-500/20">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Email</h3>
                    <a href="mailto:hello@crevo.agency" className="text-gray-400 hover:text-blue-400 transition-colors">
                      crevo.services@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-purple-500/20">
                    <Phone className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-green-500/20">
                    <MapPin className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Location</h3>
                    <p className="text-gray-400">Bengaluru, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <Input
                        value={formData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                        className={`bg-gray-800 border-gray-700 text-white focus:border-blue-500 ${
                          errors.fullName ? "border-red-500" : ""
                        }`}
                        placeholder="John Doe"
                      />
                      {errors.fullName && (
                        <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className={`bg-gray-800 border-gray-700 text-white focus:border-blue-500 ${
                          errors.email ? "border-red-500" : ""
                        }`}
                        placeholder="john@company.com"
                      />
                      {errors.email && (
                        <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Company Name <span className="text-red-400">*</span>
                    </label>
                    <Input
                      value={formData.companyName}
                      onChange={(e) => handleInputChange("companyName", e.target.value)}
                      className={`bg-gray-800 border-gray-700 text-white focus:border-blue-500 ${
                        errors.companyName ? "border-red-500" : ""
                      }`}
                      placeholder="Your Company Name"
                    />
                    {errors.companyName && (
                      <p className="text-red-400 text-xs mt-1">{errors.companyName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Select Service <span className="text-red-400">*</span>
                    </label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) => handleInputChange("service", value)}
                    >
                      <SelectTrigger
                        className={`bg-gray-800 border-gray-700 text-white focus:border-blue-500 ${
                          errors.service ? "border-red-500" : ""
                        }`}
                      >
                        <SelectValue placeholder="Choose a service" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700">
                        {services.map((service) => (
                          <SelectItem
                            key={service}
                            value={service}
                            className="text-white hover:bg-gray-700 focus:bg-gray-700 cursor-pointer"
                          >
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.service && (
                      <p className="text-red-400 text-xs mt-1">{errors.service}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Project Information – Problems looking to solve{" "}
                      <span className="text-red-400">*</span>
                    </label>
                    <Textarea
                      value={formData.projectInfo}
                      onChange={(e) => handleInputChange("projectInfo", e.target.value)}
                      className={`bg-gray-800 border-gray-700 text-white focus:border-blue-500 min-h-[120px] ${
                        errors.projectInfo ? "border-red-500" : ""
                      }`}
                      placeholder="Describe the problems you're looking to solve (minimum 50 characters)..."
                    />
                    <div className="flex justify-between items-center mt-1">
                      {errors.projectInfo ? (
                        <p className="text-red-400 text-xs">{errors.projectInfo}</p>
                      ) : (
                        <p className="text-gray-500 text-xs">
                          {formData.projectInfo.length}/50 characters minimum
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Additional Information <span className="text-gray-500 text-xs">(Optional)</span>
                    </label>
                    <Textarea
                      value={formData.additionalInfo}
                      onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
                      className="bg-gray-800 border-gray-700 text-white focus:border-blue-500 min-h-[100px]"
                      placeholder="Any additional details you'd like to share..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-transparent border-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-600 p-[2px] rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="bg-gray-900 px-8 py-3 rounded-md text-white hover:bg-gray-800 transition-colors w-full flex items-center justify-center">
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </span>
                  </Button>

                  <p className="text-sm text-gray-400 italic text-center">
                    *We'll get back within 24 hours.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
