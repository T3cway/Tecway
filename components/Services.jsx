"use client";

import { BentoGrid } from "@/components/ui/bento-grid";
import ChatBotPreview from "./ChatBotPreview";
import { Globe, Smartphone, Settings, MessageSquare, Server } from "lucide-react";
import { useRouter } from "next/navigation";

const Services = () => {
  const router = useRouter();

  const handleServiceClick = (item) => {
    if (item.category) {
      router.push(`/projects?category=${item.category}`);
    }
  };

  const serviceItems = [
    {
      title: "Web Applications",
      description: "Build robust, scalable, and user-friendly web apps tailored to your business needs. From MVPs to full-scale platforms.",
      icon: <Globe className="w-4 h-4 text-orange-500" />,
      status: "Available",
      tags: ["React", "Next.js", "Full-Stack"],
      colSpan: 2,
      hasPersistentHover: true,
      category: "web",
      preview: (
        <div className="relative bg-zinc-900/50 rounded-lg border border-white/10 h-48 flex items-center justify-center overflow-hidden group-hover:border-orange-500/30 transition-all duration-300">
          <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/5 transition-colors duration-300"></div>
          <div className="text-white/40 text-sm font-medium relative z-10">Web App Preview</div>
        </div>
      ),
    },
    {
      title: "Mobile Applications",
      description: "Bring your ideas to life with powerful mobile apps. We design and develop scalable iOS and Android applications.",
      icon: <Smartphone className="w-4 h-4 text-orange-500" />,
      status: "Available",
      tags: ["iOS", "Android", "React Native"],
      category: "mobile",
      preview: (
        <div className="relative bg-zinc-900/50 rounded-lg border border-white/10 h-48 flex items-center justify-center overflow-hidden group-hover:border-orange-500/30 transition-all duration-300">
          <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/5 transition-colors duration-300"></div>
          <div className="text-white/40 text-sm font-medium relative z-10">Mobile App Preview</div>
        </div>
      ),
    },
    {
      title: "Aramco CCC Setup",
      description: "Complete setup and configuration for Aramco CCC infrastructure, ensuring optimal performance and reliability.",
      icon: <Settings className="w-4 h-4 text-orange-500" />,
      status: "Live",
      tags: ["Infrastructure", "Configuration", "Enterprise"],
      category: "setup",
      preview: (
        <div className="relative bg-zinc-900/50 rounded-lg border border-white/10 h-48 flex items-center justify-center overflow-hidden group-hover:border-orange-500/30 transition-all duration-300">
          <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/5 transition-colors duration-300"></div>
          <div className="text-white/40 text-sm font-medium relative z-10">Aramco CCC Setup Preview</div>
        </div>
      ),
    },
    {
      title: "Chatbot Development",
      description: "We build custom AI chat solutions for instant support, streamlined processes, and a seamless audience experience.",
      icon: <MessageSquare className="w-4 h-4 text-orange-500" />,
      status: "Live",
      tags: ["AI", "Chat", "Support"],
      category: "chatbot",
      preview: <ChatBotPreview />,
    },
    {
      title: "System Setup & Architecture",
      description: "Design and implement robust system architectures with scalable infrastructure and optimal performance configurations.",
      icon: <Server className="w-4 h-4 text-orange-500" />,
      status: "Available",
      tags: ["Architecture", "Infrastructure", "Scalability"],
      category: "infrastructure",
      preview: (
        <div className="relative bg-zinc-900/50 rounded-lg border border-white/10 h-48 flex items-center justify-center overflow-hidden group-hover:border-orange-500/30 transition-all duration-300">
          <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/5 transition-colors duration-300"></div>
          <div className="text-white/40 text-sm font-medium relative z-10">System Architecture Preview</div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-black text-foreground relative overflow-hidden">
      {/* Ambient glow similar to Work section */}
      <div className="fixed right-0 top-0 h-[800px] w-[800px] bg-[radial-gradient(circle_at_center,hsl(16_100%_56%/0.15),transparent_70%)] blur-3xl pointer-events-none"></div>
      <div className="fixed left-0 bottom-0 h-[600px] w-[600px] bg-[radial-gradient(circle_at_center,hsl(16_100%_56%/0.1),transparent_70%)] blur-3xl pointer-events-none"></div>

      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto relative z-10">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <h1 className="text-6xl md:text-7xl font-light text-white mb-6 tracking-tight">
            Full-Service Agency
          </h1>
          <p className="text-xl text-white/40 max-w-2xl mx-auto">
            From automation to analytics, we turn your vision into AI solutions.
          </p>
        </section>

        {/* Services Bento Grid */}
        <section>
          <BentoGrid items={serviceItems} onClick={handleServiceClick} />
        </section>
      </main>
    </div>
  );
};

export default Services;
