"use client";

import { useMemo, useCallback, memo } from "react";
import { BentoGrid } from "@/components/ui/bento-grid";
import ChatBotPreview from "./ChatBotPreview";
import {
  Globe,
  Smartphone,
  Settings,
  MessageSquare,
  Server,
  Palette,
  Code,
  Layers,
  Database,
  Cpu,
  Sparkles,
  Monitor,
} from "lucide-react";
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
    {/* Phone mockup */}
    <div className="relative w-32 h-48 border-2 border-white/20 rounded-[2rem] bg-zinc-950 p-2 shadow-2xl">
      <div className="w-full h-full bg-gradient-to-br from-orange-500/10 to-purple-500/10 rounded-[1.5rem] border border-white/10 p-3 flex flex-col">
        {/* Status bar */}
        <div className="flex justify-between items-center mb-2">
          <div className="flex gap-1">
            <div className="w-1 h-1 rounded-full bg-white/60"></div>
            <div className="w-1 h-1 rounded-full bg-white/40"></div>
            <div className="w-1 h-1 rounded-full bg-white/20"></div>
          </div>
          <Smartphone className="w-3 h-3 text-orange-500/60" />
        </div>
        {/* App content */}
        <div className="flex-1 space-y-2">
          <div className="h-3 bg-white/10 rounded w-full"></div>
          <div className="h-2 bg-white/5 rounded w-3/4"></div>
          <div className="mt-3 space-y-1.5">
            <div className="h-8 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded"></div>
            <div className="h-8 bg-white/5 rounded"></div>
            <div className="h-8 bg-white/5 rounded"></div>
          </div>
        </div>
        {/* Home indicator */}
        <div className="h-1 w-12 bg-white/30 rounded-full mx-auto mt-2"></div>
      </div>
    </div>
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
        <line
          x1="20%"
          y1="20%"
          x2="50%"
          y2="50%"
          stroke="currentColor"
          strokeWidth="1"
          className="text-orange-500"
        />
        <line
          x1="80%"
          y1="20%"
          x2="50%"
          y2="50%"
          stroke="currentColor"
          strokeWidth="1"
          className="text-orange-500"
        />
        <line
          x1="20%"
          y1="80%"
          x2="50%"
          y2="50%"
          stroke="currentColor"
          strokeWidth="1"
          className="text-orange-500"
        />
        <line
          x1="80%"
          y1="80%"
          x2="50%"
          y2="50%"
          stroke="currentColor"
          strokeWidth="1"
          className="text-orange-500"
        />
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
            <div
              className="w-2 h-2 bg-orange-500/60 rounded-full animate-pulse"
              style={{ animationDelay: "0.2s" }}
            ></div>
          </div>
          <div className="w-12 h-8 bg-gradient-to-br from-orange-500/20 to-transparent rounded border border-orange-500/30 flex items-center justify-center">
            <div
              className="w-2 h-2 bg-orange-500/60 rounded-full animate-pulse"
              style={{ animationDelay: "0.4s" }}
            ></div>
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

// Fallback placeholder for any unmapped services
const PreviewPlaceholder = memo(({ label, className = "" }) => (
  <div
    className={`relative bg-zinc-900/50 rounded-lg border border-white/10 h-48 flex items-center justify-center overflow-hidden group-hover:border-orange-500/30 transition-all duration-300 ${className}`}
  >
    <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/5 transition-colors duration-300"></div>
    <div className="text-white/40 text-sm font-medium relative z-10">
      {label}
    </div>
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
};

// Service items moved outside component to prevent recreation on every render
const serviceItemsConfig = [
  {
    title: "Web Applications",
    description:
      "Build robust, scalable, and user-friendly web apps tailored to your business needs. From MVPs to full-scale platforms.",
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
    description:
      "Bring your ideas to life with powerful mobile apps. We design and develop scalable iOS and Android applications.",
    iconName: "Smartphone",
    status: "Available",
    tags: ["iOS", "Android", "React Native"],
    category: "mobile",
    previewType: "placeholder",
    previewLabel: "Mobile App Preview",
  },
  {
    title: "Aramco CCC Setup",
    description:
      "Complete setup and configuration for Aramco CCC infrastructure, ensuring optimal performance and reliability.",
    iconName: "Settings",
    status: "Live",
    tags: ["Infrastructure", "Configuration", "Enterprise"],
    category: "setup",
    previewType: "placeholder",
    previewLabel: "Aramco CCC Setup Preview",
  },
  {
    title: "Chatbot Development",
    description:
      "We build custom AI chat solutions for instant support, streamlined processes, and a seamless audience experience.",
    iconName: "MessageSquare",
    status: "Live",
    tags: ["AI", "Chat", "Support"],
    category: "chatbot",
    previewType: "custom",
  },
  {
    title: "System Setup & Architecture",
    description:
      "Design and implement robust system architectures with scalable infrastructure and optimal performance configurations.",
    iconName: "Server",
    status: "Available",
    tags: ["Architecture", "Infrastructure", "Scalability"],
    category: "infrastructure",
    previewType: "placeholder",
    previewLabel: "System Architecture Preview",
  },
  {
    title: "UI/UX",
    description:
      "Create beautiful, intuitive user interfaces and exceptional user experiences that engage users and drive conversions.",
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
  const handleServiceClick = useCallback(
    (item) => {
      if (item?.category) {
        router.push(`/projects?category=${item.category}`);
      }
    },
    [router]
  );

  // Memoized service items with icons and previews - only recomputes if dependencies change
  const serviceItems = useMemo(() => {
    return serviceItemsConfig.map((item) => {
      const IconComponent = iconConfig[item.iconName];
      const icon = IconComponent ? (
        <IconComponent className="w-4 h-4 text-orange-500" />
      ) : null;

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
