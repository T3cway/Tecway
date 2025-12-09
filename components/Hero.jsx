"use client";

import AnimatedHero from "./AnimatedHero";

const Hero = () => {
  const handlePrimaryClick = () => {
    const bookCallSection = document.getElementById("book-call");
    if (bookCallSection) {
      bookCallSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSecondaryClick = () => {
    const whyChooseUsSection = document.getElementById("why-choose-us");
    if (whyChooseUsSection) {
      whyChooseUsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
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
