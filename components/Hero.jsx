"use client";

import AnimatedShaderHero from "@/components/ui/animated-shader-hero";
import AnimatedHero from "@/components/Animated-hero";

const Hero = () => {
  const handlePrimaryClick = () => {
    // Add your navigation logic here
    console.log("Let's get started clicked!");
  };

  const handleSecondaryClick = () => {
    // Add your navigation logic here
    console.log("How it works clicked!");
  };

  return (
    // <AnimatedShaderHero
    //   trustBadge={{
    //     text: "Cutting-Edge Digital Solutions",
    //     icons: ["✨"]
    //   }}
    //   headline={{
    //     line1: "Fuel Your Growth With",
    //     line2: "Next-Gen Technology"
    //   }}
    //   subtitle="From intelligent automation to custom web, mobile, and digital experiences — we help businesses unlock new levels of productivity, efficiency, and growth"
    //   buttons={{
    //     primary: {
    //       text: "Let's get started",
    //       onClick: handlePrimaryClick
    //     },
    //     secondary: {
    //       text: "How it works",
    //       onClick: handleSecondaryClick
    //     }
    //   }}
    // />
    <AnimatedHero
      headline={{
        line1: "Fuel Your Growth With",
        line2: "Next-Gen Technology",
      }}
      subtitle="From intelligent automation to custom web, mobile, and digital experiences — we help businesses unlock new levels of productivity, efficiency, and growth"
      buttons={{
        primary: {
          text: "Start Now",
          onClick: handlePrimaryClick,
        },
        secondary: {
          text: "How it works",
          onClick: handleSecondaryClick,
        },
      }}
      trustBadge={{
        text: "Cutting-Edge Digital Solutions",
        icons: ["✨"],
      }}
    />
  );
};

export default Hero;
