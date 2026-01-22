"use client";

import { useMemo, useCallback, memo } from "react";
import { BentoGrid } from "@/components/ui/bento-grid";
import ChatBotPreview from "./ChatBotPreview";
import { Globe, Smartphone, Settings, MessageSquare, Server, Palette, Code, Layers, Database, Cpu, Sparkles, Monitor, Building2 } from "lucide-react";
import { useRouter } from "next/navigation";

// Enhanced Preview Components for each service type
const WebAppPreview = memo(() => (
  <div className="relative bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 rounded-lg border border-white/10 h-48 overflow-hidden group-hover:border-orange-500/30 transition-all duration-300">
    {/* Browser mockup frame */}
    <div className="absolute inset-0 p-3 flex flex-col">
      {/* Browser bar */}
      <div className="flex items-center gap-2 mb-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/30 border border-red-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/30 border border-yellow-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/30 border border-green-500/50"></div>
        </div>
        <div className="flex-1 h-5 bg-white/5 rounded-md border border-white/10 flex items-center px-2">
          <Globe className="w-3 h-3 text-white/40 mr-2" />
          <div className="h-1.5 bg-white/10 rounded flex-1"></div>
        </div>
      </div>
      {/* Content area with code-like pattern */}
      <div className="flex-1 bg-gradient-to-br from-orange-500/5 to-transparent rounded border border-white/5 p-3 relative overflow-hidden">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Code className="w-3.5 h-3.5 text-orange-500/60" />
            <div className="h-2 bg-orange-500/20 rounded w-20"></div>
          </div>
          <div className="h-2 bg-white/5 rounded w-32 ml-5"></div>
          <div className="h-2 bg-white/5 rounded w-24 ml-5"></div>
          <div className="flex items-center gap-2 mt-3">
            <Monitor className="w-3.5 h-3.5 text-orange-500/60" />
            <div className="h-2 bg-orange-500/20 rounded w-16"></div>
          </div>
        </div>
        {/* Animated glow effect */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-orange-500/10 rounded-full blur-2xl animate-pulse"></div>
      </div>
    </div>
  </div>
));

const MobileAppPreview = memo(() => (
  <div className="relative bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 rounded-lg border border-white/10 h-48 overflow-hidden group-hover:border-orange-500/30 transition-all duration-300 flex items-center justify-center">
    <div className="flex items-center justify-center gap-8">
      {/* App Store Logo */}
      <div className="flex flex-col items-center gap-2">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl border border-white/10 flex items-center justify-center shadow-lg backdrop-blur-sm">
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" fill="currentColor" className="text-white/80"/>
          </svg>
        </div>
        <span className="text-xs text-white/60 font-medium">App Store</span>
      </div>

      {/* Play Store Logo */}
      <div className="flex flex-col items-center gap-2">
        <div className="w-20 h-20 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-2xl border border-white/10 flex items-center justify-center shadow-lg backdrop-blur-sm">
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L16.81,15.12L14.54,12.85L16.81,10.81L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" fill="currentColor" className="text-white/80"/>
          </svg>
        </div>
        <span className="text-xs text-white/60 font-medium">Play Store</span>
      </div>
    </div>
    
    {/* Subtle glow effect */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
  </div>
));

const InfrastructurePreview = memo(() => (
  <div className="relative bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 rounded-lg border border-white/10 h-48 overflow-hidden group-hover:border-orange-500/30 transition-all duration-300">
    {/* Network diagram visualization */}
    <div className="absolute inset-0 p-4">
      {/* Central server */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-orange-600/10 rounded-lg border border-orange-500/30 flex items-center justify-center">
          <Server className="w-6 h-6 text-orange-500/70" />
        </div>
      </div>
      {/* Connected nodes */}
      <div className="absolute top-4 left-4 w-8 h-8 bg-white/5 rounded border border-white/10 flex items-center justify-center">
        <Database className="w-4 h-4 text-white/40" />
      </div>
      <div className="absolute top-4 right-4 w-8 h-8 bg-white/5 rounded border border-white/10 flex items-center justify-center">
        <Cpu className="w-4 h-4 text-white/40" />
      </div>
      <div className="absolute bottom-4 left-4 w-8 h-8 bg-white/5 rounded border border-white/10 flex items-center justify-center">
        <Layers className="w-4 h-4 text-white/40" />
      </div>
      <div className="absolute bottom-4 right-4 w-8 h-8 bg-white/5 rounded border border-white/10 flex items-center justify-center">
        <Settings className="w-4 h-4 text-white/40" />
      </div>
      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
        <line x1="20%" y1="20%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="1" className="text-orange-500" />
        <line x1="80%" y1="20%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="1" className="text-orange-500" />
        <line x1="20%" y1="80%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="1" className="text-orange-500" />
        <line x1="80%" y1="80%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="1" className="text-orange-500" />
      </svg>
    </div>
  </div>
));

const UIUXPreview = memo(() => (
  <div className="relative bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 rounded-lg border border-white/10 h-48 overflow-hidden group-hover:border-orange-500/30 transition-all duration-300">
    <div className="absolute inset-0 p-4 flex flex-col gap-3">
      {/* Color palette */}
      <div className="flex gap-2">
        <div className="w-8 h-8 rounded bg-gradient-to-br from-orange-500 to-orange-600 border border-orange-400/50"></div>
        <div className="w-8 h-8 rounded bg-gradient-to-br from-purple-500 to-purple-600 border border-purple-400/50"></div>
        <div className="w-8 h-8 rounded bg-gradient-to-br from-blue-500 to-blue-600 border border-blue-400/50"></div>
        <div className="w-8 h-8 rounded bg-gradient-to-br from-pink-500 to-pink-600 border border-pink-400/50"></div>
      </div>
      {/* Design elements */}
      <div className="flex-1 grid grid-cols-3 gap-2">
        <div className="bg-gradient-to-br from-orange-500/20 to-transparent rounded border border-orange-500/20 flex items-center justify-center">
          <Palette className="w-4 h-4 text-orange-500/60" />
        </div>
        <div className="bg-gradient-to-br from-purple-500/20 to-transparent rounded border border-purple-500/20 flex items-center justify-center">
          <Sparkles className="w-4 h-4 text-purple-500/60" />
        </div>
        <div className="bg-gradient-to-br from-blue-500/20 to-transparent rounded border border-blue-500/20 flex items-center justify-center">
          <Layers className="w-4 h-4 text-blue-500/60" />
        </div>
      </div>
      {/* Typography preview */}
      <div className="space-y-1">
        <div className="h-2 bg-white/10 rounded w-full"></div>
        <div className="h-2 bg-white/5 rounded w-3/4"></div>
      </div>
    </div>
  </div>
));

const AramcoSetupPreview = memo(() => (
  <div className="relative bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 rounded-lg border border-white/10 h-48 overflow-hidden group-hover:border-orange-500/30 transition-all duration-300">
    <div className="absolute inset-0 p-4">
      {/* Configuration panel mockup */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Settings className="w-4 h-4 text-orange-500/70" />
          <div className="h-2 bg-white/10 rounded w-24"></div>
        </div>
        <div className="space-y-2 pl-6">
          <div className="h-1.5 bg-orange-500/20 rounded w-full"></div>
          <div className="h-1.5 bg-white/5 rounded w-4/5"></div>
          <div className="h-1.5 bg-white/5 rounded w-3/5"></div>
        </div>
        <div className="flex items-center gap-2 mt-4">
          <Server className="w-4 h-4 text-orange-500/70" />
          <div className="h-2 bg-white/10 rounded w-20"></div>
        </div>
        <div className="flex gap-2 pl-6">
          <div className="w-12 h-8 bg-gradient-to-br from-orange-500/20 to-transparent rounded border border-orange-500/30 flex items-center justify-center">
            <div className="w-2 h-2 bg-orange-500/60 rounded-full animate-pulse"></div>
          </div>
          <div className="w-12 h-8 bg-gradient-to-br from-orange-500/20 to-transparent rounded border border-orange-500/30 flex items-center justify-center">
            <div className="w-2 h-2 bg-orange-500/60 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          </div>
          <div className="w-12 h-8 bg-gradient-to-br from-orange-500/20 to-transparent rounded border border-orange-500/30 flex items-center justify-center">
            <div className="w-2 h-2 bg-orange-500/60 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>
      {/* Status indicator */}
      <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2 py-1 bg-green-500/10 border border-green-500/30 rounded">
        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
        <span className="text-xs text-green-500/80 font-medium">Live</span>
      </div>
    </div>
  </div>
));

WebAppPreview.displayName = "WebAppPreview";
MobileAppPreview.displayName = "MobileAppPreview";
InfrastructurePreview.displayName = "InfrastructurePreview";
UIUXPreview.displayName = "UIUXPreview";
AramcoSetupPreview.displayName = "AramcoSetupPreview";

const ERPPreview = memo(() => (
  <div className="relative bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 rounded-lg border border-white/10 h-48 overflow-hidden group-hover:border-orange-500/30 transition-all duration-300">
    <div className="absolute inset-0 p-4">
      {/* ERP system modules visualization */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Building2 className="w-4 h-4 text-orange-500/70" />
          <div className="h-2 bg-white/10 rounded w-28"></div>
        </div>
        {/* Module cards */}
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-gradient-to-br from-orange-500/10 to-transparent rounded border border-orange-500/20 p-2">
            <div className="h-1.5 bg-orange-500/30 rounded w-full mb-1"></div>
            <div className="h-1 bg-white/5 rounded w-3/4"></div>
          </div>
          <div className="bg-gradient-to-br from-orange-500/10 to-transparent rounded border border-orange-500/20 p-2">
            <div className="h-1.5 bg-orange-500/30 rounded w-full mb-1"></div>
            <div className="h-1 bg-white/5 rounded w-3/4"></div>
          </div>
          <div className="bg-gradient-to-br from-orange-500/10 to-transparent rounded border border-orange-500/20 p-2">
            <div className="h-1.5 bg-orange-500/30 rounded w-full mb-1"></div>
            <div className="h-1 bg-white/5 rounded w-3/4"></div>
          </div>
          <div className="bg-gradient-to-br from-orange-500/10 to-transparent rounded border border-orange-500/20 p-2">
            <div className="h-1.5 bg-orange-500/30 rounded w-full mb-1"></div>
            <div className="h-1 bg-white/5 rounded w-3/4"></div>
          </div>
        </div>
        {/* Integration lines */}
        <div className="flex items-center justify-center gap-1 mt-2">
          <div className="h-px bg-orange-500/20 flex-1"></div>
          <Database className="w-3 h-3 text-orange-500/50" />
          <div className="h-px bg-orange-500/20 flex-1"></div>
        </div>
      </div>
      {/* Subtle glow effect */}
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-orange-500/5 rounded-full blur-2xl"></div>
    </div>
  </div>
));

ERPPreview.displayName = "ERPPreview";

// Fallback placeholder for any unmapped services
const PreviewPlaceholder = memo(({ label, className = "" }) => (
  <div className={`relative bg-zinc-900/50 rounded-lg border border-white/10 h-48 flex items-center justify-center overflow-hidden group-hover:border-orange-500/30 transition-all duration-300 ${className}`}>
    <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/5 transition-colors duration-300"></div>
    <div className="text-white/40 text-sm font-medium relative z-10">{label}</div>
  </div>
));

PreviewPlaceholder.displayName = "PreviewPlaceholder";

// Icon configuration - lazy loaded and optimized
const iconConfig = {
  Globe: Globe,
  Smartphone: Smartphone,
  Settings: Settings,
  MessageSquare: MessageSquare,
  Server: Server,
  Palette: Palette,
  Building2: Building2,
};

// Service items moved outside component to prevent recreation on every render
const serviceItemsConfig = [
  {
    title: "Web Applications",
    description: "Build robust, scalable, and user-friendly web applications tailored to your business needs. We develop custom web solutions using modern frameworks like React, Next.js, and Node.js, creating everything from MVPs to full-scale enterprise platforms. Our web applications are optimized for performance, SEO, and user experience, ensuring your business has a strong digital presence.",
    iconName: "Globe",
    status: "Available",
    tags: ["React", "Next.js", "Full-Stack"],
    colSpan: 2,
    hasPersistentHover: true,
    category: "web",
    previewType: "placeholder",
    previewLabel: "Web App Preview",
  },
  {
    title: "Mobile Applications",
    description: "Bring your ideas to life with powerful mobile applications. We design and develop scalable iOS and Android applications using Flutter, React Native, Swift, and Kotlin. From concept to App Store and Google Play Store publication, we handle the entire mobile app development lifecycle, ensuring your app delivers exceptional user experiences and meets platform guidelines.",
    iconName: "Smartphone",
    status: "Available",
    tags: ["iOS", "Android", "React Native"],
    category: "mobile",
    previewType: "placeholder",
    previewLabel: "Mobile App Preview",
  },
  {
    title: "Custom ERP Systems",
    description: "Build tailored Enterprise Resource Planning systems to streamline your business operations, manage resources, optimize workflows, and integrate with existing business processes. Our custom ERP solutions include modules for inventory management, accounting, human resources, customer relationship management, and supply chain management, all designed to scale with your business growth.",
    iconName: "Building2",
    status: "Available",
    tags: ["ERP", "Enterprise", "Business Solutions"],
    category: "erp",
    previewType: "custom",
  },
  {
    title: "Aramco CCC Setup",
    description: "Complete setup and configuration for Aramco CCC infrastructure, ensuring optimal performance and reliability.",
    iconName: "Settings",
    status: "Live",
    tags: ["Infrastructure", "Configuration", "Enterprise"],
    category: "setup",
    previewType: "placeholder",
    previewLabel: "Aramco CCC Setup Preview",
  },
  {
    title: "Chatbot Development",
    description: "We build custom AI-powered and rule-based chatbot solutions for instant customer support, streamlined business processes, and seamless user experiences. Our chatbots integrate with popular AI models like ChatGPT and Gemini, handle complex queries, process orders, provide product information, and escalate issues to human agents when needed. Perfect for 24/7 customer service and business automation.",
    iconName: "MessageSquare",
    status: "Live",
    tags: ["AI", "Chat", "Support"],
    category: "chatbot",
    previewType: "custom",
  },
  {
    title: "System Setup & Architecture",
    description: "Design and implement robust system architectures with scalable infrastructure and optimal performance configurations. We provide cloud architecture design, security implementation, database configuration, deployment pipelines, and infrastructure setup for enterprise systems. Our solutions ensure high availability, disaster recovery, scalability, and compliance with enterprise security standards using AWS, Supabase, Firebase, and other cloud platforms.",
    iconName: "Server",
    status: "Available",
    tags: ["Architecture", "Infrastructure", "Scalability"],
    category: "infrastructure",
    previewType: "placeholder",
    previewLabel: "System Architecture Preview",
  },
  {
    title: "UI/UX",
    description: "Create beautiful, intuitive user interfaces and exceptional user experiences that engage users and drive conversions. We offer comprehensive UI/UX design services including user research, wireframes, prototyping, branding, design systems, and full visual design. Our designs are optimized for usability, accessibility, and conversion, ensuring your digital products provide exceptional user experiences across all devices and platforms.",
    iconName: "Palette",
    status: "Available",
    tags: ["Design", "User Experience", "Interface"],
    category: "uiux",
    previewType: "placeholder",
    previewLabel: "UI/UX Design Preview",
  },
];

const Services = () => {
  const router = useRouter();

  // Memoized click handler to prevent unnecessary re-renders
  const handleServiceClick = useCallback((item) => {
    if (item?.category) {
      router.push(`/projects?category=${item.category}`);
    }
  }, [router]);

  // Memoized service items with icons and previews - only recomputes if dependencies change
  const serviceItems = useMemo(() => {
    return serviceItemsConfig.map((item) => {
      const IconComponent = iconConfig[item.iconName];
      const icon = IconComponent ? <IconComponent className="w-4 h-4 text-orange-500" /> : null;
      
      let preview = null;
      if (item.previewType === "custom" && item.category === "chatbot") {
        preview = <ChatBotPreview />;
      } else {
        // Map each service to its specific preview component
        switch (item.category) {
          case "web":
            preview = <WebAppPreview />;
            break;
          case "mobile":
            preview = <MobileAppPreview />;
            break;
          case "infrastructure":
            preview = <InfrastructurePreview />;
            break;
          case "uiux":
            preview = <UIUXPreview />;
            break;
          case "setup":
            preview = <AramcoSetupPreview />;
            break;
          case "erp":
            preview = <ERPPreview />;
            break;
          default:
            preview = <PreviewPlaceholder label={item.previewLabel} />;
        }
      }

      return {
        ...item,
        icon,
        preview,
      };
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-foreground relative overflow-hidden">
      {/* Ambient glow similar to Work section - optimized with will-change */}
      <div className="fixed right-0 top-0 h-[800px] w-[800px] bg-[radial-gradient(circle_at_center,hsl(16_100%_56%/0.15),transparent_70%)] blur-3xl pointer-events-none will-change-transform"></div>
      <div className="fixed left-0 bottom-0 h-[600px] w-[600px] bg-[radial-gradient(circle_at_center,hsl(16_100%_56%/0.1),transparent_70%)] blur-3xl pointer-events-none will-change-transform"></div>

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
        <section aria-label="Our Services">
          <BentoGrid items={serviceItems} onClick={handleServiceClick} />
        </section>
      </main>
    </div>
  );
};

export default Services;
