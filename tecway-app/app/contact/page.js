"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can add your form submission logic here
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Gradient background effect */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 via-transparent to-transparent blur-3xl" />
      <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-gradient-to-r from-orange-500/20 to-transparent blur-[100px]" /> */}

      {/* Content */}
      <div className="relative z-10 px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight">
              Get In Touch
            </h1>
            <p className="text-xl text-white/50 max-w-2xl mx-auto">
              Have a question or a project in mind? We'd love to hear from you.
            </p>
          </div>

          <div className="flex justify-center items-center gap-8">
            {/* Contact Info */}
            {/* <div className="space-y-6">
              <Card className="border-none bg-[#0C0C0D] p-8 backdrop-blur-sm">
                <h2 className="text-2xl font-normal text-white mb-8">
                  Contact Info
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-orange-600/20">
                      <Mail className="h-5 w-5 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Email</h3>
                      <a
                        href="mailto:hello@tecway.com"
                        className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                      >
                        hello@tecway.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-orange-600/20">
                      <Phone className="h-5 w-5 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Phone</h3>
                      <a
                        href="tel:+1234567890"
                        className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                      >
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-orange-600/20">
                      <MapPin className="h-5 w-5 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Office</h3>
                      <p className="text-gray-400 text-sm">
                        123 Tech Street, Suite 100<br />
                        San Francisco, CA 94103
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div> */}

            {/* Contact Form */}
            <div className="w-full max-w-4xl">
              <Card className="border-none bg-[#0C0C0D] p-8 backdrop-blur-sm">
                <h2 className="text-2xl font-normal text-white mb-8">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white">
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-black border-white/20 text-white placeholder:text-gray-500 focus:border-orange-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-black border-white/20 text-white placeholder:text-gray-500 focus:border-orange-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-white">
                        Phone
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+1 (234) 567-890"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-black border-white/20 text-white placeholder:text-gray-500 focus:border-orange-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-white">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="Project inquiry"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="bg-black border-white/20 text-white placeholder:text-gray-500 focus:border-orange-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-black border-white/20 text-white placeholder:text-gray-500 focus:border-orange-500 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="bg-orange-600 hover:bg-orange-500 cursor-pointer text-white px-8 py-6 text-base font-medium rounded-xl w-full group"
                  >
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
